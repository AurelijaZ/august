//Mini Project Guess the number game  
//make var for future messages 
var randomNumber= "";
var numberOfGuesses= "";
var successMessage= "Well done!"; 
var tooBigMessage= "The Number is too big";
var tooSmall= "The number is too small";
var tryAgain= "Try again";
var numberOfGuessesMessage= "Your number of guesses was ";

//declare an event for a button1 to function 
var event1= document.getElementById("button1");

//declare a function for button1
event1= addEventListener('click',guessNumber,false); 
    
var random = Math.floor((Math.random() *100)+1);   
    
    
function guessNumber() {
var usersGuessString= document.getElementById("input1").value;
var usersGuessNum= parseInt(usersGuessString);
    


numberOfGuesses ++; 

if (usersGuessNum === random) {
    document.getElementById("result1").innerHTML = successMessage;
    document.getElementById("result2").innerHTML = numberOfGuessesMessage + numberOfGuesses;
}    
else if (usersGuessNum > random) {
    document.getElementById("result1").innerHTML = tooBigMessage;
    document.getElementById("result2").innerHTML = tryAgain;
}
else if (usersGuessNum < random) { 
    document.getElementById("result1").innerHTML = tooSmall;
     document.getElementById("result2").innerHTML = tryAgain;
}
    
}