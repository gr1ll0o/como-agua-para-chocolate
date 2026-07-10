import os
import uuid

from flask import Flask, render_template, request, send_file, redirect, url_for
from openpyxl import load_workbook

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CARPETA_SUBIDAS = os.path.join(BASE_DIR, "uploads")
CARPETA_SALIDAS = os.path.join(BASE_DIR, "salidas")

os.makedirs(CARPETA_SUBIDAS, exist_ok=True)
os.makedirs(CARPETA_SALIDAS, exist_ok=True)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/subir", methods=["POST"])
def subir():
    archivo = request.files.get("excel")
    if not archivo or archivo.filename == "":
        return redirect(url_for("index"))

    nombre_temp = f"{uuid.uuid4().hex}.xlsx"
    ruta_temp = os.path.join(CARPETA_SUBIDAS, nombre_temp)
    archivo.save(ruta_temp)

    wb = load_workbook(ruta_temp, data_only=True)
    ws = wb.active
    cant_columns = int(ws.max_column)

    columnas = []
    for i in range(cant_columns):
        columnas.append({"indice": i, "nombre": f"Columna {i + 1}"})

    return render_template(
        "columnas.html",
        columnas=columnas,
        archivo_temp=nombre_temp,
    )


@app.route("/procesar", methods=["POST"])
def procesar():
    archivo_temp = request.form.get("archivo_temp")
    ruta_temp = os.path.join(CARPETA_SUBIDAS, archivo_temp)

    if not archivo_temp or not os.path.isfile(ruta_temp):
        return redirect(url_for("index"))

    wb = load_workbook(ruta_temp, data_only=True)
    ws = wb.active
    cantColumns = int(ws.max_column)

    valColumns = []
    for i in range(cantColumns):
        valColumns.append(request.form.get(f"ancho_{i}", "0"))

    nombre_salida = f"{uuid.uuid4().hex}.txt"
    ruta_salida = os.path.join(CARPETA_SALIDAS, nombre_salida)

    error = None
    j = 0
    long = 0

    with open(ruta_salida, "w", encoding="utf-8") as archivo:
        for fila in ws.iter_rows(values_only=True):
            for column in fila:
                if j == 0:
                    for i in range(int(valColumns[j])):
                        archivo.write(" ")
                    archivo.write(str(column))
                    j += 1
                long += len(str(column))
                if j != 1:
                    archivo.write(str(column))

                if j < cantColumns:
                    cantEsp = int(valColumns[j]) - int(long)
                    cantEsp -= 1
                    long += cantEsp
                    if cantEsp < 0:
                        error = "Hay una fila que no entra en la cantidad de espacios dados"
                        break
                    for i in range(cantEsp):
                        archivo.write(" ")
                j += 1
            if error:
                break
            j = 0
            long = 0
            archivo.write("\n")

    os.remove(ruta_temp)

    if error:
        os.remove(ruta_salida)
        return render_template("error.html", mensaje=error)

    return render_template("descarga.html", nombre_salida=nombre_salida)


@app.route("/descargar/<nombre_salida>")
def descargar(nombre_salida):
    ruta_salida = os.path.join(CARPETA_SALIDAS, nombre_salida)
    return send_file(ruta_salida, as_attachment=True, download_name="archivo.txt")


if __name__ == "__main__":
    app.run(debug=True)