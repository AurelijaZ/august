//set an event with click of a button 
var event1=document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst() 
{
    var input1= parseInt(document.getElementById("input1").value);
    window.alert("You're in!");
}