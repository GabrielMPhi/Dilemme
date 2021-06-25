class PaysFactory{

    constructor(){}

    get_pays({nom, population}){
        return new Pays(nom, population)
    }

}
