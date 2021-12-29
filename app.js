const newDate = "1 Jan 2024";

function countdown(){
    const userDate = new Date(newDate);
    const currentDate = new Date();

    let totalSeconds = Math.floor((userDate - currentDate) / 1000);

    let months = Math.floor(((totalSeconds/3600)/24)/12);
    document.getElementById("months").innerHTML = months;

    let days = Math.floor(totalSeconds / 3600 / 24) ;
    document.getElementById("days").innerHTML = days;
    
    let hours = Math.floor(totalSeconds/3600) % 24;
    document.getElementById("hours").innerHTML = hours;
    
    let minutes = (Math.floor(totalSeconds/60) % 60);
    document.getElementById("minutes").innerHTML = minutes;
    
    let seconds = Math.floor(totalSeconds % 60);
    document.getElementById("seconds").innerHTML = seconds;
}
document.addEventListener("load",setInterval(countdown,1000));
