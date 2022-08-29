// start button starts timer 
// start button starts game score 
// start button starts ba


// GAME TIMER

// random height start - it works 
let changeHeight = []

for (let i = 20; i < 100; i += 5) {
    changeHeight.push(i + "px")
}
console.log(changeHeight)

const random = Math.floor(Math.random() * changeHeight.length);
console.log(changeHeight[random]);

// random height end 



// let timeleft = 10;
let score = 0;
let highscore = []
let height = document.getElementById("gameBoard").style.height;


let button = document.getElementById("startButton").addEventListener("click", buttonClick);
let gameBoard1 = document.getElementById("gameBoard").addEventListener("click", gameboardClick);

let HIGHSCORE = document.querySelector(".highScore").innerHTML;
let GAMESCORE = () => { document.querySelector(".gameScore").innerHTML; }

console.log(HIGHSCORE)




function gameboardClick(e) {
    // console.log("gameboard works");
    document.querySelector('.gameScore').innerHTML = score;
    document.querySelector('.highScore').innerHTML = score++;
    console.log(document.querySelector('.gameScore').innerHTML)


    // bug change gameboard height w each click not working 
    document.getElementById("gameBoard").style.height = changeHeight[random];
    // "200px";
    // console.log(height);
    // console.log(changeHeight[random]);


    document.getElementById("gameBoard").style.backgroundColor =
        "rgb(" + e.offsetX + "," + e.offsetY + ",128)"

}




//  CHANGE HIGH SCORE


// THIS IS WHAT THE BUTTON DOES 

function buttonClick() {
    timeleft = 5
        // PROOF BUTTON WORKS
    console.log("button clicked");
    document.querySelector('.gameScore').innerHTML = (score = 0);

    // THIS MAKES THE TIMER START 
    let downloadTimer = setInterval(function() {
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft === 0) {
            clearInterval(downloadTimer);
            console.log(HIGHSCORE)

            console.log('');
            // this makes countdown timer say game over when it reaches zero 
            document.querySelector('.countDown').innerHTML = "GAME OVER";
        }
        // if (timeleft === 0) {


    }, 1000);












}

// THIS MAKES THE BUTTON DISSAPEAR WHEN THE TIMER STARTS 

// if (timeleft !== 5) {
//     console.log("time =10");
//     document.getElementById('startButton').style.visibility = "hidden";
// }
// if (timeleft === 0) {
//     gameboardClick;
//     console.log("timeleft works")
// } else {
//     console.log('no more time')
// }

const NUMBER = "words"

console.log(typeof NUMBER)