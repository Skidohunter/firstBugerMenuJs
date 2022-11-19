        
///////////////////////////// LOGIN DEUXIEME PAGES HTML/////////////////////////////////////

let users = [
	['Atif','Zourgani','DevDu33','atif@gmail.com'],
	['Mathis','Carbo','CarboDu24','carbo@gmail.com'],
	['Romain','Cardot','Cardot','cardot@gmail.com'],
    ['Flo','Lskro','LskroDu24','lskro@gmail.com'],
    ['Fab','Geek','GeekDu24','geek@gmail.com'],
    ['Julien','Manager','footballManager','Manager@gmail.com'],
    ['admin','admin','123','bossAdmin@gmail.com'],
]





const formS = document.getElementById('formS');
const formR = document.getElementsByClassName('formR');
let mdp = document.getElementById("mdp");
let mail = document.getElementById("mail");
let erreur = document.getElementById('erreur');
formS.addEventListener('click',info);


function info(){
    for( let i = 0 ; i < users.length ; i++ ){    
        if (mdp.value == users[i][2] && mail.value == users[i][3]){
                document.location.href="http://127.0.0.1:5501/index.html";
                let prenom = users [i][0];
                let nom = users [i][1];
                sessionStorage.setItem("prenom01",prenom);
                sessionStorage.setItem("nom01",nom);
                window.location.href = "index.html";
                return;
                }
                if(mdp.value == "123" && mail.value == "bossAdmin@gmail.com"){
                    document.location.href="http://127.0.0.1:5501/admin.html";
                    return;

                }else{ 
                    erreur.innerHTML = 'Mot de passe ou mail incorrect';
                    return;
                  }
               
            }
}



