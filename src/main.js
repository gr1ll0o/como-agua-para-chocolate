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

let jokers = 3;
let c; // de 0 - 2 sino t rompo la cabeza

let joker = document.querySelector("#joker");

joker.addEventListener('click', () => {
    consumeJoker(c); 
});

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
    "Tía Mary (Mary Brown)"
];

// FRASE : AUTOR
const phrases = {
    "Sabes muy bien que por ser la más chica de las mujeres a ti te corresponde cuidarme hasta el día de mi muerte.": ["Mamá Elena", "Rosaura", "Tita"],
    "¿Ay sí, no? ¡Su ‘amá habla d'estar preparada para el matrimoño, como si juera un plato de enchiladas! ¡Y ni ansina, porque pos no es lo mismo que lo mesmo!": ["Chencha", "Nacha", "Gertrudis"],
    "Ya no hay nadie en la cocina mi niña, llora ahora, porque mañana no quiero que te vean hacerlo. Mucho menos Rosaura.": ["Nacha", "Chencha", "Tita"],
    "Estoy seguro de que así será, pues logré con esta boda lo que tanto anhelaba: estar cerca de usted, la mujer que verdaderamente amo...": ["Pedro", "Doctor John Brown", "Alex Brown"],
    "¡Éste es un placer de los dioses!": ["Pedro", "Doctor John Brown", "Jorge Lobo"],
    "Tiene demasiada sal.": ["Mamá Elena", "Rosaura", "Tita"],
    "¡Qué bien se ve este niño, al lado de una tía tan bella!": ["Doctor John Brown", "Pedro", "Jorge Lobo"],
    "Los hombres no son tan importantes para vivir padre. Ni la revolución es tan peligrosa como la pintan, ¡peor es el chile y el agua lejos!": ["Mamá Elena", "Gertrudis", "Rosaura"],
    "¡Mire lo que hago con sus órdenes! ¡Ya me cansé! ¡Ya me cansé de obedecerla!": ["Tita", "Gertrudis", "Rosaura"],
    "Como ve, todos tenemos en nuestro interior los elementos necesarios para producir fósforo.": ["Doctor John Brown", "Tita", "Pedro"],
    "Porque no quiero.": ["Tita", "Rosaura", "Gertrudis"],
    "Si caí aquí fue porque sentía que un fuego muy intenso me quemaba por dentro, el hombre que me cogió en el campo prácticamente me salvó la vida.": ["Gertrudis", "Tita", "Chencha"],
    "¡Sí niña, pero 'orita pa' qué quiero más agrura, si con el mole tengo! Déjame ir, no seas ingrata.": ["Chencha", "Nacha", "Rosaura"],
    "Oye, papi, yo quiero casarme también, así como tú. Pero yo con esta niñita.": ["Alex Brown", "Pedro", "Doctor John Brown"],
    "¡Virgen Santísima que’stás en los cielos, recoge el alma de mi siñora Elena pa’que deje de vagar en las tiñeblas del pulgatorio!": ["Chencha", "Nacha", "Gertrudis"],
    "¡Te has olvidado de lo que es la moral, el respeto, las buenas costumbres! No vales nada, eres una cualquiera que no se respeta ni a sí misma.": ["Mamá Elena", "Rosaura", "Gertrudis"],
    "Yo no sé de dónde sacó ese ritmo Gertrudis. A mamá no le gustaba bailar y dicen que papá lo hacía muy mal.": ["Rosaura", "Tita", "Mamá Elena"],
    "Mira Tita, la mera verdad es que la verdad no existe, depende del punto de vista de cada quien.": ["Gertrudis", "Tita", "Rosaura"],
    "¡Yo sí tengo dignidad! Que se busque una cualquiera como tú para sus cochinadas, pero eso sí, en esta casa yo voy a seguir siendo la esposa.": ["Rosaura", "Mamá Elena", "Tita"],
    "Tita, no me importa lo que hiciste, hay acciones en la vida a las que no hay que darles tanta importancia, si éstas no modifican lo esencial. Lo que me dijiste no cambió mi manera de pensar...": ["Doctor John Brown", "Pedro", "Jorge Lobo"],
    "Esa noche no dormí pensando en pedir tu mano de inmediato. No sabía que tendría que dejar pasar 22 años para volverte a preguntar si quieres ser mi esposa.": ["Pedro", "Doctor John Brown", "Alex Brown"],
    "Para que recuerdes que el flojo y el mezquino andan doble su camino.": ["Mamá Elena", "Nacha", "Chencha"],
    "Señorita Tita, quisiera aprovechar la oportunidad de poder hablarle a solas para decirle que estoy profundamente enamorado de usted.": ["Pedro", "Doctor John Brown", "Alex Brown"],
    "Te felicito, las puntadas son perfectas, pero no lo hilvanaste, ¿verdad?": ["Mamá Elena", "Rosaura", "Tita"],
    "No, no podría, necesito una respuesta en este momento: el amor no se piensa, se siente o no se siente.": ["Pedro", "Doctor John Brown", "Jorge Lobo"],
    "No voy a permitir tus desmandadas, ni voy a permitir que le arruines a tu hermana su boda, con tu actitud de víctima.": ["Mamá Elena", "Rosaura", "Tita"],
    "Sólo las ollas saben los hervores de su caldo, pero yo adivino los tuyos, y ya deja de llorar, que me estás mojando el fondant y no va a servir, anda, ya vete.": ["Nacha", "Chencha", "Mamá Elena"],
    "Es la primera vez que Rosaura cocina y opino que no lo hizo tan mal. ¿Qué opina usted Pedro?": ["Mamá Elena", "Rosaura", "Tita"],
    "Nunca había probado algo tan exquisito, muchas gracias.": ["Pedro", "Doctor John Brown", "Alex Brown"],
    "Doctor, ¿no sería molesto para usted venir dos veces al día, hasta que mi hija salga del peligro?": ["Mamá Elena", "Rosaura", "Tita"],
    "Lo que pasa es que yo no me puedo casar, ni tener hijos, porque tengo que cuidar a mi mamá hasta que muera.": ["Tita", "Rosaura", "Gertrudis"],
    "¡En esta casa no hay lugar para dementes!": ["Mamá Elena", "Rosaura", "Tita"],
    "Cada persona tiene que descubrir cuáles son sus detonadores para poder vivir, pues la combustión que se produce al encenderse uno de ellos es lo que nutre de energía el alma.": ["Doctor John Brown", "Tía Mary (Mary Brown)", "Pedro"],
    "Por eso hay que permanecer alejados de personas que tengan un aliento gélido. Su sola presencia podría apagar el fuego más intenso...": ["Doctor John Brown", "Tía Mary (Mary Brown)", "Mamá Elena"],
    "¡John! ¡No se vaya, por favor!": ["Tita", "Gertrudis", "Rosaura"],
    "Porque está asquerosamente amargo, no lo quiero. ¡Llévatelo! ¿No me oíste?": ["Mamá Elena", "Rosaura", "Tita"],
    "Tita, quisiera decirle que considero un lamentable error de su parte la idea que tiene de casarse con John. Aún está a tiempo de no cometer esa equivocación, ¡no acepte ese matrimonio, por favor!": ["Pedro", "Gertrudis", "Alex Brown"],
    "¿Ya te sientes bien? Aún te noto medio mareada, ¡y tienes una mirada! Que de no ser porque yo sé perfectamente que eres una muchacha decente juraría que estás embarazada.": ["Chencha", "Nacha", "Rosaura"],
    "¿Embarazada? ¡Sólo a usted se le ocurre! ¿Y qué tiene que ver la mirada con eso?": ["Tita", "Rosaura", "Gertrudis"],
    "... Y creo que entonces sería bueno que Pedro se enterara de que esperas un hijo suyo.": ["Gertrudis", "Rosaura", "Chencha"],
    "La que se debería de ir es usted. Ya me cansé de que me atormente. ¡Déjame en paz de una vez por todas!": ["Tita", "Gertrudis", "Rosaura"],
    "Creo que tenemos pendiente una conversación, ¿no lo crees?": ["Rosaura", "Tita", "Gertrudis"],
    "No te quiero presionar, sólo quiero asegurarte que a mi lado serás feliz.": ["Doctor John Brown", "Pedro", "Alex Brown"],
    "¿Te acuerdas de cuando escuchamos por primera vez esa pieza?": ["Pedro", "Doctor John Brown", "Alex Brown"],
    "Felicidades Pedro, tu hija no pudo haber encontrado mejor partido que Alex en diez millas a la redonda.": ["Jorge Lobo", "Doctor John Brown", "Pedro"],
    "¿Y de qué me tiene que venir a hablar ese señor?": ["Mamá Elena", "Rosaura", "Tita"],
    "Yo soy hombre de pocas, pero muy firmes palabras. Le juro que tendrá mi amor por siempre. ¿Qué hay del suyo? ¿Usted también lo siente por mí?": ["Pedro", "Doctor John Brown", "Alex Brown"],
    "¡Abre los ojos y mira tu pollo!": ["Mamá Elena", "Nacha", "Chencha"],
    "Es necesario que me permita dirigirle unas palabras...": ["Pedro", "Doctor John Brown", "Jorge Lobo"],
    "¿Ya viste a Tita? ¡Pobrecita, su hermana se va a casar con su novio! Yo los vi un día en la plaza del pueblo, tomados de la mano.": ["Invitada a la boda", "Chencha", "Nacha"],
    "¿Y a mí no me va a felicitar?": ["Pedro", "Alex Brown", "Jorge Lobo"],
    "No, para ser la primera vez no está tan mal.": ["Pedro", "Doctor John Brown", "Mamá Elena"],
    "Hoy que comimos este platillo, huyó de la casa Gertrudis...": ["Tita", "Rosaura", "Chencha"],
    "Por cómo se están presentando las cosas padre, me preocupa que un día mi hija Rosaura necesite un médico y no lo podamos traer, como el día en que dio a luz.": ["Mamá Elena", "Rosaura", "Tita"],
    "Y eso que no es su propio hijo, ya me imagino lo bonita que se va a ver cuando el niño que cargue sea el suyo.": ["Doctor John Brown", "Pedro", "Jorge Lobo"],
    "Sí, mami, tomó su té y se durmió.": ["Tita", "Rosaura", "Chencha"],
    "Venimos a pedirle, por las buenas, su cooperación para la causa.": ["Capitán Juan Alejandrez", "Pedro", "Jorge Lobo"],
    "Y yo, por las buenas, les digo que se lleven lo que quieran de las provisiones que encuentren en el granero y los corrales. Pero eso sí, las que tengo dentro de mi casa no las tocan, ¿entendido?": ["Mamá Elena", "Capitán Juan Alejandrez", "Pedro"],
    "Una mujer así de valiente siempre tendrá mi admiración.": ["Capitán Juan Alejandrez", "Pedro", "Jorge Lobo"],
    "Es q'el Felipe yástá aquí y dice ¡que si petatió!": ["Chencha", "Nacha", "Rosaura"],
    "En 1669, Brandt, químico de Hamburgo, buscando la piedra filosofal descubrió el fósforo.": ["Doctor John Brown", "Tía Mary (Mary Brown)", "Pedro"],
    "Ya teniendo la masa para los fósforos, el paso que sigue es preparar el cartón para las cerillas.": ["Doctor John Brown", "Tita", "Pedro"],
    "Hay muchas maneras de poner a secar una caja de cerillos húmeda, pero puede estar segura de que tiene remedio.": ["Doctor John Brown", "Tía Mary (Mary Brown)", "Pedro"],
    "No quiero romper la ley del silencio que se ha impuesto, así que como un secreto entre los dos, le voy a pedir que en cuanto yo salga usted me escriba en esta pared las razones por las que no habla, ¿de acuerdo?": ["Doctor John Brown", "Tita", "Mamá Elena"],
    "Doña Elena, no se altere por favor, le hace daño. Yo le quito esa charola, pero dígame ¿no tiene deseos de comer?": ["Doctor John Brown", "Pedro", "Tita"],
    "De ninguna manera, doctor, si fuera la medicina todo el tiempo tendría ese sabor en la boca y no es así. Algo me están dando con la comida.": ["Mamá Elena", "Rosaura", "Tita"],
    "¡Ya sabe que ella no se puede casar!": ["Mamá Elena", "Rosaura", "Tita"],
    "Toditos dicen que plato de segunda mesa ni en otra vida, ¡menos en ésta!": ["Chencha", "Nacha", "Gertrudis"],
    "Pedro, usted no es nadie para decirme lo que tengo que hacer, o no. Cuando usted se casó yo no le pedí que no lo hiciera, a pesar de que esa boda me destrozó.": ["Tita", "Rosaura", "Gertrudis"],
    "Pues lo piensa demasiado tarde. Ahora ya no hay remedio. Y le suplico que nunca más en la vida me vuelva a molestar...": ["Tita", "Rosaura", "Gertrudis"],
    "¿Qué dices Chencha, de qué hablas?": ["Rosaura", "Tita", "Mamá Elena"],
    "La cena está servida.": ["Chencha", "Nacha", "Rosaura"],
    "¡No! ¡Mi hijo no está maldito!": ["Tita", "Rosaura", "Gertrudis"],
    "¡Sí lo está! ¡Lo maldigo yo! ¡A él y a ti, para siempre!": ["Mamá Elena (Fantasma)", "Mamá Elena", "Tita"],
    "Cierra la puerta, niña, ¿no ves el frío qui’ace? Últimamente te veo muy despatoladota. ¿Pos qué tráis pues’n?": ["Chencha", "Nacha", "Gertrudis"],
    "Es muy fácil, ¿por qué no va al cuarto obscuro? Ahí lo podemos hacer sin que nadie nos moleste.": ["Pedro", "Alex Brown", "Doctor John Brown"],
    "Si lo sigues queriendo, ¿cómo es entonces que te vas a casar con John?": ["Gertrudis", "Rosaura", "Chencha"],
    "Nada más déjame quitar esto de la lumbre y ahorita sigues llorando, ¿sí?": ["Gertrudis", "Tita", "Chencha"],
    "¿Por qué no me lo había dicho?": ["Pedro", "Doctor John Brown", "Alex Brown"],
    "¡Me creo lo que soy! Una persona que tiene todo el derecho a vivir la vida como mejor me plazca. Déjeme de una vez por todas, ¡ya no la soporto!": ["Tita", "Gertrudis", "Rosaura"],
    "Tú tuviste un novio indebidamente. No te correspondía tenerlo.": ["Rosaura", "Mamá Elena", "Tita"],
    "Y que voy a romper cuantas veces sea necesario, mientras esa maldita tradición no me tome en cuenta.": ["Tita", "Gertrudis", "Rosaura"],
    "Mmmm. Esto está delicioso, Tita.": ["Tía Mary (Mary Brown)", "Doctor John Brown", "Pedro"],
    "En el tiempo que estuviste fuera tuve relaciones con un hombre del que siempre había estado enamorada y perdí mi virginidad. Por eso ya no puedo casarme contigo.": ["Tita", "Gertrudis", "Rosaura"],
    "¡Claro! No quiero morirme sin lograr que lo seas. Siempre he soñado con entrar contigo a una iglesia llena de flores blancas...": ["Pedro", "Doctor John Brown", "Alex Brown"],
    "¿Vestida de blanco?": ["Tita", "Rosaura", "Gertrudis"],
    "Y quiero que sepas que no me vas a convencer de no hacerlo. No me importa lo que piensen ni mi hija ni nadie más.": ["Pedro", "Mamá Elena", "Doctor John Brown"],
    "Sí, Alex Brown es un excelente muchacho. Lo único malo es que nos van a abandonar.": ["Pedro", "Jorge Lobo", "Doctor John Brown"]
};

const choosePhrase = (list) => {
    const keys = Object.keys(list); 
    const randomKey = keys[Math.floor(Math.random() * keys.length)]; 
    return {
        phrase: randomKey,
        options: [...list[randomKey]]
    };
};

const loadStage = (stage) => {
    phDisplay.innerHTML = '"' + stage.phrase + '"';

    let options = [...stage.options];
    options.sort(() => Math.random() - 0.5);
    correctIndex = options.indexOf(stage.options[0]);
    buttons.forEach((button, i) => {
        button.textContent = options[i];
    });
};

function update(win) {
    results.innerHTML = ``;
    if (!win) { // PERDIO
        phDisplay.style.color = "#A83232";
        buttons.forEach((btn) => {btn.disabled = true;});
        if (score > localStorage.getItem('record')) {
            results.innerHTML += `<p id="record">¡NUEVO RÉCORD!</p>`
            localStorage.setItem('record', score);
        }
        results.innerHTML += `<p>${score} correcta(s).</p>`
        setTimeout(() => endgame.classList.add("active"), 1000);
    }else{ // GANO
        phDisplay.style.color = "#477548";
        if (score > record) record = score;
        scoreDisplay.innerHTML = "CORRECTAS: " + score + " | RÉCORD: " + record;
        buttons.forEach((btn) => {
            btn.disabled = true;
        });
        setTimeout(() => {
            phDisplay.style.color = "#392D29";
            stage = choosePhrase(phrases);
            loadStage(stage);
            buttons.forEach((btn) => {
                btn.disabled = false;
                btn.style.display = "block";
                btn.style.backgroundColor = "#6B292D"
            });
        }, 600);
    }
}

// CONSUMIR JOKER
function consumeJoker(c) {
    if (jokers <= 0) return; // si no hay comodines, sos un bldo
    if (c < 0 || c > 2) { // si está fuera de 0 y 2 sos un bldo
        console.log("sos un boludo."); 
        return;
    }

    jokers--; // restamos un comodin
    let opt;

    do opt = Math.floor(Math.random() * 2);
    while (opt == correct) // elegis una opción que no sea la correcta

    buttons[opt].style.display = "none"; // lo ocultas
    joker.textContent = `COMODINES (${jokers})` // actualizas valor de comodines
}

let score = 0;
let record = 0;
let correct = 0;
let stage = choosePhrase(phrases);

function startGame() {
    if (localStorage.getItem('record') == null) {
        record = 0;
        localStorage.setItem('record', 0);
    }else record = localStorage.getItem('record');

    endgame.classList.remove("active");
    stage = choosePhrase(phrases);
    loadStage(stage);
    score = 0;
    jokers = 3;
    phDisplay.style.color = "#392D29";
    buttons.forEach((btn) => {
        btn.disabled = false;
        btn.style.display = "block";
        btn.style.backgroundColor = "#6B292D"
    });
    scoreDisplay.innerHTML = "CORRECTAS: " + score + " | RÉCORD: " + record;
}

buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        if (i === correctIndex) {
            score++;
            btn.style.backgroundColor = "#A4A56A";
            update(true);
        } else {
            btn.style.backgroundColor = "#392D29";
            update(false);
        }
    });
});

restart.addEventListener('click', () => startGame());

startGame();