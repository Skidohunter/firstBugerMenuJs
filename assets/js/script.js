/* Sélection des éléments HTML */
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

console.log(ul)
console.log(burger)

burger.addEventListener('click',displayNav);
document.addEventListener('scroll',toto)

function displayNav() {
    nav.classList.toggle('displayNone')

}

function toto(){
    nav.classList.add('displayNone')
}



