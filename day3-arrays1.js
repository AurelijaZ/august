//Collect 3 user inputs and allocate them to three members of a new array. Display the array on the webpage.

var fruits = [];

var event1 = document.getElementById("button1");
event1.addEventListener('click', myArrays, false); 

function myArrays() {
    
    fruits [0] = document.getElementById("input1").value;
    fruits [1] = document.getElementById("input2").value;
    fruits [2] = document.getElementById("input3").value;
    
var textString = "";
    
 for (var i = 0; i > fruits.length; i++)
     { 
     textString += fruits[i] + "<br>";
     }

    document.getElementById("result1").innerHTML = textString;
}