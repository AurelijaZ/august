// Mini Project: Random winner generator       
//Users can input elements into an array and then select a random winner from that array and display it on the screen
var names = [];

var event1 = document.getElementById("button1");
event1.addEventListener('click', nextName, false); 

function nextName()
{
    var moreGamers =document.getElementById("input1").value;  //make sure the input is inserted here instead of result1  
    names.push(moreGamers);
     //need to make loop so it generates names over and over 
    var textString = "";
    for (i = 0; i < names.length; i++)
{  
    textString += "<li>" + names[i] + "</li></br>"; 
}
     /* document.getElementById("result2").innerHTML =  "Winner is " + textString; */
     document.getElementById("result1").innerHTML = "The Entries are... " + "<br>" + textString;
}
    


var event1 = document.getElementById("button2");
event1.addEventListener('click', secondButton, false); 

function secondButton()
{
    
    var winner = Math.floor(Math.random() * (names.length));
    document.getElementById("result2").innerHTML =  "Winner is " + winner;
}
    
    