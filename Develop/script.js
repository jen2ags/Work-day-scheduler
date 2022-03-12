var currentDay = document.getElementById('currentDay');
var currentDayDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');

//display the date and time on the page
var currentDayEl = document.createElement('p');
    currentDayEl.textContent = currentDayDisplay; 
    currentDay.append(currentDayDisplay);


    

