// Create an object variable with 3 properties: firstname, surname, fullname. For the fullname value create a method which returns the firstname and surname and display on the webpage

var person = 
{
    firstname:"Aurelija",
    surname:"Zuba",
    fullname: function ()
    {
        //put this. for return function 
        return this.firstname + " " + this.surname;
    }
}

/* document.getElementById("result1").innerHTML = vet.firstName + " is a " + vet.breed + " and has " + vet.furColour + " fur"; */ 

document.getElementById("result1").innerHTML = person.fullname();
    
