const image_modal_choix_dilemme = document.querySelector(
  "#image_modal_choix_dilemme"
);
const affichage_tour = document.querySelector("#affichage_tour");
const affichage_score = document.querySelector("#affichage_score");
const affichage_danger = document.querySelector("#affichage_danger");
const affichage_ressources = document.querySelector("#affichage_ressources");
const affichage_choix_passes = document.querySelector(
  "#affichage_choix_passes"
);
const affichage_choix_a_faire_texte = document.querySelector(
  "#affichage_choix_a_faire_texte"
);

const modal_intro = document.querySelector("#modal_intro");
const modal_option1 = document.querySelector("#btn_option1");
const modal_option2 = document.querySelector("#btn_option2");

modal_option1.addEventListener("click", () => {
  ajouter_dans_listeobservateur_tour(jeu.dilemme_du_tour_objet.choix_1);
});
modal_option2.addEventListener("click", () => {
  ajouter_dans_listeobservateur_tour(jeu.dilemme_du_tour_objet.choix_2);
});

const btn_passer_tour_simple = document.querySelector("#btn_passer_tour_simple");

btn_passer_tour_simple.addEventListener("click", () => {
  function_passer_tour_simple()
});



const btn_affichage_stats = document.querySelector("#btn_affichage_stats");
const div_affichage_stats = document.querySelector("#div_affichage_stats");

btn_affichage_stats.addEventListener("click", () => {
  if (div_affichage_stats.classList.contains("is-hidden")) {
    div_affichage_stats.classList.remove("is-hidden");
  } else {
    div_affichage_stats.classList.add("is-hidden");
  }
});

function update_affichage() {
  affichage_tour.innerHTML = jeu.tour.numero;
  affichage_score.innerHTML = jeu._joueur.score;
  affichage_danger.innerHTML = jeu.monde.danger;
  affichage_ressources.innerHTML = jeu._joueur.ressources;
  image_modal_choix_dilemme.src = choix_random_image();
}

function choix_random_image() {
  return liste_random_image[
    Math.floor(Math.random() * liste_random_image.length)
  ];
}

const affichage_action_btn = document.querySelector("#modal_btn");

set_bulma_modal(
  "modal_intro",
  [],
  [
    "modal_intro_btn_close",
    "modal_intro_background",
    "btn_debut_partie_modal_card",
  ]
);
set_bulma_modal(
  "modal_choix",
  ["modal_btn"],
  ["modal_btn_close", "btn_option1", "btn_option2", "modal_background"]
);

function set_bulma_modal(id_modal, openers_elements_ids, closers_elements_ids) {
  let modal = document.getElementById(id_modal);
  openers_elements_ids.forEach((element) =>
    document.getElementById(element).addEventListener("click", () => {
      modal.classList.add("is-active");
    })
  );

  closers_elements_ids.forEach((element) =>
    document.getElementById(element).addEventListener("click", () => {
      update_liste_choix();
      update_affichage_pays();
      modal.classList.remove("is-active");
    })
  );
}

function update_liste_choix() {
  document.getElementById("affichage_choix_passes").innerHTML = "";
  if (jeu.tour.observateurs != []) {
    let liste_choix = jeu.tour.observateurs.filter(
      (element) => element instanceof Choix
    );
    liste_choix.forEach((choix) => {
      let p_choix = document.createElement("p");
      p_choix.innerHTML = "- " + choix.nom_choix + "--- Durée : " + choix.delai;
      document.getElementById("affichage_choix_passes").appendChild(p_choix);
    });
  }
}

function update_affichage_pays() {
  document.getElementById("affichage_stats_pays").innerHTML = "";
  if (jeu.monde._pays_etranger != []) {
    let affichage_tableau_pays = document.createElement("table");
    affichage_tableau_pays.createTHead();
    let titre_pays_nom = document.createElement("th");
    let titre_pays_population = document.createElement("th");
    let titre_pays_gdp = document.createElement("th");
    let titre_pays_infrastructure = document.createElement("th");
    let titre_pays_corruption = document.createElement("th");
    let titre_pays_influence_du_joueur = document.createElement("th");
    let titre_actions = document.createElement("th");
    titre_pays_nom.innerHTML = "Nom du pays";
    titre_pays_population.innerHTML = "Population";
    titre_pays_gdp.innerHTML = "Richesse générale"
    titre_pays_infrastructure.innerHTML = "Infrastructure";
    titre_pays_corruption.innerHTML = "Corruption";
    titre_pays_influence_du_joueur.innerHTML = "Influence du joueur";
    titre_actions.innerHTML = "Actions";
    affichage_tableau_pays.appendChild(titre_pays_nom);
    affichage_tableau_pays.appendChild(titre_pays_population);
    affichage_tableau_pays.appendChild(titre_pays_gdp);
    affichage_tableau_pays.appendChild(titre_pays_infrastructure);
    affichage_tableau_pays.appendChild(titre_pays_corruption);
    affichage_tableau_pays.appendChild(titre_pays_influence_du_joueur);
    affichage_tableau_pays.appendChild(titre_actions);

    jeu.monde._pays_etranger.forEach((pays) => {
      document
        .getElementById("affichage_stats_pays")
        .appendChild(affichage_tableau_pays);
      let tbody_pays = document.createElement("tbody");
      affichage_tableau_pays.appendChild(tbody_pays);
      let tr_pays = document.createElement("tr");
      tbody_pays.appendChild(tr_pays);
      let td_pays_nom = document.createElement("td");
      let td_pays_population = document.createElement("td");
      let td_pays_gdp = document.createElement("td")
      let td_pays_infrastructure = document.createElement("td");
      let td_pays_corruption = document.createElement("td");
      let td_pays_influence_du_joueur = document.createElement("td");
      td_pays_nom.innerHTML = pays.nom;
      td_pays_population.innerHTML = pays.population;
      td_pays_gdp.innerHTML = pays._gdp + " £";
      td_pays_infrastructure.innerHTML = pays.infrastructure;
      td_pays_corruption.innerHTML = pays.corruption + " %";
      td_pays_influence_du_joueur.innerHTML = pays.influence_du_joueur;
      affichage_tableau_pays.appendChild(td_pays_nom);
      affichage_tableau_pays.appendChild(td_pays_population);
      affichage_tableau_pays.appendChild(td_pays_gdp);
      affichage_tableau_pays.appendChild(td_pays_infrastructure);
      affichage_tableau_pays.appendChild(td_pays_corruption);
      affichage_tableau_pays.appendChild(td_pays_influence_du_joueur);

      let td_btn_actions = document.createElement("td");
      affichage_tableau_pays.appendChild(td_btn_actions);

      if (jeu.joueur.ressources >= pays.cout_corruption) {
        console.log(pays.nom + " " +pays.cout_corruption)
        let button_influence = document.createElement("input");
        td_btn_actions.appendChild(button_influence);
        button_influence.id = "btnInfluence_pays_" + pays.nom;
        button_influence.type = "button";
        button_influence.className = "button is-small is-success";
        button_influence.value = "+Influence";
        button_influence.addEventListener("click", () => {
          pays.influence_du_joueur += 1;
          jeu._joueur.ressources -= pays.cout_corruption;
          fermer_bouton_action(button_influence.id);
        });
      }

      if (pays._influence_du_joueur >= 1) {
        let button_influence_pour_richesse = document.createElement("input");
        td_btn_actions.appendChild(button_influence_pour_richesse);
        button_influence_pour_richesse.id = "btnInfluence_pour_richesse_pays_" + pays.nom;
        button_influence_pour_richesse.type = "button";
        button_influence_pour_richesse.className = "button is-small is-success";
        button_influence_pour_richesse.value = "Influence pour richesse";
        button_influence_pour_richesse.addEventListener("click", () => {
          pays.influence_du_joueur -= 1;
          jeu._joueur.ressources += parseInt((pays.cout_corruption/2),10);
          fermer_bouton_action(button_influence_pour_richesse.id);
        });
      }

      if (pays._influence_du_joueur >= 10 && jeu._joueur._ressources >= parseInt((pays.cout_corruption),10)) {
        let button_influence_pour_corruption = document.createElement("input");
        td_btn_actions.appendChild(button_influence_pour_corruption);
        button_influence_pour_corruption.id = "btnInfluence_pour_corruption_pays_" + pays.nom;
        button_influence_pour_corruption.type = "button";
        button_influence_pour_corruption.className = "button is-small is-success";
        button_influence_pour_corruption.value = "Influence pour corruption";
        button_influence_pour_corruption.addEventListener("click", () => {
          pays._corruption +=1
          pays.influence_du_joueur -= 10;
          jeu._joueur.ressources += parseInt((pays.cout_corruption),10);
          fermer_bouton_action(button_influence_pour_corruption.id);
        });
      }



    });
  }
}

function function_passer_tour_simple(){
  jeu.tour.augmenter();
  update_affichage();
  update_affichage_pays();
}

function fermer_bouton_action(button_id) {
  document.getElementById(button_id).remove();
  update_affichage();
  update_affichage_pays();
}

modal_option1.onclick = function changement_de_tour_modal() {
  jeu.tour.augmenter();
  update_affichage();
};

modal_option2.onclick = function changement_de_tour_modal() {
  jeu.tour.augmenter();
  update_affichage();
};
