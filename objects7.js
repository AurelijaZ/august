 // Build an object constructor, create 2 instances of the object and display the properties of the object instances on the webpage*/

//house var function
 function house(name,people,years)
{
    this.name = name;
    this.people = people;
    this.years = years;
}

//create 2 objects 
//make sure new something is defined the same as in the function!!!! 
var slytherinHouse = new house ("Slytherin", 500, 7);
var gryffindorHouse = new house ("Gryffindor", 498, 7);

//display properties

document.getElementById("house1").innerHTML = "House name is: " + slytherinHouse.name + ", There are " + slytherinHouse.people + " people " + slytherinHouse.years + " years of studying";

document.getElementById("house2").innerHTML = "House name is: " + gryffindorHouse.name + ", There are " + gryffindorHouse.people + " people " + gryffindorHouse.years + " years of studying";

