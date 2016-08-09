//Program flow - ex 8 -  Create a nested loop that displays two sequences of numbers from 1-10, with one sequence nested inside the other 
//declare an event for a button1 to function 

var event1= document.getElementById("button1");

//declare a function for button1
event1= addEventListener('click',nestedLoop,false); 
 
function nestedLoop() {
 var output= "";
    
//outer loop and run it 10 times    
    for (var i = 0; i < 10; i++)
  { 
      output += "Number for outer loop is " + (i+1) + "<br>";   

//inner loop function  
    for (var j = 0; j < 10; j++)
        {
         output += "&nbsp; &nbsp; inner loop is " + (j+1) + "<br>";   
        } 

}
  document.getElementById("result").innerHTML = output;  
    
}
