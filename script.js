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

function humanWinRound(humanChoice, computerChoice, scores) {
    let result = document.querySelector(ROUND_RESULT);
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    return scores.humanScore++;    
}

function humanLoseRound(humanChoice, computerChoice, scores) {
    let result = document.querySelector(ROUND_RESULT);
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    return scores.computerScore++;
}

function showScore(scores) {
    let result = document.querySelector(CURRENT_SCORE);
    if (scores.humanScore >= 5 || scores.computerScore >= 5)        
        result.textContent = `Final Score: Your score: ${scores.humanScore} Computer score ${scores.computerScore}`;    
    else
        result.textContent = `Your score: ${scores.humanScore} \nComputer score: ${scores.computerScore}`;
}

function playRound(humanChoice, computerChoice, scores){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        let result = document.querySelector(ROUND_RESULT);
        result.textContent = `Draw! ${humanChoice} and ${computerChoice}`;
    }

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
    
    const btns = document.querySelectorAll(".selector");
    for (let btn of btns) {
        btn.addEventListener("click", () => {
            playRound(btn.textContent, getComputerChoice(), scores);
            if (scores.humanScore >= 5 || scores.computerScore >= 5) {
                document.querySelector("#buttons").remove();
            }
        });
    }
}

const CURRENT_SCORE = ".current-score";
const ROUND_RESULT = ".round-result";
const result = document.getElementById("result")
const currentScore = document.createElement("div");
currentScore.classList.add("current-score");

const roundResult = document.createElement("div");
roundResult.classList.add("round-result");

result.appendChild(roundResult);
result.appendChild(currentScore);

playGame();
