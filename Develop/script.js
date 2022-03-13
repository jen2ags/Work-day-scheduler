var currentDay = $('#currentDay');
var currentDayDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');
var hourDisplay = $('.hour').valueOf();
var saveButtonEl =$('.saveBtn');
var eventTask = $('.task');




//display the date and time on the page
var currentDayEl = document.createElement('p');
    currentDayEl.textContent = currentDayDisplay; 
    currentDay.append(currentDayDisplay);

//display the color based on past, present or future    
$('.description').each(function() {
    var timeBlock = $(this);
    var dataTime =parseInt($(this).attr("data-time"));

    
//if the time is equal, greater or less than the dataTime, the corresponding colors will display
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

//values and time will be stored in localStorage
function store() {
    var value = $(this).siblings('.description').val();
        var time = $(this).siblings('.description').attr('data-time');
        localStorage.setItem(time, value);

}
//button to save the items into localStorage when clicked
saveButtonEl.on('click', store);


//pull items from localStorage when the browser is refreshed
var getStoredItem =function() {
$('#8').text(localStorage.getItem('8'));
$('#9').text(localStorage.getItem('9'));
$('#10').text(localStorage.getItem('10'));
$('#11').text(localStorage.getItem('11'));
$('#12').text(localStorage.getItem('12'));
$('#13').text(localStorage.getItem('13'));
$('#14').text(localStorage.getItem('14'));
$('#15').text(localStorage.getItem('15'));
$('#16').text(localStorage.getItem('16'));
$('#17').text(localStorage.getItem('17'));
};

getStoredItem();
