var currentDay = document.getElementById('currentDay');
var currentDayDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');
var hourDisplay = getElementById('hour');
var saveButtonEl =$('.saveBtn');

//display the date and time on the page
var currentDayEl = document.createElement('p');
    currentDayEl.textContent = currentDayDisplay; 
    currentDay.append(currentDayDisplay);


saveButtonEl.on('click', function() {
    
})    
