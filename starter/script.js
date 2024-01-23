console.log('js connected');

// * Display the current day at the top of the calender when a user opens the planner.
 
var currentDate = dayjs().format('DD.MM.YYYY HH:mm:ss')

var dayEl = $("#currentDay")

dayEl.append(currentDate).css({
    'font-size': '30px',
    'color' : "grey",
    'font-weight': 'bold'
});;

// * Present timeblocks for standard business hours when the user scrolls down.

var currentTime = dayjs().format('ha');
var hoursArray = [
   '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'  
]

for (let i = 0; i < hoursArray.length; i++) {

    //created timeblockEl
    var timeblockEl = $('<div>Timeblock</div>').addClass('timeblock').css({
        'background-color': 'grey',
        'height': '70px',
        'padding': '10px',
        'border-radius': '15px',
        'margin': '5px'
    });

    //creates a unique timeblock for each hour in the array
    timeblockEl.attr("data-letter", hoursArray[i]);

    //appends each hour to the timeblock
    timeblockEl.text(hoursArray[i]);

    //appends timeblocks to container
    
    // * Color-code each timeblock based on past, present, and future when the timeblock is viewed.

    if (timeblockEl.attr('data-letter') === currentTime) {
        timeblockEl.css({  
            'background-color': '#ff6961',
            'color': 'white'
        }); 
    } else {
        timeblockEl.css({
            'background-color': '#77dd77'
        }); 
    }

    $('.container').append(timeblockEl);

}

// * Allow a user to enter an event when they click a timeblock

$('.timeblock').on('click', function(event) {

    event.preventDefault()

    if ($(this).find('form').length === 0) {
        // Create an input field and append it to the time block
        var inputField = $('<input type="text" placeholder="Event Name">');
        var form = $('<form>').append(inputField);
        form.css({
            'padding': '5px'
        })
        $(this).append(form);

        // Show the form
        form.show();
    }
})

// * Save the event in local storage when the save button is clicked in that timeblock.





// * Persist events between refreshes of a page
