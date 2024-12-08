


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

    
    return selected.toLowerCase();
    
}

function getHumanChoice(choice) {
    choice = prompt("Rock, Paper, or Scissors");
    choice.toLowerCase();

    
    return choice;
}



function playGame() {
    
    let computerScore = 0;
    let humanScore = 0;

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
        
        return result;
    }

    for(let i = 1; i < 6 ; i++)
    {
        console.log("Round " + i)
        playRound(getComputerChoice(),getHumanChoice());
        
    }
    

}

playGame();


