let playerChoice="";
let computerChoice="";

// Eventlistener for all buttons      
      var plpaper = document.querySelector('#paper');
      plpaper.addEventListener('click',() =>   {
          playerChoice="Paper";
          computerChoice=getComputerChoice();
          console.log(playMatch(playerChoice,computerChoice))
          document.getElementById("PlayerWins").textContent=playerWins;
          document.getElementById("ComputerWins").textContent=computerWins;
          document.getElementById("Draws").textContent=Draws;
          
      })

      var plrock = document.querySelector('#rock');
      plrock.addEventListener('click',() =>   {
          playerChoice="Rock";
          computerChoice=getComputerChoice();
          console.log(playMatch(playerChoice,computerChoice))
          playerChoice="";
          computerChoice="";
          
          document.getElementById("PlayerWins").textContent=playerWins;
          document.getElementById("ComputerWins").textContent=computerWins;
          document.getElementById("Draws").textContent=Draws;
          
      })

      var plscissors = document.querySelector('#scissors');
          plscissors.addEventListener('click',() =>  {
          playerChoice="Scissors";
          computerChoice=getComputerChoice();
          console.log(playMatch(playerChoice,computerChoice))

          document.getElementById("PlayerWins").textContent=playerWins;
          document.getElementById("ComputerWins").textContent=computerWins;
          document.getElementById("Draws").textContent=Draws;
          
      })

      
      



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
 
  let playerWins=0;
  let computerWins=0;
  let Draws=0;
  
    
     
    
        function playMatch(playerchoice,computerchoice){

            if(playerchoice=='Rock'&& computerchoice=='Scissors'){
              playerWins++;
            return 'Player wins';
            }else if(playerchoice=="Paper"&& computerchoice=="Rock"){
              playerWins++;
                return "Player wins";
            }else if(playerchoice=="Scissors"&& computerchoice=="Paper"){
              playerWins++;
                return "Player wins";
            }else if(playerchoice==computerchoice){
              Draws++;
                return "DRAW";
                
            }
            else{
              computerWins++;
            return "Computer Wins";
            }
 
   
        
    }
 
  
   function checkMatchWinner(){
    if(computerWins<playerWins){
      console.log("Player wins match");
     }
     else if(computerWins>playerWins){
      console.log("Compueter wins match");
     }
     else {
      console.log("DRAW MATCH");
     }
   }