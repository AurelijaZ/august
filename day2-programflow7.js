//declare an event for a button1 to function 

var event1= document.getElementById("button1");

//declare a function for button1
event1= addEventListener('click',whileLoop,false); 

function whileLoop () {
  var i=0;
  var output= "";
    
    do { output += (i+1) + "<br>";
        i++
        
    }
//loop 10 times 
    while (i < 10)


  document.getElementById("result").innerHTML = output;  
    
}
