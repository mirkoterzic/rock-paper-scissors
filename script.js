let playerChoice="";
let computerChoice="";
let playerWins=0;
let computerWins=0;
let Draws=0;


// Eventlistener for all buttons      
      var plpaper = document.querySelector('#paper');
      plpaper.addEventListener('click',() =>   {
          playerChoice="Paper";
          computerChoice=getComputerChoice();
          playMatch(playerChoice,computerChoice);
          updatescore();
          checkMatchWinner();

      })

      var plrock = document.querySelector('#rock');
      plrock.addEventListener('click',() =>   {
          playerChoice="Rock";
          computerChoice=getComputerChoice();
          playMatch(playerChoice,computerChoice)
          updatescore();
          playerChoice="";
          computerChoice="";
          checkMatchWinner();
      })

      var plscissors = document.querySelector('#scissors');
          plscissors.addEventListener('click',() =>  {
          playerChoice="Scissors";
          computerChoice=getComputerChoice();
          playMatch(playerChoice,computerChoice)
          updatescore();
          checkMatchWinner();
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
//Function to play a match
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
//Function to check match winner
  function checkMatchWinner(){
        if(playerWins==5){
         
          const pwon=document.getElementById('game');
          pwon.textContent="Player Won Match";
          pwon.style.color = "green";
          pwon.style.fontWeight = "bold";
          pwon.style.fontSize="50px";
          
        }
        if(computerWins===5){
          
          
          const cpwon=document.getElementById('game');
          cpwon.textContent="Computer Won Match";
          cpwon.style.color = "red";
          cpwon.style.fontWeight = "bold";
          cpwon.style.fontSize="50px";
         
        }
        }
//Funtion to update Score
  function updatescore(){
          document.getElementById("PlayerWins").textContent=playerWins;
          document.getElementById("ComputerWins").textContent=computerWins;
          document.getElementById("Draws").textContent=Draws;
        }