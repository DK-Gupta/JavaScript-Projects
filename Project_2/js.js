const form = document.querySelector('form');
console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height==='' || height <0 || isNaN(height)){
        result.innerHTML = `Please give a valid Height ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please give a valid Weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI i: ${bmi}</span>`;
    }

})