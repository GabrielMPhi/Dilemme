let pays_factory = new PaysFactory(); 

let france = pays_factory.get_pays({nom: "France", population : 1000})
let russie = pays_factory.get_pays({nom: "Russie", population : 5000})
let pays_bas = pays_factory.get_pays({nom: "Pays-Bas", population : 100})
let etats_unis = pays_factory.get_pays({nom: "États-Unis", population : 500})

let liste_de_pays_etranger = [france,russie, pays_bas,etats_unis]

let index_de_france = liste_de_pays_etranger.findIndex(x => x.nom === "France")
let index_de_russie = liste_de_pays_etranger.findIndex(x => x.nom === "Russie")