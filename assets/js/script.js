//Current Day Display
var presentDay = moment().format('LLL');
$("#currentDay").append(presentDay);
//Don't see the difference between append and text

//Save Button Click
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //Store Area
    localStorage.setItem(time, value);
});