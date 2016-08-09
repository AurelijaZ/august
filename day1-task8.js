//set an event with click of a button 
var event1=document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst() 
{
    /*var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    var c = parseInt(document.getElementById("input3").value);
                        
var cal1 = (a+b)*c;
var cal2 = (a+b+c);

    document.getElementById("demo").innerHTML = cal1;
    document.getElementById("demo1").innerHTML = cal2;*/
    
  var result1= (parseInt(document.getElementById("input1").value) + parseInt(document.getElementById("input2").value))
            * parseInt(document.getElementById("input3").value); 
    
var result2= parseInt(document.getElementById("input1").value + parseInt(document.getElementById("input2").value + parseInt(document.getElementById("input3").value;
                      
    document.getElementById("demo").innerHTML = result1;
    document.getElementById("demo1").innerHTML = result2;
    
    
}