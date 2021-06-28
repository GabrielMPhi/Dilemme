class Jeu {

    constructor(score, influence, liste_pays){
        this._tour=new Tour()
        this._joueur= new Joueur (score, influence)
        this._dilemme_du_tour_objet = []
        this._monde = new Monde (liste_pays)
    }
    
  get joueur() {
      return this._joueur
    }

  set joueur(e){
  this._joueur = e
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