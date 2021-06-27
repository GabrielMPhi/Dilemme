class Jeu {

    constructor(liste_pays){
        this._tour=new Tour()
        this._score=0
        this._dilemme_du_tour_objet = []
        //this._pays_etranger = liste_pays
        this._monde = new Monde (liste_pays)
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

    get pays_etranger() {
      return this._pays_etranger
    }

  set pays_etranger(e){
  this._pays_etranger = e
  }

}