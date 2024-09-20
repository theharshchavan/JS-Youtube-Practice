const jokeUrl = 'https://official-joke-api.appspot.com/random_joke'
const joke = document.getElementById('joke')
const button = document.getElementById('getbtn')

button.addEventListener("click", ()=> {
    fetch(jokeUrl).then(function(data){  
        return data.json()
        
    }).then(function(data){
        joke.innerHTML=`${data.setup}`
        
    }).catch(function(error){
        console.log(error);
        
    })
})