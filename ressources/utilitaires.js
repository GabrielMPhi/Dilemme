
let NormalrandNum = function creer_rand_num(){
    return (Math.random() + Math.random() + Math.random()) / 3
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomNormalInt(max) {
    return Math.floor(NormalrandNum() * Math.floor(max));
}

function arrayRemove(arr, value){
	return arr.filter(function(ele){
        return ele !== value 
    })
}

function push_dans_tour(valeur){
	jeu.tour.observateurs.push(valeur)
}