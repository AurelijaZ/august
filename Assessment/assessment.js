// Activate the function for the reset button
function myFunction(){
    document.getElementById("myForm").reset();
} 
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', taxCalc, false); 

function taxCalc()
{
//get user input of their gross salary
   var income = document.getElementById("grossIncome").value;
   var usersIncome = parseInt("income");
//Gross Salary results
document.getElementById("result1").innerHTML = "Gross Salary: " + income;

//calculate the taxes 
var taxPay20 = ((20 / 100) * usersIncome.toFixed(2));
var taxPay40 = ((40 / 100) * usersIncome.toFixed(2));
var netSalary = (usersIncome - (taxPay40) && (taxPay20)); 
                 

//make an if function for the income calculations 
for (var i=0; i < taxCalc.length; i++)
    taxCalc[i] = 0;
    
if (usersIncome = 11000)
{
document.getElementById("result2").innerHTML = "Tax Free Allowance: " + " £ " + usersIncome; 
        
}  else if (11001 <= 43000)
{
tax = ((20 / 100) * usersIncome.toFixed(2));
    document.getElementById("result3").innerHTML = "Tax Paid at 20%: " + " £ " + taxPay20;
            
} else if (43001 <= 150000)
           { tax = ((40 / 100) * usersIncome.toFixed(2));
        }
document.getElementById("result4").innerHTML = "Tax Paid at 40%: " + " £ " + taxPay40;

}
document.getElementById("result5").innerHTML = "Net Salary: " + " £ " + netSalary;


 
