class Pays {


    constructor(nom, population){
        this._nom = nom;
        this._population = population;
    }

    get nom (){
        return this._nom
    }
    set nom(e){
        this._nom = e
    }
    get population (){
        return this._population
    }
    set population(e){
        this._population = e
    }

    croissance_population = function(){
        this._population+= 5 
    } 

}