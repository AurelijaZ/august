//set an event woth click of a button 
var event1=document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst() 
{
    var userInput1= parseInt(document.getElementById("input1").value);
    var userInput2=parseInt(document.getElementById("input2").value);
    var num1=parseInt(userInput1);
    var num2=parseInt(userInput2);
    var greaterMessage= " is the greater pf the two number";
    var equalMessage= "The two numbers are equal";
    
    if (num1 >num2){
    document.getElementById("result").innerHTML= num1 + greaterMessage;
        
    }
else if
    { 
    document.getElementById("result").innerHTML= num2 + greaterMessage;
    }
    else
        {document.getElementById("result").innerHTML= equalMessage;
            
        }
}
