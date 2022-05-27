var score = document.getElementById("score");
var Game = document.getElementById("Game");
var x = 0;
var Games = 1; 

let name = prompt("Ingresa tu nombre");
alert("Obten 80 puntos para ganar");

function Puntos(){
    score.innerHTML = x++;
    if(x > 80){
        x = x - 80
        score.style.color ="#00f"
        score.innerHTML = `<h1>!!Felicitaciones ${name} Has Ganado !!`;
        Game.innerHTML = `Partidas Ganadas: ${Games++}`;
    };
};