console.log("Hello World");

let userInput;  // Declare userInput globally
let ComputerScore = 0;
let HumanScore = 0;
let GameOver = "";  // Declare the GameOver variable globally

function GetComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "ROCK";
    } else if (randomNum === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

const RockPaperScissorsButton = document.querySelector("#RockPaperScissorsButton");

function handleButtonClick(choice) {
    if (HumanScore >= 3 || ComputerScore >= 3) {
        return; // Stop the function if the game is over
    }

    let HumanChoice = choice.toUpperCase();  // Convert the choice to lowercase
    userInput = HumanChoice;  
    console.log("Human Chose: " + userInput);
    
    const result = PlayRound(userInput);  
    console.log("Human Score: " + HumanScore);
    console.log("Computer Score: " + ComputerScore);
}


document.getElementById('RockButton').addEventListener('click', function() {
    handleButtonClick('ROCK');  
});

document.getElementById('PaperButton').addEventListener('click', function() {
    handleButtonClick('PAPER');  
});

document.getElementById('ScissorsButton').addEventListener('click', function() {
    handleButtonClick('SCISSORS'); 
});

function PlayRound(HumanChoice) {
    let ComputerChoice = GetComputerChoice();
    console.log("Computer chose: " + ComputerChoice);
    result.style.display = "block";
    
    
    let resultText = "";
    
    if (HumanChoice === ComputerChoice) {
        resultText = "Draw!";
    } else if (
        (HumanChoice === 'ROCK' && ComputerChoice === 'SCISSORS') ||
        (HumanChoice === 'PAPER' && ComputerChoice === 'ROCK') ||
        (HumanChoice === 'SCISSORS' && ComputerChoice === 'PAPER')
    ) {
        HumanScore++;
        resultText = "You Win!";
    } else {
        ComputerScore++;
        resultText = "You Lose!";
    }

    if (resultText === "You Win!") {
        document.body.style.backgroundColor = "#83f28f";  // Change background to green
       
    }

    if (resultText === "You Lose!") {
        document.body.style.backgroundColor = "#ff2c2c";  // Change background to green
       
    }

    if (resultText === "Draw!") {
        // Change background color to orange
        document.body.style.backgroundColor = "orange";
    
    
    
        // Set a timeout to change the background back to black after 250ms
        
    }


    
    document.getElementById("YouChose").innerText = userInput;

    const element = document.getElementById("YouChose");
    element.classList.remove("rock-bg", "paper-bg", "scissors-bg");

    
    
    // Add the appropriate background based on user choice
    if (userInput === "ROCK") {
        element.classList.add("rock-bg");
    } else if (userInput === "PAPER") {
        element.classList.add("paper-bg");
    } else if (userInput === "SCISSORS") {
        element.classList.add("scissors-bg");
    }

    
    
    // Ensure the result box styling is always applied
    element.classList.add("result-box");
    



    document.getElementById("ComputerChose").innerText = ComputerChoice;
    

    const elementComp = document.getElementById("ComputerChose");
    elementComp.classList.remove("rock-bg", "paper-bg", "scissors-bg")
   
    
    // Add the appropriate background based on user choice
    if (ComputerChoice === "ROCK") {
        elementComp.classList.add("rock-bg");
    } else if (ComputerChoice === "PAPER") {
        elementComp.classList.add("paper-bg");
    } else if (ComputerChoice === "SCISSORS") {
        elementComp.classList.add("scissors-bg");
    }
    
    // Ensure the result box styling is always applied
    elementComp.classList.add("result-box");




    
    document.getElementById('YourChoices').style.display = 'block';
    
    const compChoices = document.getElementById('CompChoices');
    
    compChoices.style.display = 'none';

    setTimeout(() => {
        document.getElementById('CompChoices').style.display = 'block';
    }, 500);



    const Result = document.getElementById("result").innerText = resultText;

    Result.style.display = 'none';

    setTimeout(() => {
        document.getElementById('result').style.display = 'block';
    }, 500);







    document.getElementById("humanScore").innerText = HumanScore;
    document.getElementById("computerScore").innerText = ComputerScore;


    if (HumanScore >= 3) {
        document.getElementById("result").innerText = "You have won the game!"; 
        PlayAgainButton.style.display = "block";
        document.body.style.backgroundColor = "#00ab41"


        
        
    } else if (ComputerScore >= 3) {
        document.getElementById("result").innerText = "The computer has won the game!"; 
        PlayAgainButton.style.display = "block";
        document.body.style.backgroundColor = "#c30010"
        
        
    }

}









const PlayAgainButton = document.querySelector("#PlayAgainButton");

PlayAgainButton.addEventListener('click', function() {

    document.body.style.backgroundColor = "black";
    document.body.style.border = "black";
    
    ComputerScore = 0;
    HumanScore = 0;
 
    PlayAgainButton.style.display = "none";
    result.style.display = "none";
    YourChoices.style.display= "none";
    CompChoices.style.display= "none";
    document.getElementById("humanScore").innerText = HumanScore;
    document.getElementById("computerScore").innerText = ComputerScore;

    document.getElementById('GameOver').textContent = "";  // Clear any game over message
    document.getElementById('result').textContent = "";  // Clear any round result message
});



document.querySelectorAll(".Manbutton, .button").forEach(button => {
    button.addEventListener("click", function () {
        // Remove 'focused' class from all buttons
        document.querySelectorAll(".Manbutton, .button").forEach(btn => btn.classList.remove("focused"));

        // Add 'focused' class to clicked button
        this.classList.add("focused");
    });
});




