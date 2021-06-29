class PaysFactory{

    constructor(){}

    get_pays({nom, population, prestige, infrastructure, corruption}){
        return new Pays(nom, population, prestige, infrastructure, corruption)
    }

}
