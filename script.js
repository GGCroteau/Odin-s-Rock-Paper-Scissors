function getComputerChoice(){
    const rand = Math.random();

    if(rand>=0.66)
        return "rock";
    else if(rand>=0.33)
        return "paper";
    else
        return "scissor";
}

function getHumanChoice(){
    return prompt("Choose one: Rock, Paper or Scissor?");    
}

function humanWinRound(humanChoice, computerChoice, scores){
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return scores.humanScore++;    
}

function humanLoseRound(humanChoice, computerChoice, scores){
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return scores.computerScore++;
}

function showScore(scores){
    console.log(`Your score: ${scores.humanScore} \nComputer score: ${scores.computerScore}`)
}

function playRound(humanChoice, computerChoice, scores){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == computerChoice)
        console.log(`Draw! ${humanChoice} and ${computerChoice}`);
    if(humanChoice == "rock" && computerChoice == "paper")
        humanLoseRound(humanChoice, computerChoice, scores);
    if(humanChoice == "rock" && computerChoice == "scissor")
        humanWinRound(humanChoice, computerChoice, scores);
    if(humanChoice == "paper" && computerChoice == "rock")
        humanWinRound(humanChoice, computerChoice, scores);
    if(humanChoice == "paper" && computerChoice == "scissor")
        humanLoseRound(humanChoice, computerChoice, scores);
    if(humanChoice == "scissor" && computerChoice == "rock")
        humanLoseRound(humanChoice, computerChoice, scores);
    if(humanChoice == "scissor" && computerChoice == "paper")
        humanWinRound(humanChoice, computerChoice, scores);

    showScore(scores);
}

function playGame(){
    let scores = {
        humanScore: 0,
        computerScore: 0
    }
    
    let roundNumber = 1;

    while(roundNumber <= 5)
    {
        console.log(`Round ${roundNumber}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, scores);
        roundNumber++;
    }    
    console.log(`Final Score: Your score: ${scores.humanScore} Computer score ${scores.computerScore}`);
}

playGame();
