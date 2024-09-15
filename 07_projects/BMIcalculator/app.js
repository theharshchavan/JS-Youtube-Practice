const form = document.querySelector('form')

form.addEventListener("submit", function(e){
    e.preventDefault()

    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const result = document.getElementById('results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid height ${weight}`
    } else {
        const value = (weight / (height*height/ 10000)).toFixed(2)
        result.innerHTML = `<span>${value}</span>`

        if(value < 18.6){
            const msg = document.getElementById('msg')
            msg.innerHTML = `under weight`
        } else if(value > 18.6 && value < 24.9){
            msg.innerHTML = `Normal range`
        } else if(value > 24.9){
            msg.innerHTML = `Overweight`
        }

    }
})