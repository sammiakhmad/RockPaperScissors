let RPS = ['Rock','Paper','Scissors']

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice(){
    let CompChoice = getRndInteger(0,2)
    return RPS[CompChoice]
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        return [0,0,"It's a Draw"]
    } else if (playerSelection.toLowerCase()==='rock'){
        if (computerSelection==='Paper'){
            return [0,1,"You Lose! Paper beats Rock"]
        } else return [1,0,"You Win! Rock beats Scissors"]
    } else if (playerSelection.toLowerCase()==='paper'){
        if (computerSelection==='Scissors'){
            return [0,1,"You Lose! Scissors beats Paper"]
        } else return [1,0,"You Win! Paper beats Rock"]
    } else if (computerSelection==='Rock'){
        return [0,1,"You Lose! Rock beats Scissors"]
    } else return [1,0,"You Win! Scissors beats Paper"]
}

function playGame(){

    let userCounter = 0
    let compCounter = 0
    
    for (let i=1; i<=5;i++){
        console.log('Round '+i)
        let userInput = prompt("What is your choice for this round ?")
        let compChoice = getComputerChoice()
        let result = playRound(userInput, compChoice)
        console.log(result[2])
        userCounter+=result[0]
        compCounter+=result[1]
        console.log("Score")
        console.log("User :"+userCounter)
        console.log("Computer :"+compCounter)
    }

    if (userCounter===compCounter){
        console.log("There is no winner, It's a Draw")
    } else if (userCounter<compCounter){
        console.log("The Winner is Computer")
    } else console.log("The Winner is User")

}

playGame()