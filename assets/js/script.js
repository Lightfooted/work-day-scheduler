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

$("#hr9 .description").val(localStorage.getItem("hr9"));
$("#hr10 .description").val(localStorage.getItem("hr10"));
$("#hr11 .description").val(localStorage.getItem("hr11"));
$("#hr12 .description").val(localStorage.getItem("hr12"));
$("#hr1 .description").val(localStorage.getItem("hr1"));
$("#hr2 .description").val(localStorage.getItem("hr2"));
$("#hr3 .description").val(localStorage.getItem("hr3"));
$("#hr4 .description").val(localStorage.getItem("hr4"));
$("#hr5 .description").val(localStorage.getItem("hr5"));