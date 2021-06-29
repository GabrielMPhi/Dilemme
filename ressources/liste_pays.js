let pays_factory = new PaysFactory(); 

let royaume_uni = pays_factory.get_pays({nom: "Royaume-Uni", population : 21226, prestige : 100, infrastructure : 100, corruption : 15}) // http://www.ggdc.net/maddison/other_books/appendix_B.pdf
let france = pays_factory.get_pays({nom: "France", population : 31246, prestige : 100, infrastructure : 100, corruption : 20}) 
let russie = pays_factory.get_pays({nom: "Russie", population : 54765, prestige : 100, infrastructure : 20, corruption : 30})    // https://en.wikipedia.org/wiki/Estimates_of_historical_world_population#By_world_region
let pays_bas = pays_factory.get_pays({nom: "Pays-Bas", population : 2355, prestige : 100, infrastructure : 50, corruption : 15})
let etats_unis = pays_factory.get_pays({nom: "États-Unis", population : 9981, prestige : 100, infrastructure : 100, corruption : 20})
let suede = pays_factory.get_pays({nom: "Suède", population : 2585, prestige : 100, infrastructure : 100, corruption : 5})
let danemark = pays_factory.get_pays({nom: "Danemark", population : 1155, prestige : 50, infrastructure : 70, corruption : 5})
let qing = pays_factory.get_pays({nom: "Empire Qing", population : 381000, prestige : 200, infrastructure : 30, corruption : 70})
let norvege = pays_factory.get_pays({nom: "Norvège", population : 970, prestige : 200, infrastructure : 30, corruption : 5})
let inde = pays_factory.get_pays({nom: "Inde", population : 209000, prestige : 200, infrastructure : 30, corruption : 40})
let allemagne = pays_factory.get_pays({nom: "Allemagne", population : 24905, prestige : 200, infrastructure : 30, corruption : 10})
let espagne = pays_factory.get_pays({nom: "Espagne", population : 12203, prestige : 200, infrastructure : 30, corruption : 50})

// Pays potentiels

let quebec = pays_factory.get_pays({nom: "République du Québec", population : 375, prestige : 20000, infrastructure : 100})

let liste_de_pays_etranger = [france,russie, pays_bas,etats_unis, suede, danemark, qing, norvege, inde, allemagne, espagne]

let index_de_france = liste_de_pays_etranger.findIndex(x => x.nom === "France")
let index_de_russie = liste_de_pays_etranger.findIndex(x => x.nom === "Russie")
let index_de_pays_bas = liste_de_pays_etranger.findIndex(x => x.nom === "Pays-Bas")
let index_de_etats_unis = liste_de_pays_etranger.findIndex(x => x.nom === "États-Unis")
let index_de_suede = liste_de_pays_etranger.findIndex(x => x.nom === "Suède")
let index_de_danemark = liste_de_pays_etranger.findIndex(x => x.nom === "Danemark")
let index_de_empire_qing = liste_de_pays_etranger.findIndex(x => x.nom === "Empire Qing")

let index_de_quebec = liste_de_pays_etranger.findIndex(x => x.nom === "République du Québec")