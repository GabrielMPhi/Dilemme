let pays_factory = new PaysFactory(); 

let france = pays_factory.get_pays({nom: "France", population : 1000, prestige : 100})
let russie = pays_factory.get_pays({nom: "Russie", population : 5000, prestige : 100})
let pays_bas = pays_factory.get_pays({nom: "Pays-Bas", population : 100, prestige : 100})
let etats_unis = pays_factory.get_pays({nom: "États-Unis", population : 500, prestige : 100})
let suede = pays_factory.get_pays({nom: "Suède", population : 500, prestige : 100})
let danemark = pays_factory.get_pays({nom: "Danemark", population : 500, prestige : 100})
let qing = pays_factory.get_pays({nom: "Empire Qing", population : 100000, prestige : 200})

let liste_de_pays_etranger = [france,russie, pays_bas,etats_unis, suede, danemark, qing]

let index_de_france = liste_de_pays_etranger.findIndex(x => x.nom === "France")
let index_de_russie = liste_de_pays_etranger.findIndex(x => x.nom === "Russie")
let index_de_pays_bas = liste_de_pays_etranger.findIndex(x => x.nom === "Pays-Bas")
let index_de_etats_unis = liste_de_pays_etranger.findIndex(x => x.nom === "États-Unis")
let index_de_suede = liste_de_pays_etranger.findIndex(x => x.nom === "Suède")
let index_de_danemark = liste_de_pays_etranger.findIndex(x => x.nom === "Danemark")
let index_de_empire_qing = liste_de_pays_etranger.findIndex(x => x.nom === "Empire Qing")