const image_modal_choix_dilemme = document.querySelector("#image_modal_choix_dilemme")
const affichage_tour = document.querySelector("#affichage_tour")
const affichage_score = document.querySelector("#affichage_score")
const affichage_choix_passes = document.querySelector("#affichage_choix_passes")
const affichage_choix_a_faire_texte = document.querySelector("#affichage_choix_a_faire_texte")

const affichage_population_france = document.querySelector("#affichage_population_france")
const affichage_population_russie = document.querySelector("#affichage_population_russie")

const modal_intro = document.querySelector("#modal_intro")
const modal_option1 = document.querySelector("#btn_option1")
const modal_option2 = document.querySelector("#btn_option2")

modal_option1.addEventListener("click", () => { push_dans_tour(jeu.dilemme_du_tour_objet.choix_1); });
modal_option2.addEventListener("click", () => { push_dans_tour(jeu.dilemme_du_tour_objet.choix_2); });

const btn_affichage_stats = document.querySelector("#btn_affichage_stats")
const div_affichage_stats = document.querySelector("#div_affichage_stats")

btn_affichage_stats.addEventListener("click", () => { 
	if (div_affichage_stats.classList.contains("is-hidden")){
		div_affichage_stats.classList.remove("is-hidden")}
	else {div_affichage_stats.classList.add("is-hidden")}
	})	;

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
		jeu.monde._pays_etranger.forEach(pays => {
			let p_pays = document.createElement("p");
			let div_pays = document.createElement("div");
			p_pays.innerHTML = "- " + pays.nom + "--- Population : " + pays.population
		//	document.getElementById("affichage_stats_pays").appendChild(p_pays);
	//	});


        let button_infrastructure = document.createElement("input"); 
        button_infrastructure.id = "btnInfrastructure_pays_"+pays.nom;
        button_infrastructure.type = "button"; 
        button_infrastructure.class= "button is-small is-warning";
        button_infrastructure.value= "+Infrastructure";
        button_infrastructure.addEventListener("click", () => {
			console.log(button_infrastructure.id)
			fermer_bouton_infrastructure(button_infrastructure.id); 
        }); 
		document.getElementById("affichage_stats_pays").appendChild(div_pays);
		document.getElementById("affichage_stats_pays").appendChild(p_pays);
        div_pays.appendChild(button_infrastructure); 
	});
	
	}


}

function fermer_bouton_infrastructure(button_id){
	document.getElementById(button_id).remove() 
  }

modal_option1.onclick = function changement_de_tour_modal(){
	jeu.tour.augmenter()
	update_affichage()
}

modal_option2.onclick = function changement_de_tour_modal(){
	jeu.tour.augmenter()
	update_affichage()
}