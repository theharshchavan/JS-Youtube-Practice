let hex = '0123456789ABCDEF'
let randomVal
let demo

function changeColor(){
     randomVal = '#'
     for (let index = 0; index < 6; index++) {
          randomVal+= hex[Math.floor(Math.random()*16)];
     }
     document.querySelector('body').style.backgroundColor=randomVal
     
}

document.getElementById('start').addEventListener("click", function(){
     demo = setInterval(changeColor, 500)
})

document.getElementById('stop').addEventListener("click", function(){
     clearInterval(demo)
     demo=null
})
