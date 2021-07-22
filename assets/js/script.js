//Current Day Display
var presentDay = moment().format('LLL');
$("#currentDay").append(presentDay);
//Don't see the difference between append and text