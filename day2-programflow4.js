//declare an event for a button1 to function 

var event1= document.getElementById("button1");

//declare a function for button1
event1= addEventListener('click',displayLoop,false); 

//decalare a function 

function displayLoop() {
var showLoop= "";

for (i=1; i<=50; i++) 
{
    showLoop += i + "<br>";
    
    document.getElementById("result").innerHTML = showLoop;
    
      }
}
