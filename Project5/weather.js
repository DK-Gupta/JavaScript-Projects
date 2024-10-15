const Search = document.getElementById('Search')
const InputText = document.getElementById('InputText')

const CityName = document.getElementById('CityName')
const Temp = document.getElementById('Temp')

async function data(CityName){
    const result = await fetch( `https://api.weatherapi.com/v1/current.json?key=9b5c80aaf09e498b95b172935241510&q=${value}&aqi=yes`)
    console.log(result);
    return  await result.json();
}

Search.addEventListener("click",async ()=>{
    const value = InputText.value;
    const output = await data(value);
    CityName.innerText = `${output.location.name},${output.location.origin}`;
    Temp.innerText = Temp.current.temp_c;


})
