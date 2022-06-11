const time = document.getElementById("current-time");
const welcomeMessage = document.getElementById("welcome-message");

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
        welcomeMessage.textContent("Good Afternoon Isaac!");
    }
    else{
        welcomeMessage.textContent("Good Morning Isaac!");
    }
}, 1000);

//add weather api, then add https://codepen.io/mgkOV/pen/qzNegg
//weather effect depending on cold, warm, or rain
//add to github pages