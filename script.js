const time = document.getElementById("current-time");
const welcomeMessage = document.getElementById("welcome-message");
const apiKey = 'd6d161bb9d1040aa8cd75119221106';
const weatherMessage = document.getElementById('weather');
const weatherIcon = document.getElementById('weather-icon');
//read only API key

let currentWeather = '';
let updatedTime = '';

setInterval(() =>{
    let currentTime = new Date(); 
    updatedTime = `${currentTime.getHours()}` + ':' + `${currentTime.getMinutes()<10?'0':''}` + `${currentTime.getMinutes()}` + 
    ':' + `${currentTime.getSeconds()<10?'0':''}` + `${currentTime.getSeconds()}`;
    time.textContent = updatedTime;
    if(currentTime.getHours() >= 15){
        welcomeMessage.textContent = "Good Evening Isaac!"
    }
    else if(currentTime.getHours() > 11){
        welcomeMessage.textContent = "Good Afternoon Isaac!";
    }
    else{
        welcomeMessage.textContent = "Good Morning Isaac!";
    }
}, 1000);

async function getWeather(){
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Sydney`);
        currentWeather = await response.json();
        console.log(currentWeather);
        console.log(currentWeather.current.condition.text);
        weatherMessage.textContent = currentWeather.current.condition.text + ' ' + currentWeather.current.temp_c + 'C';
        
        weatherIcon.setAttribute('src', `https:${currentWeather.current.condition.icon}`);
        weatherMessage.appendChild(weatherIcon);
    }
    catch{
        console.log(error);
    }
}

getWeather();