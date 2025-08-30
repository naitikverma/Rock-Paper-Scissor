let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");    
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock paper scissors 
    //genrate random number
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}
const msg = document.querySelector(" #msg");
const DrawGame = () => {
    console.log("draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "black";
};

const showwinner = (userwin,userChoice,computerChoice) => {
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;
        console.log("user win");
        msg.innerText = "You won!";
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerscorepara.innerText = computerScore;
        console.log("computer win");
        msg.innerText = "You lost";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    console.log("comp = "+computerChoice);
    console.log("user = "+userChoice);

    if(userChoice === computerChoice){
        DrawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = computerChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            userwin = computerChoice === "scissors"? false : true;
        }else{
            userwin = computerChoice === "rock"? false : true;
        }
        showwinner(userwin,userChoice,computerChoice);
    }
};

choices.forEach(choice => {
  choice.addEventListener('click',()=>{
    const userChoice = choice.getAttribute("id")
    playGame(userChoice);
  });
});