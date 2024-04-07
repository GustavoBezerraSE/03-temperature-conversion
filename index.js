
const temperature = document.getElementById('temperature');
const Celsius = document.getElementById('toFahrenheit');
const Fahrenheit = document.getElementById('toCelsius');
const resultP = document.getElementById('result');
let temp;

function convert(){
    console.log(Fahrenheit.checked);
    console.log(Celsius.checked);
    if(temperature.value === ""){
        resultP.textContent = "Please enter a temperature";
        return;
    }
    if(Celsius.checked){
        temp = Number(temperature.value); 
        temp = temp * 9/5 + 32;
        resultP.textContent = temp.toFixed(1) + "°F";
    } else if(Fahrenheit.checked){
        temp = Number(temperature.value);
        temp = (temp - 32) * 5/9;
        resultP.textContent = temp.toFixed(1) + "°C";
    } else {
        resultP.textContent = "Please select a unit";
        return;
    }
}