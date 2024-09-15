const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach( function(button){
    console.log(button);
    button.addEventListener("click", function(e){
        
        switch (e.target.id) {
            case e.target.id: body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
        
    })
} )
