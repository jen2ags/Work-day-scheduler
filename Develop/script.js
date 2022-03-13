var currentDay = document.getElementById('currentDay');
var currentDayDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');
var hourDisplay = $('.hour');
var saveButtonEl =$('.saveBtn');
var hours = moment().hours();



//display the date and time on the page
var currentDayEl = document.createElement('p');
    currentDayEl.textContent = currentDayDisplay; 
    currentDay.append(currentDayDisplay);

function timeBlock() {
    
    if (hourDisplay === hours) {
        console.log('present');
    }
    else if (hourDisplay < hours) {
        console.log('past');
    }
    else  { 
        console.log('future');
    }
}
    


saveButtonEl.on('click', function() {

})    
