//  Your challenge is to create a small quiz using an array of objects in Javascript.
// The quiz can be on any topic of your choice and no more than 5 questions.
// An additional challenge will be to track the users score.
 
// You should use to build your solution
// An object constructor to create quiz objects
// Push objects into an array
// Use a For loop to rotate through the array and display the questions onto the DOM 

//define all the messages
var finalScore = 0;
var perfectScore= "Well done! You're Harry Potter pro!";
var goodScote = "Good Attempt";
var badScore = "Need to improve your knowledge, try again!";
var totalScore = "Your total score was ";

function myQuiz(text, answer1, answer2, answer3, answer4, correctAnswer) 
{
    this.text = text; 
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
}

//create question objects
var questionList = [];
var question1 = new myQuiz("Q1. What creatures feed on positive human emotion?", "Mermaids", "Boggarts", "Grindylows", "Dementors", 4);
var question2 = new myQuiz("Q2.Who said it: 'Ask us no questions and we'll tell you no lies'?", "Peeves", "George Weasley", "Fred Weasley", "James Potter", 3);
var question3 = new myQuiz("Q3. How many Chocolate Frog cards does Ron estimate he has in Harry Potter and the Philosopher's Stone?", "250", "300", "450", "500", 4);
var question4 = new myQuiz("Q4. How many brothers does Ron have?", "5", "7", "2", "4", 1);

questionList.push(question1);
questionList.push(question2);
questionList.push(question3);
questionList.push(question4);

var questionTag=["q1","q2","q3","q4"];
var answerTags=["q1answer","q2answer", "q3answer", "q4answer"];
var tagInputs= ["q1input", "q2input", "q3input","q4input"];

//display the questions and answers
for (var i = 0; i < questionList.length; i++)
    {
        document.getElementById(questionTag[i]).innerHTML = questionList[i].text; 
        document.getElementById(answerTags[i]).innerHTML= 
        "<li>" + questionList[i].answer1 + "</li>" +
        "<li>" + questionList[i].answer2 + "</li>" +
        "<li>" + questionList[i].answer3 + "</li>" +
        "<li>" + questionList[i].answer4 + "</li>";
    }
 
//set an event for the submit button
var event1 = document.getElementById("finishQuiz");
event1.addEventListener('click', getScore, false); 

function getScore()
{
   
var currentAnswer = 0;
finalScore = 0;
for (var i = 0; i < questionList.length; i++)
    {
        //get the answer
       currentAnswer = parseInt(document.getElementById(tagInputs[i]).value);
        //if its correct, increase the score
        if (currentAnswer === questionList[i].correctAnswer)
            {
                finalScore++;
            }
    }
    document.getElementById("results").innerHTML = totalScore + finalScore + " out of " + questionList.length; 
    messages();
    
} 
function messages()
{  if (finalScore === 4)
{
   document.getElementById("results2").innerHTML = perfectScore;
}
 else if ((finalScore === 3) || (finalScore === 2)){
     
 }   
 
}


