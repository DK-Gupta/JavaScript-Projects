const Search = document.getElementById('Search')
const InputText = document.getElementById('InputText')

const CityName = document.getElementById('CityName')
const Temp = document.getElementById('Temp')

async function data(Cityname){
    const result = await fetch( `https://api.weatherapi.com/v1/current.json?key=9b5c80aaf09e498b95b172935241510&q=${Cityname}&aqi=yes`)
    
    return  await result.json();
};

Search.addEventListener("click",async ()=>{
    const value = InputText.value;
    const output = await data(value);
    CityName.innerText = `${output.location.name},${output.location.country}`;
    Temp.innerText = output.current.temp_f;


});
