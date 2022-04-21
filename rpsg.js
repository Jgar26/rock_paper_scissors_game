/* -randomly return "rock,paper,scissors"
-function is 1 round
-2 parameters: playerSelection & computerSelection
-return a string declaring winner of the round; ex. "you lose, paper beats rock
-make playerSelection parameter case-insensitive 
-return not console */


const myArray = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {

return myArray[~~(Math.random() * myArray.lenth)];
}

function playRound(playerSelection, computerSelection){

    
}