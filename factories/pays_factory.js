class PaysFactory{

    constructor(){}

    get_pays({nom, population, prestige}){
        return new Pays(nom, population, prestige)
    }

}
