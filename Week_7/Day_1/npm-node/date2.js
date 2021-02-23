let birthday = new Date(1983,8,16,20,30);

function lifeTime(d) {
let now = new Date();

let timeSpent = new Date(now.getTime() - d.getTime());
minutes = Math.floor(timeSpent/1000);

// let years = timeSpent.getUTCFullYear()-1970;
// let months = timeSpent.getUTCMonth();
// let days = timeSpent.getUTCDate()-1;
// let minutes 
return "You already lived : "+minutes+" minutes in your life";
    
}

module.exports = {
    life: lifeTime(birthday)
}

// console.log(lifeTime(birthday));