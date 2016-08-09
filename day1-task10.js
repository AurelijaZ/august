//set an event with click of a button 
var event1=document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst() 
{
    var input1= parseInt(document.getElementById("input1").value);
    var input2= parseInt(document.getElementById("input2").value);
    
    if ((input1 > 10) && (input2 > 10)) {
        document.getElementById("demo").innerHTML = input1; 
        document.getElementById("demo1").innerHTML = input2;
}
    
    else if 
        (input1 > 10)
    {
        document.getElementById("demo").innerHTML = "";
    }
 else 
     (input2 > 10)
 { document.getElementById("demo1").innerHTML=""; 
 }
}  