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
   var usersIncome = parseInt(income);
    
//Gross Salary results
document.getElementById("result1").innerHTML = "Gross Salary: £" + usersIncome;

//calculate the taxes 
var taxAt20 = 32000 * 0.2; 
var taxAt40 = 7000 * 0.4; 
var totalTax = taxAt20 + taxAt40;
var netSalary = usersIncome - totalTax;
                 

//make an if function for the income calculations 

if ((usersIncome  > 11000) && (usersIncome  <= 43000))
    {
        taxAt20 = (usersIncome  - 11000)*0.2;
        document.getElementById("result3").innerHTML = "Tax Paid at 20%: £" + taxAt20;
    }
else if (usersIncome  > 43000)
    {
        taxAt20 = 32000*0.2;
        taxAt40 = (usersIncome - 43000)*0.4;
        document.getElementById("result4").innerHTML = "Tax Paid at 40%: £" + taxAt40;
    }
netSalary = usersIncome - taxAt20 - taxAt40;
document.getElementById("result5").innerHTML = "Net Income: £" + netSalary;

} 
