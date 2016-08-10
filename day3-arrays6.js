// Create an array of Countries England, France, Italy, Mexico, 

// Poland, Russia, China, Greece, Egypt, India

// Create a  user text input field. User can enter a country. The array is searched and when a match is found the position in the array is displayed and the user is given a message to inform whether the country is present or not in the array.


var countries = ["England","France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];

var event1 = document.getElementById("button1");
event1.addEventListener('click', myFunction, false);

function myFunction() 
{
    
var inputCountry = document.getElementById("input1").value; 
var searchCountry = countries.indexOf(inputCountry);
    
if (searchCountry >= 0)
{
    document.getElementById("result1").innerHTML = inputCountry + " found";
}
    else 
{
    document.getElementById("result2").innerHTML = inputCountry + " is not found";
} 

     
}


