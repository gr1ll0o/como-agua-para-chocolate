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
    "Jorge Lobo",
    "Don Pascual Muzquiz",
    "Invitada a la boda",
    "Padre Ignacio",
    "Capitán Juan Alejandrez",
    "Mamá Elena (Fantasma)",
    "Tía Mary (Mary Brown)"
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
    "Felicidades Pedro, tu hija no pudo haber encontrado mejor partido que Alex en diez millas a la redonda.": "Jorge Lobo",
    "¿Y de qué me tiene que venir a hablar ese señor?": "Mamá Elena",
    "Entonces, ¿te vas a casar sin sentir amor?": "Don Pascual Muzquiz",
    "¡Estoy perfectamente! Tienes unas hijas maravillosas. ¡Y su conversación es fascinante!": "Paquita Lobo",
    "Yo soy hombre de pocas, pero muy firmes palabras. Le juro que tendrá mi amor por siempre. ¿Qué hay del suyo? ¿Usted también lo siente por mí?": "Pedro",
    "¡Abre los ojos y mira tu pollo!": "Mamá Elena",
    "Es necesario que me permita dirigirle unas palabras...": "Pedro",
    "¿Ya viste a Tita? ¡Pobrecita, su hermana se va a casar con su novio! Yo los vi un día en la plaza del pueblo, tomados de la mano.": "Invitada a la boda",
    "¿Y a mí no me va a felicitar?": "Pedro",
    "No, para ser la primera vez no está tan mal.": "Pedro",
    "-Tita...": "Pedro",
    "Hoy que comimos este platillo, huyó de la casa Gertrudis...": "Tita",
    "Por cómo se están presentando las cosas padre, me preocupa que un día mi hija Rosaura necesite un médico y no lo podamos traer, como el día en que dio a luz.": "Mamá Elena",
    "Yo no opino lo mismo doña Elena, precisamente por cómo está la situación política, usted necesita de un hombre en casa que la defienda.": "Padre Ignacio",
    "Y eso que no es su propio hijo, ya me imagino lo bonita que se va a ver cuando el niño que cargue sea el suyo.": "Doctor John Brown",
    "Sí, mami, tomó su té y se durmió.": "Tita",
    "Venimos a pedirle, por las buenas, su cooperación para la causa.": "Capitán Juan Alejandrez",
    "Y yo, por las buenas, les digo que se lleven lo que quieran de las provisiones que encuentren en el granero y los corrales. Pero eso sí, las que tengo dentro de mi casa no las tocan, ¿entendido?": "Mamá Elena",
    "Una mujer así de valiente siempre tendrá mi admiración.": "Capitán Juan Alejandrez",
    "Es q'el Felipe yástá aquí y dice ¡que si petatió!": "Chencha",
    "En 1669, Brandt, químico de Hamburgo, buscando la piedra filosofal descubrió el fósforo.": "Doctor John Brown",
    "Ya teniendo la masa para los fósforos, el paso que sigue es preparar el cartón para las cerillas.": "Doctor John Brown",
    "Hay muchas maneras de poner a secar una caja de cerillos húmeda, pero puede estar segura de que tiene remedio.": "Doctor John Brown",
    "No quiero romper la ley del silencio que se ha impuesto, así que como un secreto entre los dos, le voy a pedir que en cuanto yo salga usted me escriba en esta pared las razones por las que no habla, ¿de acuerdo?": "Doctor John Brown",
    "Doña Elena, no se altere por favor, le hace daño. Yo le quito esa charola, pero dígame ¿no tiene deseos de comer?": "Doctor John Brown",
    "De ninguna manera, doctor, si fuera la medicina todo el tiempo tendría ese sabor en la boca y no es así. Algo me están dando con la comida.": "Mamá Elena",
    "¡Ya sabe que ella no se puede casar!": "Mamá Elena",
    "Toditos dicen que plato de segunda mesa ni en otra vida, ¡menos en ésta!": "Chencha",
    "Pedro, usted no es nadie para decirme lo que tengo que hacer, o no. Cuando usted se casó yo no le pedí que no lo hiciera, a pesar de que esa boda me destrozó.": "Tita",
    "Pues lo piensa demasiado tarde. Ahora ya no hay remedio. Y le suplico que nunca más en la vida me vuelva a molestar...": "Tita",
    "¿Qué dices Chencha, de qué hablas?": "Rosaura",
    "La cena está servida.": "Chencha",
    "¡No! ¡Mi hijo no está maldito!": "Tita",
    "¡Sí lo está! ¡Lo maldigo yo! ¡A él y a ti, para siempre!": "Mamá Elena (Fantasma)",
    "Cierra la puerta, niña, ¿no ves el frío qui’ace? Últimamente te veo muy despatoladota. ¿Pos qué tráis pues’n?": "Chencha",
    "Es muy fácil, ¿por qué no va al cuarto obscuro? Ahí lo podemos hacer sin que nadie nos moleste.": "Pedro",
    "Si lo sigues queriendo, ¿cómo es entonces que te vas a casar con John?": "Gertrudis",
    "Nada más déjame quitar esto de la lumbre y ahorita sigues llorando, ¿sí?": "Gertrudis",
    "¿Por qué no me lo había dicho?": "Pedro",
    "¡Me creo lo que soy! Una persona que tiene todo el derecho a vivir la vida como mejor me plazca. Déjeme de una vez por todas, ¡ya no la soporto!": "Tita",
    "Tú tuviste un novio indebidamente. No te correspondía tenerlo.": "Rosaura",
    "Y que voy a romper cuantas veces sea necesario, mientras esa maldita tradición no me tome en cuenta.": "Tita",
    "Mmmm. Esto está delicioso, Tita.": "Tía Mary (Mary Brown)",
    "En el tiempo que estuviste fuera tuve relaciones con un hombre del que siempre había estado enamorada y perdí mi virginidad. Por eso ya no puedo casarme contigo.": "Tita",
    "¡Claro! No quiero morirme sin lograr que lo seas. Siempre he soñado con entrar contigo a una iglesia llena de flores blancas...": "Pedro",
    "¿Vestida de blanco?": "Tita",
    "Y quiero que sepas que no me vas a convencer de no hacerlo. No me importa lo que piensen ni mi hija ni nadie más.": "Pedro",
    "Sí, Alex Brown es un excelente muchacho. Lo único malo es que nos van a abandonar.": "Pedro"
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
        phDisplay.style.color = "#A83232";
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
        phDisplay.style.color = "#477548";
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
    }else record = localStorage.getItem('record');

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