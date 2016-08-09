//declare an event for a button1 to function 

var event1= document.getElementById("button1");

//declare a function for button1
event1= addEventListener('click',displayTimeAndDate,false); 

function displayTimeAndDate() {
    var day = "";
//create a new date object 
    var today = new Date(); 
    
    //make a switch from 0-6
 switch (today.getDay()) {
         
     case 0: 
         day = "Sunday";
         break;
     case 1: 
         day = "Monday";
         break;
     case 2: 
         day = "Tuesday";
         break;
     case 3:
         day = "Wednesday";
         break;
     case 4:
         day = "Thursday";
         break;
     case 5:
         day = "Friday";
         break;
     case 6:
         day = "Saturday";    
 }
 //get the time displayed 
var hours = today.getHours();
var minutes = today.getMinutes();
var time = hours + ":" + minutes;
    
//show the time 
    document.getElementById("result").innerHTML = "It's " + day + " and the time is " + time; 
}
