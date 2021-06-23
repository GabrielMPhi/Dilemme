class Tour {
    constructor(){
      this.numero = 1;
      this.observateurs = [];
    }
  
    augmenter = function(){
      this.numero++
      this.signaler();
    }
  
    signaler = function(){
      this.observateurs.forEach(objet_observateur => objet_observateur.changementTour(this)); 
    }  


}