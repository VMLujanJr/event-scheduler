// WHEN I open the planner THEN the current day is displayed at the top of the calendar

// reference #currentDay, add moment().format('MMMM Do YYYY, h:mm:ss a');, display it

const timeStamp = function () {
    let date = moment().format('MMMM Do YYYY');
    currentDayEl.textContent = date;
};

const currentDayEl = document.querySelector("#currentDay");

timeStamp();