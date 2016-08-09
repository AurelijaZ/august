//set an event with click of a button 
var event1=document.getElementById("button1");
event1.addEventListener('click', inputAndDisplay, false);
// get a display of three boxes 

function inputAndDisplay() 
{
    //get a value from the boxes
var user1 = parseInt(document.getElementById("input1").value);
var user2 = parseInt(document.getElementById("input2").value); 
var user3 = parseInt(document.getElementById("input3").value);
    
   // convert to numbers - do not need it
  /* var number1 = parseInt(user1);
   var number2 = parseInt(user2);
   var number3 = parseInt(user3); */
    
//call the function to add the numbers
    var output = addThree(user1, user2, user3);
    document.getElementById("result").innerHTML = output;

    
}
//get the result 
function addThree(input1,input2,input3)
{
    return input1 + input2 + input3; 
                                                                                                                               
}