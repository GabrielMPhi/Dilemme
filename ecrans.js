const image_modal_choix_dilemme = document.querySelector("#image_modal_choix_dilemme")
const affichage_tour = document.querySelector("#affichage_tour")
const affichage_score = document.querySelector("#affichage_score")
const affichage_influence = document.querySelector("#affichage_influence")
const affichage_choix_passes = document.querySelector("#affichage_choix_passes")
const affichage_choix_a_faire_texte = document.querySelector("#affichage_choix_a_faire_texte")

const modal_intro = document.querySelector("#modal_intro")
const modal_option1 = document.querySelector("#btn_option1")
const modal_option2 = document.querySelector("#btn_option2")

modal_option1.addEventListener("click", () => { ajouter_dans_listeobservateur_tour(jeu.dilemme_du_tour_objet.choix_1); });
modal_option2.addEventListener("click", () => { ajouter_dans_listeobservateur_tour(jeu.dilemme_du_tour_objet.choix_2); });

const btn_affichage_stats = document.querySelector("#btn_affichage_stats")
const div_affichage_stats = document.querySelector("#div_affichage_stats")

btn_affichage_stats.addEventListener("click", () => { 
	if (div_affichage_stats.classList.contains("is-hidden")){
		div_affichage_stats.classList.remove("is-hidden")}
	else {div_affichage_stats.classList.add("is-hidden")}
	})	;

function update_affichage(){
	affichage_tour.innerHTML = jeu.tour.numero
	affichage_score.innerHTML = jeu._joueur.score
	affichage_influence.innerHTML = jeu._joueur.influence
	image_modal_choix_dilemme.src = choix_random_image()
}

function choix_random_image(){
	return liste_random_image[Math.floor(Math.random() * liste_random_image.length)]
}


const affichage_action_btn = document.querySelector("#modal_btn")

set_bulma_modal("modal_intro", [], ["modal_intro_btn_close", "modal_intro_background", "btn_debut_partie_modal_card"])
set_bulma_modal("modal_choix", ["modal_btn"], ["modal_btn_close", "btn_option1", "btn_option2", "modal_background"])

function set_bulma_modal(id_modal, openers_elements_ids, closers_elements_ids){
	let modal = document.getElementById(id_modal);
	openers_elements_ids.forEach(element =>
		document.getElementById(element).addEventListener('click', () => {
			modal.classList.add("is-active");
		})
	);
	
	closers_elements_ids.forEach(element =>
		document.getElementById(element).addEventListener('click', () => {
			updateliste()
			modal.classList.remove("is-active");		
		})
	);
}


function updateliste(){
	document.getElementById("affichage_choix_passes").innerHTML = ""
	if (jeu.tour.observateurs != []){
		let liste_choix = jeu.tour.observateurs.filter(element => element instanceof Choix)
		liste_choix.forEach(choix => {

			let p_choix = document.createElement("p");
			p_choix.innerHTML = "- " + choix.nom_choix + "--- Durée : " + choix.delai
			document.getElementById("affichage_choix_passes").appendChild(p_choix);
		});
	}


	document.getElementById("affichage_stats_pays").innerHTML = ""
	if (jeu.monde._pays_etranger != []){
		let affichage_tableau_pays = document.createElement("table")

		jeu.monde._pays_etranger.forEach(pays => {
			document.getElementById("affichage_stats_pays").appendChild(affichage_tableau_pays)
			let tbody_pays = document.createElement("tbody")
			affichage_tableau_pays.appendChild(tbody_pays);
			let tr_pays = document.createElement("tr");
			tbody_pays.appendChild(tr_pays)
			let td_pays_nom = document.createElement("td")
			let td_pays_population = document.createElement("td")
			td_pays_nom.innerHTML = pays.nom
			td_pays_population.innerHTML = pays.population
			affichage_tableau_pays.appendChild(td_pays_nom)
			affichage_tableau_pays.appendChild(td_pays_population)
		if(jeu._joueur.influence >=1){
			let td_btn_infrastructure = document.createElement("td")
			let button_infrastructure = document.createElement("input");
			affichage_tableau_pays.appendChild(td_btn_infrastructure)
			td_btn_infrastructure.appendChild(button_infrastructure);  
			button_infrastructure.id = "btnInfrastructure_pays_"+pays.nom;
			button_infrastructure.type = "button"; 
			button_infrastructure.className= "button is-small is-success";
			button_infrastructure.value= "+Infrastructure";
			button_infrastructure.addEventListener("click", () => {
				fermer_bouton_infrastructure(button_infrastructure.id, pays); 
        }); 



		}
	});
	
	}


}

function fermer_bouton_infrastructure(button_id, pays){
	if(jeu._joueur.influence >=1){
		pays.infrastructure+=100
		jeu._joueur.influence-=1
		document.getElementById(button_id).remove()
		update_affichage()
	}
  }

modal_option1.onclick = function changement_de_tour_modal(){
	jeu.tour.augmenter()
	update_affichage()
}

modal_option2.onclick = function changement_de_tour_modal(){
	jeu.tour.augmenter()
	update_affichage()
}