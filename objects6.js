//Create an object within an object (nested) and display a nested object property on the webpage

var person = 
{
    firstname:"Aurelija",
    surname:"Zuba",
    fullname: function ()
    {
        //put this. for return function 
        return this.firstname + " " + this.surname;
    },
address:
    {
        street:"Hogwarts",
        city:"UK"
    }

}

/* document.getElementById("result1").innerHTML = vet.firstName + " is a " + vet.breed + " and has " + vet.furColour + " fur"; */ 

document.getElementById("result1").innerHTML = person.fullname();
document.getElementById("result2").innerHTML = person.address.street + "<br<" + person.address.city;
    