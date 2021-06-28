class Pays {

    constructor(nom, population, prestige){
        this._nom = nom;
        this._population = population;
        this._prestige = prestige;

    // Éléments par défaut
        this._taux_croissance_population = 0.04;
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

    croissance_population (){
        let augmentation_population = parseInt((this._population * this._taux_croissance_population), 10)
        this._population += augmentation_population
    } 

}