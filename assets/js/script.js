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

$("#hr9 .description").val(localStorage.getItem(""));
$("#hr10 .description").val(localStorage.getItem(""));
$("#hr11 .description").val(localStorage.getItem(""));
$("#hr12 .description").val(localStorage.getItem(""));
$("#hr1 .description").val(localStorage.getItem(""));
$("#hr2 .description").val(localStorage.getItem(""));
$("#hr3 .description").val(localStorage.getItem(""));
$("#hr4 .description").val(localStorage.getItem(""));
$("#hr5 .description").val(localStorage.getItem(""));