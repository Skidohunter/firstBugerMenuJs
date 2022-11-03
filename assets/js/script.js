// MENU BURGER //
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

burger.addEventListener('click',displayNav);
document.addEventListener('scroll',toto)

function displayNav() {
    nav.classList.toggle('displayNone')

}

function toto(){
    nav.classList.add('displayNone')
}

// SECTION AGE //

let legal;
let age = document.getElementById("ages");
let from = document.getElementById("countrySelect");
let messageOn;
let messageOff;
let submit = document.getElementById('submit');
let spanResponse = document.getElementById('legalResponse');

// AU CLICK JE DECLENCHE MA FCT LEGAL//
submit.addEventListener('click',legalCountry);
// FCT LEGAL QUI DETERMINE LA MAJORTIE ET LE MESSAGE A AFFICHER//
function legalCountry(){
    if(from.value === "fr") {
        legal = 18;
        messageOn = " c'est bon"
        messageOff = " c'est trop jeune"
    } else if (from.value === "jp"){
        legal = 20;
        messageOn = " それは良いです"
        messageOff = " 若すぎる"
    } else if (from.value === "us"){
        legal = 21;
        messageOn = " Welcome Dude"
        messageOff = " Go to sleep little child !!"
    }
    popUpAge();
}
// FCT QUI DETERMINE LE MESSAGE A AFFICHER EN FCT DE LAGE//
// FAIRE APPARAITRE L'ALERTE DANS UNE FENETRE POP UP A LA PLACE DE L'ALERTE//
function popUpAge(){
    if (age.value < legal){
        spanResponse.innerHTML = age.value + ' ans' + messageOff;
        spanResponse.classList.add('red');
        spanResponse.classList.remove('green');
    } else if (age.value >= legal){
        spanResponse.innerHTML = age.value + ' ans' + messageOn;
        spanResponse.classList.add('green');
        spanResponse.classList.remove('red');
    } 
}


// Questions et Réponses //
const Questions = [{
    id: 0,
    q: "Quel est la capital de Westeros?",
    a: [{ text: "Volantis", isCorrect: false },
        { text: "Port real", isCorrect: true },
        { text: "Pentos", isCorrect: false },
        { text: "Asshai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Qui est le père de John Snow",
    a: [{ text: "Daemon Targaryen", isCorrect: false, isSelected: false },
        { text: "Viserys Targaryen", isCorrect: false },
        { text: "Eddard Stark", isCorrect: false },
        { text: "Rhaegar Targaryen", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Combiens de saisons a Games Of Thrones",
    a: [{ text: "5", isCorrect: false },
        { text: "6", isCorrect: false },
        { text: "8", isCorrect: true },
        { text: "4", isCorrect: false }
    ]

}

]

// Set start
let start = true;

// Iterate
function iterate(id) {

// Getting the result display section
let result = document.getElementsByClassName("result");
result[0].innerText = "";

// Variable pour les questions
const question = document.getElementById("question");


// Question texte
question.innerText = Questions[id].q;

// Variable pour les options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Options texte
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Options corect
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

let selected = "";

// Selection op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#81390f";
    op2.style.backgroundColor = "#a76841";
    op3.style.backgroundColor = "#a76841";
    op4.style.backgroundColor = "#a76841";
    selected = op1.value;
})

// Selection op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#a76841";
    op2.style.backgroundColor = "#81390f";
    op3.style.backgroundColor = "#a76841";
    op4.style.backgroundColor = "#a76841";
    selected = op2.value;
})

// Selection op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#a76841";
    op2.style.backgroundColor = "#a76841";
    op3.style.backgroundColor = "#81390f";
    op4.style.backgroundColor = "#a76841";
    selected = op3.value;
})

// Selection op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#a76841";
    op2.style.backgroundColor = "#a76841";
    op3.style.backgroundColor = "#a76841";
    op4.style.backgroundColor = "#81390f";
    selected = op4.value;
})

// Bouton valider et methode//
const evaluate = document.getElementsByClassName("evaluate");
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "gold";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Bouton next et méthode//
const next = document.getElementsByClassName('next')[0];
let id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
}
else {
    id--;
    iterate(id);
}

})


// QUIZ-2//
let input = document.getElementById("saisons");
let answer = document.getElementById("answerSelect");
const messageTrue = "VRAI";
const messageFalse = "FAUX";
let submitq = document.getElementById('submit-q');
let spanResponseq = document.getElementById('quizResponse');

// AU CLICK JE DECLENCHE MA FCT LEGAL//
submitq.addEventListener('click',answers);
submitq.addEventListener('dblclick',saison);
// FCT LEGAL QUI DETERMINE LA MAJORTIE ET LE MESSAGE A AFFICHER//
function answers(){
    if(answer.value === "5") {
        spanResponseq.innerHTML = messageFalse;
        spanResponseq.classList.add('red');
        spanResponseq.classList.remove('green');
    } else if (answer.value === "8"){
       spanResponseq.innerHTML = messageTrue;
       spanResponseq.classList.add('green');
       spanResponseq.classList.remove('red');
    } else if (answer.value === "3"){
        spanResponseq.innerHTML = messageFalse;
        spanResponseq.classList.add('red');
        spanResponseq.classList.remove('green');
    }
}

function saison(){
    if(input.value === "8"){
        spanResponseq.innerHTML = messageTrue;
        spanResponseq.classList.add('green');
        spanResponseq.classList.remove('red');
    }
    if(input.value <"8"){
        spanResponseq.innerHTML = messageFalse;
        spanResponseq.classList.add('red');
        spanResponseq.classList.remove('green');
    }
    if(input.value >"8"){
        spanResponseq.innerHTML = messageFalse;
        spanResponseq.classList.add('red');
        spanResponseq.classList.remove('green');
    }
}

  