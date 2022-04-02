// WHEN I open the planner THEN the current day is displayed at the top of the calendar

// reference #currentDay, add moment().format('MMMM Do YYYY, h:mm:ss a');, display it
const timeStamp = function() {
    let date = moment().format('MMMM Do YYYY');
    currentDayEl.textContent = date;
};

//
// reference .container, create list, apply 9am to 5pm
/* const displayTimeBlocks = function (routine, description) { // create time?
    var createRow = $("<div>") // parent
        .addClass("row");

    var timeBlock = $("<p>") // child 1 // create timeblock
        .addClass("time-block")
        .text(routine);
    
    var eventDescription = $("<p>") // child 2 // create description next to timeblock
        .addClass("description")
        .text(description);
    
    // append two children to parent
    createRow.append(timeBlock, eventDescription);
    console.log(createRow);

    // append parent to HTML reference
    createRow.append(timeBlocksEl);
}; */

//references
const currentDayEl = document.querySelector("#currentDay");
const timeBlocksEl = document.querySelector(".container");

timeStamp();