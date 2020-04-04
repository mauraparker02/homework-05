//PSEUDO CODE 

//What's Given: 
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event 
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//Things Needing functionality 
    //Current day needs to be grabbed from the users browser window object? 
    //the data can be stored with .text to replace under an <h1> html? 
    //need to be able to store text user inputs in the planner 
        //* save on local browser 
        //* use a preventDefault() function so this information STAYS stored?? 
    //Color changes on the hour 
        //* passed: hours that have passed are greyed out 
        //* present: hour on should show up green 
        //* future?: hour late for things should be in red? 
    //event listeners for save buttons 
    //create text for save button 


//WHEN made to show current date/time for user at the top of the screen 
//https://momentjs.com/ using the moment function but very confused where it's pulling the data from? 

var when= moment();

//here is jquery dynamically replacing text & formating it for #currentDay ID with moment(); function 
$("#currentDay").text(when.format("dddd, MMMM Do"));

//Searching for how moment is grabbing data from user
console.log(window); 
console.log(when.format("dddd, MMMM do"));

//Saving event when saved button is clicked to button testing on #9 
function getUserEvent() {
var nineInput= document.getElementById("9").value; 

document.write("this is a test"); 
}
  //retrieve saved values in local storage
  var saveEvent = localStorage.getItem("event");
  $(".event-input").text(saveEvent);

