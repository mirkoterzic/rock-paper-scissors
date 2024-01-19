console.log("MILAN");
//Function to genarate a random number from min to max
function getRandomIntInRange(min, max) {
    // Use Math.floor() to round down to the nearest integer
    // Use Math.random() to generate a random decimal between 0 and 1
    // Multiply the result by the range (max - min + 1) and add min
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
//Function to get the computer choice
  function getComputerChoice(){
    // Example: Generate a random integer between 5 and 10
  let computerChoice = getRandomIntInRange(1, 3);

  if( computerChoice===1){
    computerChoice="Rock";
    
  }else if(computerChoice===2){
    computerChoice="Paper";

  }else{
    computerChoice="Scissors";
  }
  return computerChoice;

  }
 
  function getPlayerChoice(){
    let playerChoice= prompt("Please enter a option(Rock, Paper , Scissors):");
    playerChoice=playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if(playerChoice!=="Rock"||playerChoice!=="Paper"||playerChoice!=="Scissors"){
        return console.log("Error");
    }
    else{
         return playerChoice;
    }
   

  }
  

  let playerChoice=getPlayerChoice();
  let computerChoice= getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);
    
        function play(playerChoice,computerChoice){
            if(playerChoice==="Rock"&& computerChoice==="Scissors"){
            return console.log("Player wins");
            }else if(playerChoice==="Paper"&& computerChoice==="Rock"){
                return console.log("Player wins");
            }else if(playerChoice==="Scissors"&& computerChoice==="Paper"){
                return console.log("Player wins");
            }else if(playerChoice===computerChoice){
                return console.log("DRAW")
                
            }
            else{
            return console.log("Computer Wins");
            }

        
    }
  console.log(play(playerChoice,computerChoice));
  