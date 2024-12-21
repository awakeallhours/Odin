const container = document.querySelector("#container");






const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Rock Paper Scissors";
title.setAttribute("style", "text-align: center;")
container.appendChild(title);

const scores = document.createElement("div");
scores.classList.add("scores");
scores.setAttribute("style", "text-align: center")
container.appendChild(scores)

let round = document.createElement("h2")
round.classList.add("round")
round.textContent = `Round ${round}`
scores.appendChild(round)

let computerScore = 0;
let scoreCom = document.createElement("h2")
scoreCom.classList.add("scoreCom")
scoreCom.textContent = `Computer Score: ${computerScore}`;
scoreCom.setAttribute("style", "display: inline-block; margin: 8px;")
scores.appendChild(scoreCom)

let humanScore = 0;
let scoreHum = document.createElement("h2")
scoreHum.classList.add("scoreHum")
scoreHum.textContent = `Human Score: ${humanScore}`;
scoreHum.setAttribute("style", "display: inline-block; margin: 8px;")
scores.appendChild(scoreHum)

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttonsContainer");
buttonsContainer.setAttribute("style", "text-align: center")
container.appendChild(buttonsContainer)

let clicky = ""
const rockButton = document.createElement("button");
rockButton.classList.add("btn");
rockButton.id = "rock"
rockButton.textContent = "Rock";
rockButton.setAttribute("style", "padding: 8px; margin: 8px;")
//rockButton.addEventListener("click", function() {getHumanChoice("rock")})

const paperButton = document.createElement("button");
paperButton.classList.add("btn");
paperButton.id = "paper"
paperButton.textContent = "Paper";
paperButton.setAttribute("style", "padding: 8px; margin: 8px;")
//paperButton.addEventListener("click", function() {getHumanChoice("paper")})

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("btn");
scissorsButton.id = "scissors"
scissorsButton.textContent = "Scissors";
scissorsButton.setAttribute("style", "padding: 8px; margin: 8px;")
//scissorsButton.addEventListener("click", function() {getHumanChoice("scissors")})

buttonsContainer.appendChild(rockButton);
buttonsContainer.appendChild(paperButton);
buttonsContainer.appendChild(scissorsButton);


function clicked(clicky)
{
    
}

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3)
    let selected = "";
    if(rand === 0)
    {
        selected = "Rock"
    }
    else if(rand === 1)
    {
        selected = "Paper"
    }
    else if(rand === 2)
    {
        selected = "Scissors"
    }

    console.log(`comuter choice ${selected}`)
    return selected.toLowerCase();
    
}

//no value is being returned or all values are being returned..... just need one value
function getHumanChoice(choice) {
    
    rockButton.addEventListener("click", function () {playRound(getComputerChoice,getHumanChoice("rock"))
    })
    paperButton.addEventListener("click", function () {playRound(getComputerChoice,getHumanChoice("paper"))
    })
    scissorsButton.addEventListener("click", function () {playRound(getComputerChoice,getHumanChoice("scissors"))
    //choice = "scissors"
    })
    /*const buttons = document.querySelectorAll(".btn")
    console.log("before selection")
    buttons.forEach((button) => {
        addEventListener("click", () => {
        if(button.id === "rock")
        {
            choice = "rock"
            
        }
        else if(button.id === "paper")
        {
            choice = "paper"
        }
        else if(button.id === "scissors")
        {
            choice = "scissors"
        }
        console.log(`end of if choice ${choice}`)
        });
    })*/
    //console.log(buttons)
    console.log("after selection")

    
    console.log(choice)
    return choice;
}

function playRound(computerChoice, humanChoice){
    
    let resultText = "";
    
    
    if(computerChoice === "rock")
    {
        if(humanChoice === "paper") 
        {
            resultText = "Paper beats Rock You Win!";
            humanScore += 1;
        }

        else if(humanChoice === "scissors")
        {
            resultText = "Rock beats Scissors Computer Wins!";
            computerScore +=1;
        }

        else if(humanChoice === "rock")
        {
            resultText = "You both chose Rock";
        }
    }

    if(computerChoice === "paper")
    {
            if(humanChoice === "rock") 
            {
                resultText = "Paper beats Rock Computer Wins";
                computerScore +=1;
            }
    
            else if(humanChoice === "scissors")
            {
                resultText = "Scissors beat Paper You Win!";
                humanScore +=1;
            }
    
            else if(humanChoice === "paper")
            {
                resultText = "You both chose Paper";
            }
    }

    if(computerChoice === "scissors")
    {
            if(humanChoice === "rock") 
            {
                resultText = "Rock beats Scissors You Win!";
                humanScore +=1;
            }
    
            else if(humanChoice === "paper")
            {
                resultText = "Scissors beat Paper Computer Wins";
                computerScore +=1;
            }
    
            else if(humanChoice === "scissors")
            {
                resultText = "You both chose Scissors";
            }
    }
    
    const result = console.log(`${resultText} Computer Score: ${computerScore} - Your Score ${humanScore}`)
    scoreHum.textContent = `Human Score: ${humanScore}`;
    scoreCom.textContent = `Computer Score: ${computerScore}`;
    return result;

    
}

getHumanChoice()
//playRound(getHumanChoice(),getComputerChoice)

        
    
    






