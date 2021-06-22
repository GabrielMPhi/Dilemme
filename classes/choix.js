class Choix{
    constructor(nom_choix, effet, delai){
        this.nom_choix = nom_choix
        this.effet = effet
        this.delai = delai
    }

    changementTour(observe){
        if (this.delai > 0){
            this.delai--
        } 
        if (this.delai <= 0){
            if (Number.isInteger(this.effet)){
            score += this.effet
            } 
            if (typeof this.effet === "function") {
                this.effet()
            }
            observe.observateurs = arrayRemove(observe.observateurs, this)
        }
    }

}
