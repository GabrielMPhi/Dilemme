class Tour {
    constructor(){
      this.numero = 1;
      this.observateurs = [];
    }
  
    augmenter = function(){
      this.numero++
      console.log(jeu.pays_etranger) // Je ne sais pas pourquoi le log ici et le log ligne 11 disent la même chose... quand la modif est sensé apparaitre ligne 10
      jeu.passage_de_tour_pays()
      console.log(jeu.pays_etranger)
      this.signaler();
    }
  
    signaler = function(){
      this.observateurs.forEach(objet_observateur => objet_observateur.changementTour(this)); 
    }  


}