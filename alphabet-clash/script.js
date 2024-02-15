const home = document.querySelector(".home"),
    playbtn = document.querySelector(".playbtn"),
    playground = document.querySelector(".play-ground"),
    output = document.querySelector(".output"),
    keyboard = document.querySelector(".keyboard"),
    scorePoint = document.querySelector(".scorePoint"),
    scorePage = document.querySelector(".score-page"),
    life = document.querySelector(".life"),
    value = document.querySelector("#value"),
    playAgainbtn = document.querySelector(".playAgain")


let totalScore = 0;
let totalLife = 5;

function addBackGroundColor(elm) {
    const id = document.querySelector(`#${elm}`)
    id.style.backgroundColor = "orange"
}
function removeBackGroundColor(elm) {
    const id = document.querySelector(`#${elm}`)
    id.style.backgroundColor = "white"
}

function handleKeyboard(event) {
    const playerPress = event.key.toUpperCase()
    
    if (playerPress === output.innerHTML) {
        removeBackGroundColor(playerPress.toLowerCase())
        gameStart()
        let currentScore = scorePoint.innerHTML
        currentScore++
        scorePoint.innerHTML = currentScore
        totalScore = currentScore
    } else  {
        let currentScore = life.innerHTML
        gameover(currentScore)
        currentScore--
        life.innerHTML = currentScore
    }

}
document.addEventListener("keyup", handleKeyboard)

function gameover(currentScore) {
    if (currentScore == 0) {
        playground.classList.add("hidden");
        scorePage.classList.remove("hidden");
        value.innerHTML = totalScore
    }
}


playAgainbtn.addEventListener("click", () => {
    scorePage.classList.add("hidden");
    playground.classList.remove("hidden");
    life.innerHTML = totalLife
    scorePoint.innerHTML = 0
})

function gameStart() {
    const alfphabet = "abcdefghijklmnopqrstuvwxyz"
    const alfabetArray = alfphabet.split("")

    const random = Math.round(Math.random() * alfabetArray.length)
    output.innerHTML = alfabetArray[random].toUpperCase()

    addBackGroundColor(alfabetArray[random])
}
function play() {

    playbtn.addEventListener("click", () => {
        home.classList.add("hidden");
        playground.classList.remove("hidden");
    })

    gameStart()
}

play()