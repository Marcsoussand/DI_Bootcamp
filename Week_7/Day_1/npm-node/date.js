function timeSpent() {
    let currentMoment = new Date();
    let month = currentMoment.getMonth();
    let day = currentMoment.getDate();
    let hours = currentMoment.getHours();
    let minutes = currentMoment.getMinutes();
    let response = "The 1st January is in ";
    if (month <=11) {
        let monthLeft = 11-month;
        response +=monthLeft+" months, ";
    } 
    let dayLeft = 31-day;
    response += dayLeft+" days, ";
    let timeLeft = 24-hours;
    response += timeLeft+" hours and ";
    let minutesLeft = 60-minutes;
    response +=minutesLeft+" seconds";

 return response;
    
}

console.log(timeSpent());