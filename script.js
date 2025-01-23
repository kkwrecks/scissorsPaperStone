let getComputerChoice = () => {
    // console.log(luck = Math.random());
    const luck = Math.random();

    if (luck<=0.333) {
        return "scissors";
    } else if (0.334<=luck || luck<=0.666) {
        return "paper";
    } else if (luck>0.666) {
        return "stone";
    }
}

// let getHumanChoice = () => prompt("Choose scissors, paper or stone. ");

function getHumanChoice() {
    let options = ['scissors','paper','stone'];
    var validAnswer = false;
    let choice = (prompt("Choose scissors, paper or stone. ")).toLowerCase();

    while (!validAnswer) {
        if (options.includes(choice)) {
            validAnswer = true;
            return choice;
        } else {
            console.log(`keyed:${choice}. not valid.`)
            choice = (prompt("Please try key again- scissors, paper or stone.")).toLowerCase();
        }
    }   
}

let humanScore = 0;
let computerScore = 0;

// console.log(`Human chose: ${getHumanChoice()}`)
// console.log(`Computer chose: ${getComputerChoice()}`)

function playRound(humanChoice, computerChoice) {

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    console.log(`Human chose: ${humanChoice}`)
    console.log(`Computer chose: ${computerChoice}`)

    if (computerChoice == humanChoice) {
        console.log(`ITS A TIE. Score H${humanScore} C${computerScore} `);

    } else if ((humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'stone') || (humanChoice == 'stone' && computerChoice == 'scissors')) {
        humanScore += 1;
        console.log(`YOU WIN :D ${humanChoice} beats ${computerChoice}. Score H${humanScore} C${computerScore} `);
    } else {
        computerScore += 1;
        console.log(`YOU LOSE :( ${computerChoice} beats ${humanChoice}. Score H${humanScore} C${computerScore} `);
    }
}

for (i=1; i<7; i++) {
    if (i == 6) {
        console.log(`End of Game. Refresh to play again.`);
    } else {
    console.log(`Round ${i}`);
    playRound();
    }
}
