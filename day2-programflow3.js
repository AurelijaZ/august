//declare a global var

var nameCountry= "France";
document.getElementById("result").innerHTML = "I wanna go to " + nameCountry;

//declare a variable  for the button1 
event1= document.getElementById("button1");
event1= addEventListener('click',show,false);

function display()
{
    var nameCountry = "Germany";
    document.getElementById("result2").innerHTML = "I wanna go to " + nameCountry; 
}

