//function for the finish button
function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

        if (question1 === "head") {
            correct++;
        }
        if (question2 === "3 years") {
            correct++;
        }
        if (question3 === "elephant") {
            correct++;
        }
        if (question4 === "koala") {
            correct++;
        }
        //if more are correct then it prints out a message depending on the order of score [0,1,2..etc]
var messages = ["Great job!", "Thats is just okay", "You really need to do better"];

var pictures = ["assets/images/swinner.gif", "assets/images/Smeh.gif", "assets/images/pfalling.gif"];

var score;
//if less than one then the score will dictate which message and picture is displayed
        if (correct < 1) {
            score = 2;
        }
        if (correct > 0 && correct < 4) {
            score = 1; 
        }
        if (correct > 3) {
            score = 0;
        }

        
//writes information on to the HTML and shows it to user
document.getElementById("after-submit").style.visibility = "visible";
//types up message to display to user
document.getElementById("message").innerHTML = messages[score];
//tells user how many questions they got correct
document.getElementById("number-correct").innerHTML = "You got " + correct + " correct."; 
//shows user pictures from the array depending on the score
document.getElementById("picture").src = pictures[score];          

}