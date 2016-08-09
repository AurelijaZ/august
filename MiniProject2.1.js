//Mini Project Interest calculator 


//declare an event for a button1 to function 
/*var event1 = document.getElementById("button1");

//declare a function for button1
event1 = addEventListener('click',interestCalculator,false); */

var e1 = document.getElementById("button1");
e1.addEventListener('click', interestCalculator, false);

function interestCalculator() {
    //get user input
    //get loan amount
    
var userLoanInput = document.getElementById("input1").value;
var loan = parseInt(userLoanInput);
    
var usersRate = document.getElementById("input2").value;
var rate = parseInt(usersRate);
    
var usersLoanTime = document.getElementById("input3").value;
var loanTime = parseInt(usersLoanTime);

    //calculate interest 
var totalInterest = (loan *(rate/100)* loanTime).toFixed(2);
var monthlyInterest = (totalInterest/(loanTime*12)).toFixed(2);

//display result
    document.getElementById("result1").innerHTML = "Your monthly Interest Payment is £" + monthlyInterest;
    document.getElementById("result2").innerHTML = "Total Interest Payment is £" + totalInterest;
}