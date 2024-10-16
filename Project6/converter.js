const input = document.getElementById('input');
const currencyis = document.getElementById('currencyis');
const currencyto = document.getElementById('currencyto');
const button = document.getElementById('Convert');
const result = document.getElementById('return')

async function converter(curn){
    const url = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_8noxYDUq9nRzAF4OAp7Is4hj7sWczbv0ci25xuEo&currencies=EUR%2CUSD%2CCAD%2CINR&base_currency=${curn}`)
    return await url.json();
}
button.addEventListener("click", async ()=>{
    const value = input.value;
    const CurrencyIs = currencyis.value;
    const CurrencyTo = currencyto.value;

    if(!value){
        result.innerText("Please enter the valid amount");
        return;
    }
    try{
        const data = await converter(CurrencyIs);

        const rate = data.data[CurrencyTo];
        if(rate){
            const convertedAmount=(value*rate).toFixed(2);
            result.innerText= `${value} ${CurrencyIs} is equal to ${convertedAmount} ${CurrencyTo}`;
        }
        else{
            result.innerText =`Currency conversion is not available`;
        }

    }
    catch(error){
        
        result.innerText = 'Error converting currency. Please try again.';

    }
    
});




