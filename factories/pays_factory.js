class PaysFactory{

    constructor(){}

    get_pays({nom, population, territoire, prestige, infrastructure, corruption}){
        return new Pays(nom, population, territoire, prestige, infrastructure, corruption)
    }

}
