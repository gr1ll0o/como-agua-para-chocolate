const phDisplay = document.querySelector(".phrase h2");

const buttons = [
    document.querySelector("#opt1"),
    document.querySelector("#opt2"),
    document.querySelector("#opt3")
];

const pjs = [
    "Tita",
    "Mamá Elena",
    "Chencha",
    "Gertrudis",
    "John Brown",
    "Rosaura",
    "Pedro",
    "Esperanza",
    "Alex"
]

const phrases = {
    "Cada persona tiene derecho a decidir cómo quiere vivir su propia vida.": "Tita",
    "La verdad depende del punto de vista de cada persona.": "Gertrudis",
    "El amor no puede razonarse: se siente o no se siente.": "John Brown",
    "Una persona necesita encontrar aquello que encienda su fuego interior.": "John Brown",
    "Los deseos personales no están por encima de las obligaciones familiares.": "Mamá Elena",
    "La vida siempre encuentra una manera de sorprendernos": "Chencha",
    "No pienso vivir siguiendo las reglas que otros impusieron para mí": "Gertrudis",
    "Mi lugar en esta familia y mi matrimonio deben ser respetados": "Rosaura",
}

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

    buttons.forEach((button, i) => {
        button.textContent = options[i];
    });
};

let stage = choosePhrase(phrases);
loadStage(stage);