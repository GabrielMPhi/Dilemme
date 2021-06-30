window.addEventListener('load',
function(){
	initialisation_dilemme();
	ajouter_les_observateurs();
	update_affichage();;
	modal_intro.classList.add("is-active")
})

function initialisation_dilemme(){
	creer_liste_personnage(nombre_de_personnage)
	jeu = new Jeu(0, 3, liste_de_pays_etranger, liste_des_personnages)
	console.log(jeu)
	update_affichage_pays()
}
function ajouter_les_observateurs(){
	ajouter_dans_listeobservateur_tour(jeu._monde)
	ajouter_dans_listeobservateur_tour(jeu._joueur)
}

affichage_action_btn.onclick = function changement_de_tour_affichage(){
    let dilemme_fabrique_du_tour = selection_des_choix()
	jeu.dilemme_du_tour_objet = dilemme_fabrique_du_tour()
    affichage_choix_a_faire_texte.innerHTML = jeu.dilemme_du_tour_objet.texte
	modal_option1.innerHTML = jeu.dilemme_du_tour_objet.choix_1.nom_choix
	modal_option2.innerHTML = jeu.dilemme_du_tour_objet.choix_2.nom_choix
	update_affichage()
	update_liste_choix()
	update_affichage_pays()
}

function selection_des_choix(){
    let choix_du_tour_numero = getRandomInt(liste_des_choix.length)
	return liste_des_choix[choix_du_tour_numero]
}

function creer_liste_personnage(nb_perso){
	let personnage_factory = new PersonnageFactory()
	for (let i = 0; i < nb_perso; i++){
		liste_des_personnages.push(personnage_factory.creer_personnage())
		};
	}



