let factory_dilemme = new Dilemme_factory(); 


// Banque de fonction utile...

function methode_investir_en_france() {
    console.log("Evenement qu'on veut!!")
    jeu._pays_etranger[index_de_france].population += 100 
    liste_des_choix.push(dilemme_france_dette_1)
}

function methode_investir_en_russie() {
    console.log("Evenement qu'on veut!!")
    jeu._pays_etranger[index_de_russie].population += 100 
}


// Liste des événements du départ

let dilemme1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on investir en <b>France</b> ou en <b>Russie</b>?",
        choix_1 : {nom_choix: "Investir en France", effet: methode_investir_en_france, delai: 2, repetition:false},
        choix_2 : {nom_choix: "Investir en Russie", effet: methode_investir_en_russie, delai: 10, repetition:false}
    }
)}

let dilemme2 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on investir en <b>Allemagne</b> ou dans <b>l'Empire Ottoman</b>?",
        choix_1 : {nom_choix: "Investir en Allemagne", effet: 2, delai: 1 + getRandomInt(4), repetition:false},
        choix_2 : {nom_choix: "Investir dans l'Empire Ottoman", effet: 13, delai: 5 + getRandomInt(7), repetition:false}
    }
)}

let dilemme3 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on investir en <b>Suède</b> ou au <b>Danemark</b>?",
        choix_1 : {nom_choix: "Investir en Suède", effet: 2, delai: 1 + getRandomInt(5), repetition:false},
        choix_2 : {nom_choix: "Investir au Danemark", effet: 13, delai: 1 + getRandomInt(5), repetition:false}
    }
)}

let dilemme4 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on investir dans l'<b>Empire Qing</b> ou au <b>Canada</b>?",
        choix_1 : {nom_choix: "Investir dans l'Empire Qing", effet: 2, delai: 5 + getRandomInt(15), repetition:false},
        choix_2 : {nom_choix: "Investir au Canada", effet: 13, delai: 5 + getRandomInt(10), repetition:false}
    }
)}

let dilemme_france_dette_1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "La France s'endette. Faut-il l'aider ou l'abandonner?",
        choix_1 : {nom_choix: "L'aider!", effet: -5, delai: 5, repetition:false},
        choix_2 : {nom_choix: "Lui prêter plus!", effet: -10, delai: 1 + getRandomInt(7), repetition:false}
    }
)}

let dilemme_philosophique_1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "<b>Aristote</b> ou <b>Machiavel</b>?",
        choix_1 : {nom_choix: "Aristote", effet: 10, delai: 3, repetition:true},
        choix_2 : {nom_choix: "Machiavel", effet: 5, delai: 3, repetition:true}
    }
)}

let dilemme_philosophique_2 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on <b>sacrifier un innocent</b> pour le bien être <b>plus grand nombre</b>?",
        choix_1 : {nom_choix: "Sacrifier un innocent", effet: getRandomInt(10), delai: 1 + getRandomInt(5), repetition:false},
        choix_2 : {nom_choix: "Ne pas sacrifier un innocent", effet: getRandomInt(10), delai: 1 + getRandomInt(5), repetition:false}
    }
)}

// utile pour test // liste_des_choix.push(dilemme1)

liste_des_choix.push(dilemme1, dilemme2, dilemme3, dilemme4, dilemme_philosophique_1, dilemme_philosophique_2)

// Liste des événements de fin de partie

let dilemme_final_1 = function() { return factory_dilemme.getDilemme(
    {
        texte : "Doit-on <b>finir la partie</b> ou <b>continuer à jouer</b>?",
        choix_1 : {nom_choix: "Finir la partie", effet: getRandomInt(10), delai: 1 + getRandomInt(5)},
        choix_2 : {nom_choix: "Continuer à jouer", effet: getRandomInt(10), delai: 1 + getRandomInt(5)}
    }
)}
let liste_des_choix_fin_de_partie = [];
liste_des_choix_fin_de_partie.push(dilemme_final_1)