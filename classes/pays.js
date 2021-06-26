class Pays {


    constructor(nom, population, prestige){
        this._nom = nom;
        this._population = population;
        this._prestige = prestige
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

    get prestige (){
        return this._prestige
    }
    set prestige(e){
        this._prestige = e
    }

    croissance_population = function(){
        this._population= this._population + parseInt((this._population *.05), 10)
    } 

}