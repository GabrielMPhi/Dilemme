class Joueur {

    constructor(score, agents){
        this._score= score
        this._ressources = 200
        this._agents = agents
        this._danger = 0
    }

    get score (){
        return this._score
    }
    set score(e){
        this._score = e
    }
    
    get ressources (){
        return this._ressources
    }
    set ressources(e){
        this._ressources = e
    }

    get agents (){
        return this._agents
    }
    set agents(e){
        this._agents = e
    }

    get danger (){
        return this._danger
    }
    set danger(e){
        this._danger = e
    }

    changementTour(observe){
        if (this._ressources <= 0){
            this._influence-=1
        }
        if (this.influence<=0){
            this.score-=1
        }
            this.influence+=1
        }

}