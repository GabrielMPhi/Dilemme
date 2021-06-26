class Choix{
    constructor(nom_choix, effet, delai, repetition){
        this.nom_choix = nom_choix,
        this.effet = effet,
        this.delai = delai,
        this.repetition = repetition
    }

    changementTour(observe){
        if (this.repetition){
            this.appliquer_effet()
        }

        if (this.delai > 1){
            this.delai--
        } else if (this.delai <= 1 && !this.repetition){
            this.appliquer_effet()
            observe.observateurs = arrayRemove(observe.observateurs, this)
        } else {
            observe.observateurs = arrayRemove(observe.observateurs, this)
        }
    }

    appliquer_effet(){
        if (Number.isInteger(this.effet)){
            jeu.score += this.effet
            } 
        if (typeof this.effet === "function") {
            this.effet()
        }

    }

}
