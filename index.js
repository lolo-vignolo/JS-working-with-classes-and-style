

//Background 

let bgPlayer0 = document.querySelector(".player--0");
let bgPlayer1 =  document.querySelector(".player--1");
// current
const playerZero = document.querySelector("#current--0");
const playerOne = document.querySelector("#current--1")

//score
const scoreZero = document.querySelector("#score--0");
const scorerOne = document.querySelector("#score--1");

// dice

var diceValue = document.querySelector(".dice");

//buttons

const holdBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");



scoreZero.textContent=0;
scorerOne.textContent=0;
diceValue.classList.add("hidden");

//random Number

//const randomNumber = Math.trunc(Math.random()*6+1)


const scores = [0 , 0]
let currentScore = 0
let activePlayer = 0
let playing = true

const swichPlayer = () =>{
    document.getElementById (`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0

        
        document.querySelector(".player--0").classList.toggle("player--avtive");
     
        document.querySelector(".player--1").classList.toggle("player--avtive");

}



// listeners

rollBtn.addEventListener("click",

function(){
    if(playing){

        const randomNumber = Math.trunc(Math.random()*6)+1;
        console.log(randomNumber);
    
        diceValue.classList.remove("hidden");
        diceValue.src = `assets/dice-${randomNumber}.png`
    
    
        if(randomNumber !== 1){
            currentScore += randomNumber
            document.getElementById (`current--${activePlayer}`).textContent = currentScore
           
        }else{
        swichPlayer()
               
        }
    }
})

holdBtn.addEventListener("click", function (){

    scores[activePlayer] += currentScore
    
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] < 100){
        
        swichPlayer()

   


    }else{
        playing=false
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
    }

})


newGameBtn.addEventListener("click", function(){
    playing = true
    scores[0] = 0
    scores[1] = 0
    scoreZero.textContent = 0;
    scorerOne.textContent = 0;

    playerZero.textContent=0
    playerOne.textContent=0
    
    bgPlayer0.classList.remove("player--winner")
    bgPlayer1.classList.remove("player--winner")
})

