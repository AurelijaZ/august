//Create an array variable with 10 elements and using a for loop  display each element on the webpage

var fruits = ["orange", "apple", "mango", "strawberry", "cherry", "small oranges", "lemon", "lime", "peach", "citrus"]; 

/* var event1 = document.getElementById("button1");
event1.addEventListener('click', myFunction, false); */ //dont need this because were not using button!
 
var textString = "";

for(var i = 0; i < fruits.length; i++)
{
    textString += fruits[i] + "<br>";
}

document.getElementById("arrayDisplay").innerHTML = textString;


