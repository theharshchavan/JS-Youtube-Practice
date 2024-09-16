const randomValue = parseInt((Math.random()*100)+1)

const submit = document.getElementById('subt')
const inputValue = document.getElementById('inputGuess')
const preGuess = document.querySelector('.guesses')
const remGuess = document.querySelector('.lastResult')
const lowHig = document.querySelector('.lowOrHi')

let playgame=true
let guessList = []
let guessCounter = 1
const btn = document.createElement('button')

if(playgame){

    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = inputValue.value
        validateGuess(guess)
    })

    // ------- Validate Guess --------
    function validateGuess(guess){
        if(isNaN(guess) || guess ===''){
            alert(`Enter Valid Number`)
        } else if(guess < 0 || guess > 100){
            alert(`Enter Valid Number`)
        } else {
            guessList.push(guess)
            if(guessCounter === 11){
                displayGuess(guess)
                displayMsg('Game is Over')
                endGame()
            }else{
                checkGuess(guess)
                displayGuess(guessCounter)
            }

        }
    }

    // --------- Display Guess ---------
    function displayGuess(counter){
        //inputValue.value=''
        preGuess.innerHTML=`${guessList},`
        remGuess.innerHTML=`${11-counter}`
        guessCounter++
    }

    // --------- Check Guess ----------
    function checkGuess(guess){
        if(guess === randomValue){
            displayMsg('Number is matched')
        }else if(guess < randomValue){
            displayMsg('Number is to small')
        }else{
            displayMsg('Number is to big')
        }
    }

    // ------------ Display message -------
    function displayMsg(msg){
        lowHig.innerHTML=`<h2>${msg}</h2>`
    }

    // ------- End Game --------
    function endGame(){
        inputValue.value = ''
        remGuess.innerHTML='0'
        inputValue.setAttribute('Disabled','')
        btn.textContent=`restart game`
        document.querySelector('.resultParas').appendChild(btn)
        playgame=false
        newGame()
    }

    // ----------- New Game ------------
    function newGame(){
        btn.addEventListener("click", function(){
            randomValue = parseInt((Math.random()*100)+1)
            document.querySelector('.resultParas').removeChild(p)
            inputValue.removeAttribute("Disabled")
            inputValue.value=''
            preGuess=[]
            remGuess.innerHTML='10'
            lowHig.innerHTML=''
            guessCounter=1 
            playgame=true
        })
    }
}
