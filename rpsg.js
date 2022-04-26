/* -randomly return "rock,paper,scissors"
-function is 1 round
-2 parameters: playerSelection & computerSelection
-return a string declaring winner of the round; ex. "you lose, paper beats rock
-make playerSelection parameter case-insensitive 
-return not console */

 const playerSelectionDisplay = document.getElementById('user-choice')
 const _computerSelectionDisplay = document.getElementById('computer-choice')
 const resultDisplay = document.getElementById('result')
 const possibleChoices = document.querySelectorAll('button')


   possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id
      playerSelectionDisplay.innerHtml = playerSelection
      generateComputerSelection()
      getResult()
   } ))
   function generateComputerSelection ()
   {
      const randomNumber = Math.floor(Math.random()* 3 + 1); //or you can use possibleChoices.lengt
    if (randomNumber === 1) {
       _computerSelection = 'rock'
    }
    if (randomNumber === 2) {
      _computerSelection = 'paper'
   }
    if (randomNumber === 3) {
      _computerSelection = 'scissors'
   } 
 computerChoiceDisplay.innerHtml = _computerSelection
} 


function getResult(){
   if (_computerSelection === playerSelection){
      result = 'Its a draw!'
   }
   if (_computerSelection === 'rock' &&  playerSelection === "paper") {
      result = 'you win!'
   }
   if (_computerSelection === 'rock' &&  playerSelection === "scissors") {
      result = 'you lost!'
   }
   if (_computerSelection === 'paper' &&  playerSelection === "scissors") {
      result = 'you win!'
   }
   if (_computerSelection === 'scissors' &&  playerSelection === "rock") {
      result = 'you win!'
   }
   if (_computerSelection === 'scissors' &&  playerSelection === "paper") {
      result = 'you lost!'
   }
   resultDisplay.innerHtml = result
}