//Create an object with properties and a method

//Access the method

var vet = 
{
    firstName:"Poppy", 
    breed:"shitzu", 
    furColour:"black",
    date: "Monday",
    checkAvailability: function ()
    {
        //put this. for return function 
        return this.date;
    }
}

/* document.getElementById("result1").innerHTML = vet.firstName + " is a " + vet.breed + " and has " + vet.furColour + " fur"; */ 

document.getElementById("result1").innerHTML = vet.firstName + " is booked for..." + vet.checkAvailability();
    
// always put var . something 