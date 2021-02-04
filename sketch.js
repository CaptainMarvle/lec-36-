var canvas;
var gameState = 0; 
var playarCount;
var database;
var form,player,game;

function setup(){

canvas = createCanvas(400,400);
detabase = firebase.database();
game = new Game();
game.getState();
game.start();


}

function draw(){



}
