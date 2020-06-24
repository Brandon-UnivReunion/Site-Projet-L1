// Tout d'abord nous allons initialiser une liste contenant les sources de nos différentes images

var sources1 = ["../images/page1/slide/menu.png","../images/page1/slide/settings.png","../images/page1/slide/start.png","../images/page1/slide/end.png"];
var sources2 = ["../images/page2/slide/menu.jpg","../images/page2/slide/settings.jpg","../images/page2/slide/start.jpg","../images/page2/slide/end.jpg"];
var sources3 = ["../images/page3/slide/menu.png","../images/page3/slide/settings.png","../images/page3/slide/start.png","../images/page3/slide/end.png"];

// On initialise de même "index", qui correspondra à l'index de notre liste "sources"
var index = 0;

// On récupere notre élément qui est notre "slider" dans notre document.
var element1 = document.getElementById(`slide1`);
var element2 = document.getElementById(`slide2`);
var element3 = document.getElementById(`slide3`);

//Objet SLider avec paramètre le "slider".
function Slider(obj) {
	this.vue = obj;
}
// Fonction qui permet de changer d'images
Slider.prototype.changer = function(sources) {

	this.vue.src = sources[index]; // La source de l'image contenue dans notre "slider" prend la valeur d'un des items de la liste "sources" en fonction de l'index

	if(index < sources.length - 1){ // On vérifie que l'index est compris entre 0 et la taille de la liste "source", 
									//Si c'est le cas on incrémente " index" d'1 afin de donner à l'image du slider la valeur du prochain item de la liste "sources"

		index++;

	}else{ // On donne la valeur 0 à l'index lorsque ce dernier dépasse la taille de la liste "sources"

		index = 0;

	}

}

// On crée un objet slider pour chaque pages

// PAGE1
var monSlider1 = new Slider(element1); // On crée notre objet slider avec l'élément qui correspond au slider dans notre document.
setInterval(function() {monSlider1.changer(sources1)}, 3000)

// PAGE2
var monSlider2 = new Slider(element2); // On crée notre objet slider avec l'élément qui correspond au slider dans notre document.
setInterval(function() {monSlider2.changer(sources2)}, 3000)

// PAGE3
var monSlider3 = new Slider(element3); // On crée notre objet slider avec l'élément qui correspond au slider dans notre document.
setInterval(function() {monSlider3.changer(sources3)}, 3000) // On vient éxecuter la fonction qui permet de changer de vue toutes les 3 secondes.





	

	


