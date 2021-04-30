const playerElementInHTML = document.getElementById("playerHandID");
const computerElementInHTML = document.getElementById("computerHandID");
const resultElementInHTML = document.getElementById("resultEachRoundID");
const resultTotalInHTML=document.getElementById("resultInTotalID");

let playerScoresInTotal=0;
let computerScoresInTotal=0;


document.getElementById("rock").addEventListener("click", function () {
    compareHands("Rock", makeComputerHand());

});
document.getElementById("paper").addEventListener("click", function () {
    compareHands("Paper", makeComputerHand());

});
document.getElementById("scissors").addEventListener("click", function () {
    compareHands("Scissors", makeComputerHand());

});
document.getElementById("lizard").addEventListener("click", function () {
    compareHands("Lizard", makeComputerHand());

});
document.getElementById("spock").addEventListener("click", function () {
    compareHands("Spock", makeComputerHand());

});


function makeComputerHand() {

    let computerMath = Math.random();

    if (computerMath>=0&&computerMath<=0.2) {
        computerHand = "Rock";
    } else if (computerMath>0.2&&computerMath<=0.4 ) {
        computerHand = "Paper";
    } else if (computerMath>0.4&&computerMath<=0.6 ) {
        computerHand = "Scissors";

    } else if (computerMath>0.6&&computerMath<=0.8 ) {
        computerHand = "Lizard";

    } else {
        computerHand = "Spock";
    }
    return computerHand;
}


let compareHands = function (playerHand, computerHand) {
    playerElementInHTML.innerHTML = "Player Chooses " + playerHand;
    computerElementInHTML.innerHTML = "Computer Chooses " + computerHand;

    switch (playerHand) {
        case computerHand:

            resultElementInHTML.innerHTML = "Round Result:Tie!"
            playerScoresInTotal++;
            computerScoresInTotal++;
            displayFinalResult();

            break;

        case "Rock":
            if (computerHand == "Scissors"||computerHand == "Lizard") {
                resultElementInHTML.innerHTML = "Round Result:Player wins!";
                playerScoresInTotal++;
                displayFinalResult();

            } else {
                resultElementInHTML.innerHTML = "Round Result:Player loses!";
                computerScoresInTotal++;
                displayFinalResult();

            }
            break;

        case "Paper":
            if (computerHand == "Rock"||computerHand == "Spock") {
                resultElementInHTML.innerHTML = "Round Result:Player wins!";
                playerScoresInTotal++;
                displayFinalResult();

            } else {
                resultElementInHTML.innerHTML = "Round Result:Player loses!";
                computerScoresInTotal++;
                displayFinalResult();
            }
            break;

        case "Scissors":
            if (computerHand == "Paper"||computerHand == "Lizard") {
                resultElementInHTML.innerHTML = "Round Result:Player wins!";
                playerScoresInTotal++;
                displayFinalResult();

            } else {
                resultElementInHTML.innerHTML = "Round Result:Player loses!";
                computerScoresInTotal++;
                displayFinalResult();
            }
            break;

        case "Lizard":
            if (computerHand == "Spock"||computerHand == "Paper") {
                resultElementInHTML.innerHTML = "Round Result:Player wins!";
                playerScoresInTotal++;
                displayFinalResult();

            } else {
                resultElementInHTML.innerHTML = "Round Result:Player loses!";
                computerScoresInTotal++;
                displayFinalResult();
            }
            break;

        case "Spock":
            if (computerHand == "Scissors"||computerHand == "Rock") {
                resultElementInHTML.innerHTML = "Round Result:Player wins!";
                playerScoresInTotal++;
                displayFinalResult();

            } else {
                resultElementInHTML.innerHTML = "Round Result:Player loses!";
                computerScoresInTotal++;
                displayFinalResult();
            }
            break;

    }
}

function displayFinalResult(){
    if(playerScoresInTotal==computerScoresInTotal){
        resultTotalInHTML.innerHTML="Player Scores: "+playerScoresInTotal+" VS Computer Scores:"+ computerScoresInTotal+"<br />Final Result:Ties.";
    }
    else if(playerScoresInTotal<computerScoresInTotal){
        resultTotalInHTML.innerHTML="Player Scores: "+playerScoresInTotal+" VS Computer Scores:"+ computerScoresInTotal+"<br />Final Result:Computer Wins.";
    }
    else{
        resultTotalInHTML.innerHTML="Player Scores: "+playerScoresInTotal+" VS Computer Scores:"+ computerScoresInTotal+"<br />Final Result:Player Wins.";
    }
}

displayFinalResult();



console.log(playerScoresInTotal);
console.log(computerScoresInTotal);
