dilemme_du_tour_objet = dilemme1
tour = new Tour()

window.addEventListener('load',
function(){
	update_affichage();
	initialisation_dilemme();
	modal_intro.classList.add("is-active")
})

function initialisation_dilemme(){

}

function update_affichage(){
	affichage_tour.innerHTML = tour.numero
	affichage_score.innerHTML = score
	image_modal_choix_dilemme.src = choix_random_image()
}

function choix_random_image(){
	return liste_random_image[Math.floor(Math.random() * liste_random_image.length)]
}

affichage_action_btn.onclick = function changement_de_tour(){
    let dilemme_fabrique_du_tour = selection_des_choix()
	dilemme_du_tour_objet = dilemme_fabrique_du_tour()
    affichage_choix_a_faire_texte.innerHTML = dilemme_du_tour_objet.texte
	modal_option1.innerHTML = dilemme_du_tour_objet.choix_1.nom_choix
	modal_option2.innerHTML = dilemme_du_tour_objet.choix_2.nom_choix
	tour.augmenter()
	update_affichage()
}

function selection_des_choix(){
    let choix_du_tour_numero = getRandomInt(liste_des_choix.length)
	return liste_des_choix[choix_du_tour_numero]
}


function push_dans_tour(valeur){
	tour.observateurs.push(valeur)
}

