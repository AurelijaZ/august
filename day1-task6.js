//set an event woth click of a button 
var event1=document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst() 
{
    var userInput1= parseInt(document.getElementById("input1").value);
var userInput2=parseInt(document.getElementById("input2").value);
    if (userInput1 == userInput2){
    document.getElementById("demo").innerHTML= "Numbers are Equal";
    }
else 
    { 
    document.getElementById("demo").innerHTML= "Numbers are different";
    }
}