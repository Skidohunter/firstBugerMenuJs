const acceuilBtn = document.querySelector(".acceuilBtn");
const loginBtn = document.querySelector(".loginBtn");
const adminBtn = document.querySelector(".adminBtn");
const userAdmin = document.getElementById("usersAdmin");
const addUser = document.getElementById("addUser");
const removeUser = document.getElementById("removeUser");
let prenomAdd = document.getElementById("prenomAdd");
let nomAdd = document.getElementById("nomAdd");
let mailAdd = document.getElementById("mailAdd");
let mdpAdd = document.getElementById("mdpAdd");

loginBtn.addEventListener('click',login);
acceuilBtn.addEventListener('click',acceuil);
adminBtn.addEventListener('click',admin);
addUser.addEventListener('click',add);
removeUser.addEventListener('click',remove);


let users = [
	['Atif','Zourgani','DevDu33','atif@gmail.com'],
	['Mathis','Carbo','CarboDu24','carbo@gmail.com'],
	['Romain','Cardot','Cardot','cardot@gmail.com'],
    ['Flo','Lskro','LskroDu24','lskro@gmail.com'],
    ['Fab','Geek','GeekDu24','geek@gmail.com'],
    ['Julien','Manager','footballManager','Manager@gmail.com'],
    ['admin','admin','123','bossAdmin@gmail.com'],
]

// let users = [
// 	{Prenoms :'Atif', Noms :'Zourgani', Mdp : 'DevDu33', Mail: 'atif@gmail.com'},
// 	{Prenoms :'Mathis',Noms :'Carbo',Mdp :'CarboDu24',Mail:'carbo@gmail.com'},
// 	{Prenoms :'Romain',Noms :'Cardot',Mdp :'Cardot',Mail:'cardot@gmail.com'},
//     {Prenoms :'Flo',Noms :'Lskro',Mdp :'LskroDu24',Mail:'lskro@gmail.com'},
//     {Prenoms :'Fab',Noms :'Geek',Mdp :'GeekDu24',Mail:'geek@gmail.com'},
//     {Prenoms :'Julien',Noms :'Manager',Mdp :'footballManager',Mail:'Manager@gmail.com'},
//     {Prenoms :'admin',Noms :'admin',Mdp :'123',Mail:'bossAdmin@gmail.com'},
// ]

// function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//       let th = document.createElement("th");
//       let text = document.createTextNode(key);
//       th.appendChild(text);
//       row.appendChild(th);
//     }
//   }
  
//   function generateTable(table, data) {
//     for (let element of data) {
//       let row = table.insertRow();
//       for (key in element) {
//         let cell = row.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//       }
//     }
//   }
  
//   let table = document.querySelector("table");
//   let data = Object.keys(users[0]);
//   generateTableHead(table, data);
//   generateTable(table, users);

function login(){
    document.location.href="http://127.0.0.1:5501/login.html";
}

function acceuil(){
    document.location.href="http://127.0.0.1:5501/index.html";
}

function admin(){
    for(let user of users){
        userAdmin.innerHTML += (  user + "<br>");
    }
   
    
}

function remove(){
    let del = users.pop();
    userAdmin.innerHTML = users + "<br>" + del +  'supprimé de users';
}


function add(){
    users.push(prenomAdd.value,nomAdd.value,mailAdd.value,mdpAdd.value);
    userAdmin.innerHTML = prenomAdd.value + "," + nomAdd.value + "," + mdpAdd.value +"," + mailAdd.value + ' user ajouté' + "<br>";
}

