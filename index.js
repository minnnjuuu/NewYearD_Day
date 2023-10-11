const day = document.querySelector(".daynumber")
const hour = document.querySelector(".hournumber")
const min = document.querySelector(".minnumber")
const second = document.querySelector(".secondnumber")
console.log(day)
const newYear = "1 Jan 2024"
function Countdown(){
    const newYearDate = new Date(newYear)
    const currentDate = new Date()   
    const totalseconds = (newYearDate-currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;
    day.innerHTML = days;
    hour.innerHTML = hours;    
    min.innerHTML = minutes;
    Ten_count(seconds);
}
function Ten_count(seconds){
    if (seconds<=10){
        second.style.color='red';
        second.innerHTML = seconds;
    }
    else{
        second.innerHTML = seconds;
        second.style.color ='black';

    }
}
Countdown()
setInterval(Countdown,1000)