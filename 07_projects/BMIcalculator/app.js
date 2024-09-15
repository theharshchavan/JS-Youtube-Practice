const form = document.querySelector('form')

form.addEventListener("submit", function(e){
    e.preventDefault()

    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const result = document.getElementById('results')
    const msg = document.getElementById('msg')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`
        msg.innerHTML = ''
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid height ${weight}`
        msg.innerHTML = ''
    } else {
        const value = (weight / (height*height/ 10000)).toFixed(2)
        result.innerHTML = `<span>${value}</span>`
        msg.innerHTML = ''
    
        
        

        if(value < 18.6){
            msg.innerHTML = `under weight`
        } else if(value > 18.6 && value < 24.9){
            msg.innerHTML = `Normal range`
        } else if(value > 24.9){
            msg.innerHTML = `Overweight`
        }

    }
})