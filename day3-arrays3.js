//Add and Remove first and last elements  on and off an array using shift, unshift, push and pop methods

// making seperate function boxes for insert and delete items from array list 
var fruits = ["orange", "apple", "mango", "strawberry", "cherry"];

var event1 = document.getElementById("button1");
event1.addEventListener('click', myFunction, false); 

function myFunction() 
{
    //push button to work and add on new fruit with every click
    
     var moreFruit = fruits.push(document.getElementById("input1").value);  //make sure the input is inserted here instead of result1  
     var moreFruit = fruits.unshift(document.getElementById("input2").value);
    
    
    var textString = "";
    
    for (i=0; i < fruits.length; i++)
        {
            textString +=fruits[i] + "";
        }
    document.getElementById("result1").innerHTML = textString; 
       
}
function myFunction1()
{
    
  var moreFruit = fruits.shift(document.getElementById("result1").value);
  var moreFruit = fruits.pop(document.getElementById("result2").value);
       var textString = "";
    
    for (i=0; i < fruits.length; i++)
        {
            textString +=fruits[i] + " ";
        }
    document.getElementById("result1").innerHTML = textString; 
}
