var currentDay = $('currentDay');
var currentDayDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');
var hourDisplay = $('.hour').valueOf();
var saveButtonEl =$('.saveBtn');
var hours = moment().hours();
var eventDescription = $('.description');




//display the date and time on the page
var currentDayEl = document.createElement('p');
    currentDayEl.textContent = currentDayDisplay; 
    currentDay.append(currentDayDisplay);

//display the color based on past, present or future    
function colorDisplay() {
    var timeBlock = $('time-block');
    console.log(hourDisplay);
    
    if (hourDisplay === hours) {
        timeBlock.classList.add('present');
        
    }
    else if (hourDisplay.value < hours) {
        timeBlock.classList.add('past');
    }
    else if(hourDisplay.value > hours) { 
        timeBlock.classList.add('future');
    }
}

colorDisplay();    

saveButtonEl.on('click', function(event) {
    event.preventDefault();
});   
  // create user object from input
  var taskText = {
    taskText: eventDescription.value.trim(),
    
  };

  // set new submission to local storage 
  localStorage.setItem("taskText", JSON.stringify(taskText));
  

