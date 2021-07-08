class Pays {

    constructor(nom, population, territoire, prestige, infrastructure, corruption){
        this._nom = nom;
        this._population = population;
        this._territoire = territoire
        this._prestige = prestige;
        this._infrastructure = infrastructure;
        this._corruption = corruption;

    // Éléments par défaut (donc pas besoin de l'ajouter dans la liste des pays)
        this._taux_croissance_population = 0.04;
        this._taux_mortalite = 0.01;
        this._influence_du_joueur = 0
        this._cout_corruption = 1
        this._taux_croissance_economie = 0.05
        this._gdp = population * 10

        // ajouter territoire, taux de mortalité, etc.
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

    get infrastructure (){
        return this._infrastructure
    }
    set infrastructure(e){
        this._infrastructure = e
    }

    get corruption (){
        return this._corruption
    }
    set corruption(e){
        this._corruption = e
    }

    get cout_corruption (){
        return this._cout_corruption
    }
    set cout_corruption(e){
        this._cout_corruption = e
    }

    get influence_du_joueur (){
        return this._influence_du_joueur
    }
    set influence_du_joueur(e){
        this._influence_du_joueur = e
    }

    croissance_pays (){
        //Population
        let augmentation_population = parseInt((this._population * (this._taux_croissance_population - this._taux_mortalite)), 10)
        this._population += augmentation_population
        //Economie
        
        let croissance_econ_reelle = (this._taux_croissance_economie - (this._corruption / 100)).toFixed(2)

        //Cout corruption
        this._cout_corruption = this._corruption + parseInt((this._infrastructure/100),10)

        if (this._influence_du_joueur > 0){
            jeu._joueur._ressources+= parseInt((this._influence_du_joueur*(this._corruption/10)),10)
        }


    } 

}