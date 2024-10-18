var playerMove = function() {
    var choose =prompt("Let's play rock, paper, scissors! Choose rock, paper, or scissors!");
    var answer;
if(choose === "rock") {
    answer = 1;
} else if(choose === "paper") {
    answer = 2;
} else if(choose === "scissors") {
    answer = 3;
}
return answer;
};

var player = playerMove();

var opponent = function() {
var move = Math.floor(Math.random()*4);
return move;
};

var opponentMove = opponent();

var winner = function(playerMove, opponentMove) {
if(playerMove === opponentMove) {
    console.log("It's a draw!");
} else if(playerMove === 1 && opponentMove === 3) {
    console.log("You win with rock!");
} else if(playerMove === 1 && opponentMove === 2) {
    console.log("You lost with rock!");
} else if(playerMove === 2 && opponentMove === 1) {
    console.log("You won with paper!");
} else if(playerMove === 2 && opponentMove === 3) {
    console.log("You lost with paper!");
} else if(playerMove === 3 && opponentMove === 1) {
    console.log("You won with sissors!");
} else if(playerMove === 3 && opponentMove === 2) {
    console.log("You lost with scissors!");
    }
};


winner(player, opponentMove);