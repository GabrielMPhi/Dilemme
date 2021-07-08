class Monde {

    constructor(liste_pays){
        this._pays_etranger= liste_pays
        this._danger= 0
    }

    get danger (){
        return this._danger
    }
    set danger(e){
        this._danger = e
    }

    changementTour(observe){
        for (let i = 0; i < this._pays_etranger.length; i++) {
            this._pays_etranger[i].croissance_pays()

          }
    if(this._danger >= 100){
        console.log("Fin du jeu")
    }


        }

}