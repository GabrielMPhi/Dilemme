class Jeu {

    constructor(liste_pays){
        this._tour=new Tour()
        this._score=0
        this._dilemme_du_tour_objet = []
        this._monde = new Monde (liste_pays)
        this._influence = 1
    }
    
  get score() {
      return this._score
    }

  set score(e){
  this._score = e
  }

  get tour() {
      return this._tour
    }

  set tour(e){
  this._tour = e
  }

  get dilemme_du_tour_objet() {
      return this._dilemme_du_tour_objet
    }

  set dilemme_du_tour_objet(e){
  this._dilemme_du_tour_objet = e
  }

  get monde() {
    return this._monde
  }

  set monde(e){
  this._monde = e
  }

}