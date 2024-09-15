const randomNum = parseInt(Math.random()*100+1)

const guessInput = document.getElementById('guessField')
const submit = document.getElementById('subt')
const previousguess = document.getElementsByClassName('guesses')
const remaining = document.getElementsByClassName('lastResult')
const lohi = document.getElementsByClassName('lowOrHi')
const start = document.getElementsByClassName('resultParas')