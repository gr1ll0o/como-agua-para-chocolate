const phDisplay = document.querySelector(".phrase h2");
const scoreDisplay = document.querySelector(".score p");

const endgame = document.querySelector(".endgame");
const results = document.querySelector("#results");
const restart = document.querySelector("#restart");

const buttons = [
    document.querySelector("#opt1"),
    document.querySelector("#opt2"),
    document.querySelector("#opt3")
];

const pjs = [
    "Mamá Elena",
    "Chencha",
    "Nacha",
    "Tita",
    "Pedro",
    "Doctor John Brown",
    "Gertrudis",
    "Alex Brown",
    "Rosaura",
    "Sargento Treviño",
    "Paquita Lobo",
    "Jorge Lobo"
];

// FRASE : AUTOR
const phrases = {
    "Sabes muy bien que por ser la más chica de las mujeres a ti te corresponde cuidarme hasta el día de mi muerte.": "Mamá Elena",
    "¿Ay sí, no? ¡Su ‘amá habla d'estar preparada para el matrimoño, como si juera un plato de enchiladas! ¡Y ni ansina, porque pos no es lo mismo que lo mesmo!": "Chencha",
    "Ya no hay nadie en la cocina mi niña, llora ahora, porque mañana no quiero que te vean hacerlo. Mucho menos Rosaura.": "Nacha",
    "Estoy seguro de que así será, pues logré con esta boda lo que tanto anhelaba: estar cerca de usted, la mujer que verdaderamente amo...": "Pedro",
    "¡Éste es un placer de los dioses!": "Pedro",
    "Tiene demasiada sal.": "Mamá Elena",
    "¡Qué bien se ve este niño, al lado de una tía tan bella!": "Doctor John Brown",
    "Los hombres no son tan importantes para vivir padre. Ni la revolución es tan peligrosa como la pintan, ¡peor es el chile y el agua lejos!": "Mamá Elena",
    "¡Mire lo que hago con sus órdenes! ¡Ya me cansé! ¡Ya me cansé de obedecerla!": "Tita",
    "Como ve, todos tenemos en nuestro interior los elementos necesarios para producir fósforo.": "Doctor John Brown",
    "Porque no quiero.": "Tita",
    "Si caí aquí fue porque sentía que un fuego muy intenso me quemaba por dentro, el hombre que me cogió en el campo prácticamente me salvó la vida.": "Gertrudis",
    "¡Sí niña, pero 'orita pa' qué quiero más agrura, si con el mole tengo! Déjame ir, no seas ingrata.": "Chencha",
    "Oye, papi, yo quiero casarme también, así como tú. Pero yo con esta niñita.": "Alex Brown",
    "¡Virgen Santísima que’stás en los cielos, recoge el alma de mi siñora Elena pa’que deje de vagar en las tiñeblas del pulgatorio!": "Chencha",
    "¡Te has olvidado de lo que es la moral, el respeto, las buenas costumbres! No vales nada, eres una cualquiera que no se respeta ni a sí misma.": "Mamá Elena",
    "Yo no sé de dónde sacó ese ritmo Gertrudis. A mamá no le gustaba bailar y dicen que papá lo hacía muy mal.": "Rosaura",
    "Mira Tita, la mera verdad es que la verdad no existe, depende del punto de vista de cada quien.": "Gertrudis",
    "¡Por fin! ¡Aquí está lo del punto de bola, mi generala!": "Sargento Treviño",
    "¡Yo sí tengo dignidad! Que se busque una cualquiera como tú para sus cochinadas, pero eso sí, en esta casa yo voy a seguir siendo la esposa.": "Rosaura",
    "Tita, no me importa lo que hiciste, hay acciones en la vida a las que no hay que darles tanta importancia, si éstas no modifican lo esencial. Lo que me dijiste no cambió mi manera de pensar...": "Doctor John Brown",
    "Esa noche no dormí pensando en pedir tu mano de inmediato. No sabía que tendría que dejar pasar 22 años para volverte a preguntar si quieres ser mi esposa.": "Pedro",
    "¡Qué barbaridad Tita! ¿Y ahora qué vas a hacer? Sin Esperanza en la casa ya no vas a poder vivir cerca de Pedro. Ay, antes de que te vayas a vivir a otro lado, dame la receta de los chiles en nogada.": "Paquita Lobo",
    "Para que recuerdes que el flojo y el mezquino andan doble su camino.": "Mamá Elena",
    "Señorita Tita, quisiera aprovechar la oportunidad de poder hablarle a solas para decirle que estoy profundamente enamorado de usted.": "Pedro",
    "Te felicito, las puntadas son perfectas, pero no lo hilvanaste, ¿verdad?": "Mamá Elena",
    "No, no podría, necesito una respuesta en este momento: el amor no se piensa, se siente o no se siente.": "Pedro",
    "No voy a permitir tus desmandadas, ni voy a permitir que le arruines a tu hermana su boda, con tu actitud de víctima.": "Mamá Elena",
    "Sólo las ollas saben los hervores de su caldo, pero yo adivino los tuyos, y ya deja de llorar, que me estás mojando el fondant y no va a servir, anda, ya vete.": "Nacha",
    "Es la primera vez que Rosaura cocina y opino que no lo hizo tan mal. ¿Qué opina usted Pedro?": "Mamá Elena",
    "Nunca había probado algo tan exquisito, muchas gracias.": "Pedro",
    "Doctor, ¿no sería molesto para usted venir dos veces al día, hasta que mi hija salga del peligro?": "Mamá Elena",
    "Lo que pasa es que yo no me puedo casar, ni tener hijos, porque tengo que cuidar a mi mamá hasta que muera.": "Tita",
    "¡En esta casa no hay lugar para dementes!": "Mamá Elena",
    "Cada persona tiene que descubrir cuáles son sus detonadores para poder vivir, pues la combustión que se produce al encenderse uno de ellos es lo que nutre de energía el alma.": "Doctor John Brown",
    "Por eso hay que permanecer alejados de personas que tengan un aliento gélido. Su sola presencia podría apagar el fuego más intenso...": "Doctor John Brown",
    "¡John! ¡No se vaya, por favor!": "Tita",
    "Porque está asquerosamente amargo, no lo quiero. ¡Llévatelo! ¿No me oíste?": "Mamá Elena",
    "Tita, quisiera decirle que considero un lamentable error de su parte la idea que tiene de casarse con John. Aún está a tiempo de no cometer esa equivocación, ¡no acepte ese matrimonio, por favor!": "Pedro",
    "¿Ya te sientes bien? Aún te noto medio mareada, ¡y tienes una mirada! Que de no ser porque yo sé perfectamente que eres una muchacha decente juraría que estás embarazada.": "Paquita Lobo",
    "¿Embarazada? ¡Sólo a usted se le ocurre! ¿Y qué tiene que ver la mirada con eso?": "Tita",
    "... Y creo que entonces sería bueno que Pedro se enterara de que esperas un hijo suyo.": "Gertrudis",
    "La que se debería de ir es usted. Ya me cansé de que me atormente. ¡Déjame en paz de una vez por todas!": "Tita",
    "Creo que tenemos pendiente una conversación, ¿no lo crees?": "Rosaura",
    "No te quiero presionar, sólo quiero asegurarte que a mi lado serás feliz.": "Doctor John Brown",
    "¿Te acuerdas de cuando escuchamos por primera vez esa pieza?": "Pedro",
    "Felicidades Pedro, tu hija no pudo haber encontrado mejor partido que Alex en diez millas a la redonda.": "Jorge Lobo"
};

const choosePhrase = (list) => {
    const keys = Object.keys(list); 
    const randomKey = keys[Math.floor(Math.random() * keys.length)]; 
    return { phrase: randomKey, pj: list[randomKey] };
};

const loadStage = (stage) => {
    phDisplay.innerHTML = '"' + stage.phrase + '"';

    let options = pjs.filter(pj => pj !== stage.pj);
    options.sort(() => Math.random() - 0.5);
    options = options.slice(0, 2);
    options.push(stage.pj);
    options.sort(() => Math.random() - 0.5);
    buttons.forEach((button, i) => button.textContent = options[i]);
};

function update(win) {
    results.innerHTML = ``;
    if (!win) { // PERDIO
        phDisplay.style.color = "#6B292D";
        buttons.forEach((btn) => {btn.disabled = true;});
        if (score > localStorage.getItem('record')) {
            results.innerHTML += `<p id="record">¡NUEVO RÉCORD!</p>`
            localStorage.setItem('record', score);
        }
        results.innerHTML += `<p>${score} correcta(s).</p>`
        setTimeout(() => {
            endgame.classList.add("active");
        }, 1000);
    }else{ // GANO
        phDisplay.style.color = "#A4A56A";
        if (score > record) record = score;
        scoreDisplay.innerHTML = "CORRECTAS: " + score + " | RÉCORD: " + record;
        buttons.forEach((btn) => {btn.disabled = true;});

        setTimeout(() => {
            phDisplay.style.color = "#392D29";
            stage = choosePhrase(phrases);
            loadStage(stage);
            buttons.forEach((btn) => {
                btn.disabled = false;
                btn.style.backgroundColor = "#6B292D"
            });
        }, 600);
    }
}

let score = 0;
let record = 0;
let stage = choosePhrase(phrases);

function startGame() {
    if (localStorage.getItem('record') == null) {
        record = 0;
        localStorage.setItem('record', 0);
    }else{
        record = localStorage.getItem('record');
    }
    endgame.classList.remove("active");
    stage = choosePhrase(phrases);
    loadStage(stage);
    score = 0;
    phDisplay.style.color = "#392D29";
    buttons.forEach((btn) => {
        btn.disabled = false;
        btn.style.backgroundColor = "#6B292D"
    });
    scoreDisplay.innerHTML = "CORRECTAS: " + score + " | RÉCORD: " + record;
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent == stage.pj) {
            score++;
            btn.style.backgroundColor = "#A4A56A"
            update(true);
        }else{
            btn.style.backgroundColor = "#392D29";
            update(false);
        }
    });
});

restart.addEventListener('click', () => startGame());

startGame();