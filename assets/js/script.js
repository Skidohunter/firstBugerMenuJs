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
    } else {
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
        spanResponse.classList.add('red2');
        spanResponse.classList.remove('green2');
    } else if (age.value >= legal){
        spanResponse.innerHTML = age.value + ' ans' + messageOn;
        spanResponse.classList.add('green2');
        spanResponse.classList.remove('red2');
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

// TIMEOUT//
    //Je declare ma variable timeout//
    let timeout = document.getElementById("timeOut");
    //Je declare ma variable counter qui commence à 10//
    let counter = "?";
    //Je declare ma variable boum//
    const boum = document.getElementById("boum");
    //J'intégre la variable counter a boum//
    boum.innerText = counter;
    //Je déclare ma variable nombre//
    let nombre = document.getElementById("nombre");
    let reset = document.getElementById("reset")

    //Création des deux méthodes de réactions qui réponde à ma vabiable timeout de mon bouton//
    timeout.addEventListener('click',diminuerTemps,)
    timeout.addEventListener('click',anim)
    reset.addEventListener('click',resetBtn)
    function diminuerTemps() {
        boum.innerText = nombre.value
        nombre.value--
        if(nombre.value >= 0 ){
            setTimeout(diminuerTemps, 1000)  
        }    
    }
    function anim () {
        boum.classList.add('boite');
        
    }
    
    function resetBtn(){
        boum.innerHTML = counter;
        nombre.value = counter;
        
    }

    //HEURE STATIQUE//

    let heure = document.querySelector(".heure");
    let btnH = document.getElementById("btn-heure");
    btnH.addEventListener('click',static)

    function static(){
        let today = new Date ();
        heure.innerHTML = Date ();
        
        setTimeout( static,1000);
    }

        
    // HORLOGE//
    function startTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        m = checkTime(m);
        let s = today.getSeconds();
        s = checkTime(s);
        document.getElementById('horloge').innerHTML = h + ":" + m +":" + s;
        let t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
    
    startTime();



    // input pour la valeur temps
    // un button reset
    // afficher l'heure (statique) au click d'un button

    // CHIFOUMI//

    let min = 1; 
    let max = 10; 
    let timer;  
    let bubble1 = document.querySelector(".bubble1");
    let bubble2 = document.querySelector(".bubble2");
    let perso1 = document.querySelector(".res1");
    let perso2 = document.querySelector(".res2");
    let btnNumber = document.getElementById("btnNumber");
    let resetNumber = document.getElementById("reset2");
    let score = document.getElementById("score");
    let score1 = 0;
    let score2 = 0;
    btnNumber.addEventListener('click',() => {
        timer = 3;
        timers();
    });
    resetNumber.addEventListener('click',reset2);
    
    function num(){
        let n = Math.floor(Math.random() * (max - min)) + min; 
        let n2 = Math.floor(Math.random() * (max - min)) + min; 
        bubble1.innerHTML = n;
        bubble2.innerHTML = n2;
    
        if (n > n2){
            perso1.innerHTML = "YOU WIN !!";
            perso2.innerHTML="";
            score1++ ;
            score.innerHTML = score1 + " / " + score2 ;
            perso1.classList.add("winner");
            perso1.classList.remove("red");
 
        } else if (n2 > n){
            perso2.innerHTML = "YOU WIN !!";
            perso1.innerHTML="";
            score2++;
            score.innerHTML = score1 + " / " + score2 ;
            perso2.classList.add("winner");
            perso2.classList.remove("red");
        } else{
            perso1.innerHTML = "DRAW !!!";
            perso2.innerHTML = "DRAW !!!";
            score1++;
            score2++;
            score.innerHTML = score1 + " / " + score2;
            perso1.classList.add("winner");
            perso2.classList.add("winner");
            
        } if (score1 >= 3){
            perso1.innerHTML = "YOU ARE THE REAL CHAMPIONS";
            perso2.innerHTML = "NOOB";
            perso2.classList.remove("winner");
            perso2.classList.add("red");
            score.innerHTML ="FINISH";
        } else if (score2 >= 3){
            perso2.innerHTML = "YOU ARE THE REAL CHAMPIONS";
            perso1.innerHTML = "NOOB";
            perso1.classList.remove("winner")
            perso1.classList.add("red");
            score.innerHTML ="FINISH";
        }
             
        }
    // Fonction timer qui intégre la fonction num une fois que le chrono arrive à 0
    function timers() {
        btnNumber.innerText = timer
        timer--
        if(timer >= 0 ){
            setTimeout(timers, 1000);  
        } else if(timer <= 0){
            num();
        }

    }

    // Fonction resest qui permet de remettre tout les valeurs à 0//
    function reset2(){
        btnNumber.innerHTML = 3;
        perso1.innerHTML = "";
        perso2.innerHTML = ""; 
        bubble1.innerHTML = "";
        bubble2.innerHTML = "";
        score.innerHTML="";
        score1 = 0 ;
        score2 = 0 ;      
    }

    /////////////////////////CORRECTION JEUX RANDOM/////////////////////////////////////////////

    //      let btnStart = document.getElemetById("btnStart")
    //      let player1 = document.getElementById("player1");
    //      let player2 = document.getElementById("player2");
    //      let count1 = 0;
    //      let count2 = 0;
    //      btnStart.addEventListener("click",random)
    //      function random() {
    //      console.log ("toto");
    //      console.log(toto * 10);
    //      console.log(Math.ceil(toto * 10)); //Math.ceil = arrondi au sup.
    //      console.log(Math.floor(toto * 10)); //Math.floor = arrondi à l'inf.

    //      let randomNumber = Math.ceil(Math.random() * 6) //Math.random = nbre aléatoire inclus entre 0 et 1.
    //      console(randomNumber);

    //      let randomNumber2 =  Math.ceil(Math.random() * 6);
    //      console(randomNumber2);

    //      if(randomNumber > randomNumber2){
    //          player1.innerHTML = randomNumber;
    //          player2.innerHTML = randomNumber2;
    //          player1.classList.add("winner");
    //          player2.classList.remove("winner");
    //          count1++;

    //      } else if(randomNumber < randomNumber2){
    //          player2.innerHTML = randomnumber2;
    //          player1.innerHTML = randomNumber;
    //          player2.classList.add("winner");
    //          player1.classList.remove("winner");
    //          count2++;
    //          
    //          
    //      } else {
    //          player1.innerHTML = randomnumber + "(draw)";
    //          player2.innerHTML = randomnumber2 + "(draw)";
    //          player1.classList.add("winner");
    //          player2.classList.add("winner");
    //          count1++;
    //          count2++;
    //         
    //     }
    // }



// ////////////////////////////////// LES BOUCLES //////////////////////////////////////////

// // for (options){
//     /*actions
//     /*
// }

// // for (repeter jusqua la ligne d'après et arrête toi à la fin du tableau){
//     /*
//     afficher le nom
//     afficher le prenom
//     /*
// }

// // Une rep de 10 *
//     let i;

//     for(i = 0 ; i <=9 ; i++ ){
//         console.log("toto");
//     }


//     // EXO BOUCLES//

//     for (let i = 0; i< 10; i++) {
//         console.log(i)
//     }
    
   
//     let str = '';

//     for (let i = 0; i< 12; i++) {
//         for (let j = 1; j < i; j++) {
//          str = str + j;
//      }
//         console.log(str);
//         str = '';
//  }

// let i;

// for (let i = 0 ; i <=49 ; i++){
//     console.log("je suis une boucle");
// }



    // let i;
    // let cars = [
    //     'opel',
    //     'bmw',
    //     'merco',
    //     'audi',
    //     'ford',
    //     'nissan',
    // ];

    // // I <= cars.length permet de calculer la longueur et le nombre de lignes de ma variable 
    // // cars et du coup de s'adapter automatiquement au nombre d'éléments de mon tableau.
    
    // for(let i = 0 ; i < cars.length ; i++){
    //     console.log(cars[i]);
    // }


    ///////////////////////////// VOITURES////////////////////////////////////////////////

    const btnVoitures = document.querySelectorAll('.articleBtn')
    const modals = document.querySelectorAll('.modal')
    const btnCloses = document.querySelectorAll('.displayNoneBouton')

    let numToggledModal = 0;

    for (let i = 0; i < btnVoitures.length; i++){
        btnVoitures[i].addEventListener('click',() => {
            closeToggledModal()
            modals[i].classList.remove('displayNoneVoitures');
            numToggledModal = i;
        });
        // btnCloses[i].addEventListener('click',closeToggledModal);
    }

    function closeToggledModal() {
        modals[numToggledModal].classList.add('displayNoneVoitures');
    }
                    
 const prenom = sessionStorage.getItem("prenom01");
 const nom = sessionStorage.getItem("nom01");
 document.querySelector("#wesh").innerHTML = "Bienvenue " + prenom + " " + nom;
 
