//Bouton du menu pour les petits écran
//

//Définitions des variables
var menu_nav = document.getElementById('menu_nav');
var btn_menu = document.getElementById('btn_menu');

//Le bouton menu affiche ou réduit le menu de navigation
btn_menu.addEventListener('click', function(){
	menu_nav.classList.toggle('visible');
	
});


//Evenements lorsqu'on clique sur un lien vers le sous-menu en mode smartphone
//

//Définitions des variables
var largeur = document.body.clientWidth;
var lien1 = document.getElementById('lien1');
var lien2 = document.getElementById('lien2');
var lien3 = document.getElementById('lien3');
var slien1 = document.getElementById('slien1');
var slien2 = document.getElementById('slien2');
var slien3 = document.getElementById('slien3');
var sliens = [slien1 , slien2, slien3];

//Cette fonction desactive l'action par defaut du click sur le lien
//A la place, il affiche (en réduisant les autres sous-menu) ou réduit le sous menu correspondant 
function disabla(lien, slien, sliens){
	lien.addEventListener('click', function(e){
			e.preventDefault();
			console.log(sliens);
			var sauv = slien.style.display;
			sliens.forEach(function(sli){
				console.log(sli);
				sli.style.display = 'none';
			});
			if (sauv == 'none'){
				slien.style.display = 'block';
			}
			else{
				slien.style.display = 'none';
			}

	});
}

//Cette condition fait en sorte que ce script ne s'execute que sur smartphone
if (navigator.userAgent.match(/(android|iphone|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
		//Ajoute un display:'none' à chaque sous menu
		sliens.forEach(function(sli){
			console.log(sli);
			sli.style.display = 'none';
		});
		disabla(lien1, slien1,sliens);
		disabla(lien2, slien2,sliens);
		disabla(lien3, slien3,sliens);
 	
}
