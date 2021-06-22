let factory = new Dilemme_factory(); 


// Banque de fonction utile...

function methode_function_test() { score = score * 2}


// Liste des événements du départ

let dilemme1 = function() { return factory.getDilemme(
    {
        texte : "Doit-on investir en <b>France</b> ou en <b>Russie</b>?",
        choix_1 : {nom_choix: "Investir en France", effet: methode_function_test, delai: 1 + getRandomInt(3)},
        choix_2 : {nom_choix: "Investir en Russie", effet: 13, delai: 1 + getRandomInt(7)}
    }
)}

let dilemme2 = function() { return factory.getDilemme(
    {
        texte : "Doit-on investir en <b>Allemagne</b> ou dans <b>l'Empire Ottoman</b>?",
        choix_1 : {nom_choix: "Investir en Allemagne", effet: 2, delai: 1 + getRandomInt(4)},
        choix_2 : {nom_choix: "Investir dans l'Empire Ottoman", effet: 13, delai: 5 + getRandomInt(7)}
    }
)}

let dilemme3 = function() { return factory.getDilemme(
    {
        texte : "Doit-on investir en <b>Suède</b> ou au <b>Danemark</b>?",
        choix_1 : {nom_choix: "Investir en Suède", effet: 2, delai: 1 + getRandomInt(5)},
        choix_2 : {nom_choix: "Investir au Danemark", effet: 13, delai: 1 + getRandomInt(5)}
    }
)}

let dilemme4 = function() { return factory.getDilemme(
    {
        texte : "Doit-on investir dans l'<b>Empire Qing</b> ou au <b>Canada</b>?",
        choix_1 : {nom_choix: "Investir dans l'Empire Qing", effet: 2, delai: 5 + getRandomInt(15)},
        choix_2 : {nom_choix: "Investir au Canada", effet: 13, delai: 5 + getRandomInt(10)}
    }
)}

let dilemme_philosophique_1 = function() { return factory.getDilemme(
    {
        texte : "<b>Aristote</b> ou <b>Machiavel</b>?",
        choix_1 : {nom_choix: "Aristote", effet: 12, delai: 11 + getRandomInt(5)},
        choix_2 : {nom_choix: "Machiavel", effet: 12, delai: 11 + getRandomInt(5)}
    }
)}

let dilemme_philosophique_2 = function() { return factory.getDilemme(
    {
        texte : "Doit-on <b>sacrifier un innocent</b> pour le bien être <b>plus grand nombre</b>?",
        choix_1 : {nom_choix: "Sacrifier un innocent", effet: getRandomInt(10), delai: 1 + getRandomInt(5)},
        choix_2 : {nom_choix: "Ne pas sacrifier un innocent", effet: getRandomInt(10), delai: 1 + getRandomInt(5)}
    }
)}


liste_des_choix.push(dilemme1, dilemme2, dilemme3, dilemme4, dilemme_philosophique_1, dilemme_philosophique_2)

// Liste des événements de fin de partie

let dilemme_final_1 = function() { return factory.getDilemme(
    {
        texte : "Doit-on <b>finir la partie</b> ou <b>continuer à jouer</b>?",
        choix_1 : {nom_choix: "Finir la partie", effet: getRandomInt(10), delai: 1 + getRandomInt(5)},
        choix_2 : {nom_choix: "Continuer à jouer", effet: getRandomInt(10), delai: 1 + getRandomInt(5)}
    }
)}
let liste_des_choix_fin_de_partie = [];
liste_des_choix_fin_de_partie.push(dilemme_final_1)