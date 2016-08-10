//Collect a user input and allocate it to a new array using the push method.

// Display the array and the length of the array (number of elements) using array.length on the webpage

var fruits = ["orange", "apple", "mango"];

var event1 = document.getElementById("button1");
event1.addEventListener('click', myFunction, false); 

function myFunction() 
{
    //push button to work and add on new fruit with every click
    var moreFruit = fruits.push(document.getElementById("input1").value);  //make sure the input is inserted here instead of result1 
    
    var textString = "";
    
    for (i=0; i < fruits.length; i++)
        {
            textString +=fruits[i] + "<br>";
        }
    document.getElementById("result1").innerHTML = textString; //removed result1 and swapped with input1
    
    //to make the array length work here
    document.getElementById("result2").innerHTML = "The array is " + fruits.length;
    
    
}