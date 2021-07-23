var presentDay = moment().format('LLL');
$("#currentDay").append(presentDay);

$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

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

function hourNow() {
    var presentHour = moment().hour();

    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hr")[1]);

        if (blockHour < presentHour) {
            $(this).addClass("past");
        }

        else if (blockHour === presentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }

        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourNow();