var currentDay = $('#currentDay');
var currentDayDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');
var hourDisplay = $('.hour').valueOf();
var saveButtonEl =$('.saveBtn');
var eventDescription = $('.description');




//display the date and time on the page
var currentDayEl = document.createElement('p');
    currentDayEl.textContent = currentDayDisplay; 
    currentDay.append(currentDayDisplay);

//display the color based on past, present or future    
$('.description').each(function() {
    var timeBlock = $(this);
    var dataTime =parseInt($(this).attr("data-time"));

    

    var hours = moment().hours();
    console.log(dataTime, hours);
    
    if (dataTime === hours) {
        timeBlock.addClass('present');
        
    }
    else if (dataTime < hours) {
        timeBlock.addClass('past');
    }
    else if (dataTime > hours) { 
        timeBlock.addClass('future');
    }
});

 

//saveButtonEl.on('click', function(event) {
  //  event.preventDefault();
//});   
  // create user object from input
  //var taskText = {
    //taskText: eventDescription.value.trim(),
    
  //};

  // set new submission to local storage 
  //localStorage.setItem("taskText", JSON.stringify(taskText));
  

