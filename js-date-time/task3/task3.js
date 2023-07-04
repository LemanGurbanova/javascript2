let now = new Date();
let christmasDate = new Date("January 1, 2024 00:00")
//let difference =  now.getDay() - christmasDate.getDay();
//console.log(Math.floor(difference));
let daysLeft = Math.ceil(
    (christmasDate.getDay() - now.getDay()) 
 );
 console.log(daysLeft);