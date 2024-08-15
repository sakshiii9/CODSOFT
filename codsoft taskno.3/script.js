let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

setInterval(() =>{
    let presentTime = new Date();

hours.innerHTML = (presentTime.getHours() < 10? "0" : "") + presentTime.getHours();
minutes.innerHTML = (presentTime.getMinutes() < 10? "0" : "") + presentTime.getMinutes();
seconds.innerHTML = (presentTime.getSeconds() < 10? "0" : "") + presentTime.getSeconds();

})