class PaysFactory{

    constructor(){}

    get_pays({nom, population, prestige, infrastructure}){
        return new Pays(nom, population, prestige, infrastructure)
    }

}
