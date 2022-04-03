// WHEN I open the planner THEN the current day is displayed at the top of the calendar

// reference #currentDay, add moment().format('MMMM Do YYYY, h:mm:ss a');, display it
let todayDate = moment().format('MMMM D, YYYY');
$("#currentDay").html(todayDate);

// WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future

var timeTracker = function () {
    // get current hour
    var currentTime = moment().hour(); // military time; 20HR
    
    // loop time block
    $(".description").each(function () {
        var blockTime = ($(this).attr("id")); // target textarea's id

        // ...check IF the block is less than or greater than the current time
        if (blockTime < currentTime) { // ...if block is less than current time; change color to gray
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime > currentTime) {// ...if block is greater than current time; change color to green
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {// ...otherwise, currentTime is present; change color to red
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
    })
};

// save button event listener
$(".saveBtn").on("click", function() {

    // get value of description, and the item ID to create a key value pair
    var descriptionVal = $(this).siblings(".description").val();
    var timeKey = $(this).siblings(".description").attr("id");

    // save to localStorage; timeKey (Key), descriptionVal (Value); key value pairs
    localStorage.setItem(timeKey, descriptionVal);
})

timeTracker();