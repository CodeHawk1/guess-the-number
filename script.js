// Element Initilazation
let inputBox = document.querySelector("#input-box")
let hint = document.querySelector("#hint")
hint.innerHTML = ""

// Generate Random Number
let num = Math.floor(Math.random()*100) + 1
let turn = 10
let isGameOver = false

document.querySelector("#check").addEventListener("click", submit)
document.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        e.preventDefault()
        submit()
    }
})


function submit(){
    let enteredNum = parseInt(inputBox.value.toString())
    if(enteredNum === 12356){
        alert(num)
        inputBox.value = ""
    }
    else if(enteredNum>=1 && enteredNum<=100 && !isGameOver){
        if(enteredNum<num){
            hint.innerHTML = "Your guess " + enteredNum +" is too low"
        }
        else if(enteredNum>num){
            hint.innerHTML = "Your guess " + enteredNum +" is too high"
        }
        else{
            hint.innerHTML = "Correct answer !"
            isGameOver = true
            document.querySelector("#play-again").style.display = "block"
        }
        inputBox.value = ""
        turn--
        cheakTurn();
    }
    else if(!isGameOver){
        hint.innerHTML = "Plese enter a valid number"
    }
}

function cheakTurn(){
    if(turn <= 0){
        hint.innerHTML = "You loose !"
        gameOver()
    }
}

function gameOver(){
    document.querySelector("#play-again").style.display = "block"
    isGameOver = true
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    num = Math.floor(Math.random()*100) + 1
    turn = 10
    hint.innerHTML = ""
    document.querySelector("#play-again").style.display = "none"
    inputBox.value = ""
})