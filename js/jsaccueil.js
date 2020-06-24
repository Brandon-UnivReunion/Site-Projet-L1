function bb(element) {
	this.zizi = element;
}

bb.prototype.chien = function() {
	var self = this;
	this.zizi.onmouseover = function(){
		
		self.zizi.src =  "images/accueil/" + self.zizi.id.toString() + "/" + self.zizi.id.toString() + ".gif";
	}

	this.zizi.onmouseout = function(){
		
		self.zizi.src = "images/accueil/" + self.zizi.id.toString() + "/" + self.zizi.id.toString() + ".png";
	}
};

var monBB = new bb(document.getElementById(`prototype`));
monBB.chien();

var monBB2 = new bb(document.getElementById(`design`));
monBB2.chien();

var monBB3 = new bb(document.getElementById(`organisation`));
monBB3.chien();

var monBB4 = new bb(document.getElementById(`annexe`));
monBB4.chien();

var monBB5 = new bb(document.getElementById(`play_button`));
monBB5.chien();



// ETAPE 1 : récupérer les objets DOM nécessaires
//
var trigger = document.getElementById('modal-trigger');
var modal = document.getElementById('modal');
var btn = document.getElementById('close-modal');

// ETAPE 2 : Poser les listeners
//
trigger.addEventListener('click', function(){
	visible(modal);
});

btn.addEventListener('click', function(){
	invisible(modal);
});

document.addEventListener('keydown', function(e){
	if (e.keyCode == 27) {
		invisible(modal);
	}
});


// PETITES FONCTIONS
//

function visible(element) {
	element.classList.add('is-visible');
}

function invisible(element) {
	element.classList.remove('is-visible');
}