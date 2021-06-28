class Joueur {

    constructor(score, influence){
        this._score= score
        this._influence= influence
    }

    get score (){
        return this._score
    }
    set score(e){
        this._score = e
    }

    get influence (){
        return this._influence
    }
    set influence(e){
        this._influence = e
    }


    changementTour(observe){
            this.influence+=1
        }

}