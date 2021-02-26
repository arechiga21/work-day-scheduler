var currentDay = moment().format('dddd MMMM Do');
var momentId = document.getElementById('currentDay');
momentId.innerHTML = currentDay;

function timeBlockColor(){
    $(".time-block").each(function(){

      if (parseInt($(this).attr("data-hour")) == moment().format("H")) {
        $(this).addClass("present").removeClass("past future");
      }
      if (parseInt($(this).attr("data-hour")) < moment().format("H")) {
        $(this).addClass("past").removeClass("present future");
      }
      if (parseInt($(this).attr("data-hour")) > moment().format("H")) {
        $(this).addClass("future").removeClass("past present");
      }
    });
}

timeBlockColor()
