const providedDate = document.getElementById("inputDate");
const formEl = document.getElementById("form");
formEl.addEventListener('submit',(e)=> {
    e.preventDefault();
    const supplyDate = providedDate.value;
    formateDate(supplyDate);
});
// form.addEventListener("submit",setInterval(countdown,1000));
function formateDate(newDate){

    let formattedDate = new Date(newDate);
    
    let day = formattedDate.getDay();
    let month = formattedDate.getMonth();
    let year =  formattedDate.getFullYear();
    
    const inputDate = `${day+1} ${month+1} ${year}`;
    countdown(inputDate);
}
// const newDate = "1 Jan 2024";
function countdown(inputDate){
    const userDate = new Date(inputDate);
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

