/* -randomly return "rock,paper,scissors"
-function is 1 round
-2 parameters: playerSelection & computerSelection
-return a string declaring winner of the round; ex. "you lose, paper beats rock
-make playerSelection parameter case-insensitive 
-return not console */

function playRound(playerSelection, computerSelection){
  
   let playRound = prompt("Rock, paper, or scissors?");
    if (playerSelection) {
        let playerOne = playerSelection.trim() .toLowerCase();
         if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){

             let computerSelection = Math.floor(Math.random()* 3 + 1);
             let computer = computerSelection === 1 ? "rock"
                : computerSelection === 2 ? "paper"
                :"scissors";

             let result = 
             playerSelection === computer 
                ? "Tie Game!"
                : playerSelection === "rock" && computer === "paper"
                ? `playerSelection: ${playerSelection}\nComputer: ${computer}\nComputer wins!`
                : playerSelection === "paper" && computer === "scissors"
                ? `playerSelection: ${playerSelection}\nComputer: ${computer}\nComputer wins!`
                : playerSelection === "scissors" && computer === "rock"
                ? `playerSelection: ${playerSelection}\nComputer: ${computer}\nComputer wins!`
                : `playerSelection: ${playerSelection}\nComputer: ${computer}\nplayerSelection Wins!`;
             alert(result);
             let playAgain = cofirm("Play again?");
             playAgain ? location.reload(): alert("Ok, thanks for playing.");
            }
        
    }


















}

