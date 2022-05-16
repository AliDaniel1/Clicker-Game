var score = document.getElementById("score");
var x = 0;

alert("Obten 80 puntos para ganar");
let name = prompt("Ingresa tu nombre");

function Puntos(a){
    x = x + a
    score.innerHTML = x;
    if(x > 80){
        x = x - 80
        score.innerHTML = "<h1>!!Felicitaciones " + name + " Has Ganado !!"
    };
};