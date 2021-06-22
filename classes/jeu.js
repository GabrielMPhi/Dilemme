class Jeu {

    constructor(tour){
        this._tour=tour
        this._score=0
    }

    get score() {
        return this._score
      }
    set score(e){
    this._score = e
    }

}