//set an event with click of a button 
var event1=document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst() 
{
    var input1= parseInt(document.getElementById("input1").value);
    
    if (input1 >1 ) {
    document.getElementById("demo").innerHTML = "Its a negative";
}
    
else if (input2 >10) 
    {
        document.getElementById("demo").innerHTML = "its less than 10";
    }else 
    {
        document.getElementById("demo").innerHTML = "its more than 10";
    }

}  