challenge:
1. answer field has to be cleared
2. if the input field is empty dont show next question
3. once you reach the last question, block the submit button and the input field
4. use a for loop to get the questions from the user and populate the array
5. explore switch statements and replace if-else with switch
6. Optimise thos code further - rewrite the whole app from scratch with your own algorithm.




// declare an array to hold questions
var questions = ["what is yor name?", "how old are you?", "what is your favourite color", "you must program me further"];

// v\index variable to pint to different questions
var questionIndex = 0;
var question = document.getElementById("question");
question.innerHTML = questions[questionIndex];

// Every time the submit button is clicked following action should take place
// - fetch the value provided by the user
// - draft a coresponding response based user input
// - display it in the h1 tag
// - show the next question
function answer() {
  // fetch the user response and display the answer in the h1 tag
  var response = document.getElementById("input-field").value;
  // based on the question number draft corresponsing response
  if (questionIndex == 0 ) {
    question.innerHTML = `hello ${response}`;
  }else if (questionIndex == 1) {
    let currentYear = new Date().getUTCFullYear();
    question.innerHTML = `you must be born in ${currentYear - response}`;
  }else if( questionIndex == 2) {
    question.style.color = `${response}`;
    question.innerHTML = `wow ${response} is my favorite color too`;

  }else {
    question.innerHTML = "you must program me further";
  }
  // increment questionIndex to point to the next question
  questionIndex ++;
  // wait for 2 seconds before showing the next question
  setTimeout(nextQuestion, 2000);
}
function nextQuestion() {
  // display next question
  question.innerHTML = questions[questionIndex];
}
