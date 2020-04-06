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

//Targetting the section for the userinput 
var timeTextArea= document.getElementsByClassName("col-8 input")
console.log(timeTextArea)

var userEvent; 

if (localStorage.getItem("data")){
    userEvent = localStorage.getItem("data")
}else{
    localStorage.setItem("data", JSON.stringify(timeTextArea));
    userEvent = localStorage.getItem("data")
}

//Saving the data in local storage using the save button 
$('.save').on("click", function() {
    var userEvent = localStorage.getItem("data") //ls reassigns whatever the data is 
    console.log(JSON.parse(userEvent))//the computer converts the string of the item in storage back to an object which is stored in the variable ls 
    userEvent= JSON.parse(userEvent) // then ls is reassigned back to a regular object rather than the string version of the object 
    userEvent.arr.push('4') //push that into the array index ('4')? 
    var desiredHour = $('this').attr("col-8 input")  /// we want hour 9 to save
    userEvent["hour-" + desiredHour] = textInThatHourArea //I am lost here. 

    localStorage.setItem("data", JSON.stringify(timeTextArea)) //then the item is set back into local storage converted into a string and stored within the time block

})


