// var questions = ["what is your name?", "how old are you?","what is your favorite color","you must program me further"];

var questions = [];
// get a bunch of questions from users and populate the array

for (let i = 0; i < 3; i++) {
  var question = prompt("enter a question");
  questions.push(question);
}
// create a wuestion index
var questionIndex = 0;

var questionHeading = document.getElementById("question");
questionHeading.innerHTML = questions[questionIndex];

function answer() {
   // fetch the answer entered in input field
  let answer = document.getElementById("input-field").value;
  // check if the naswer was for the first question
  if (questionIndex === 0) {
      questionHeading.innerHTML = `hi ${answer}`;
  }else if (questionIndex = 1) {
    let currentYear = new Date().getUTCFullYear();
    questionHeading.innerHTML = `you must be born in ${currentYear - answer}`;
  }
  else {
    questionHeading.innerHTML = `program me further`;
  }
    // clear input field
  document.getElementById("input-field").value = "";  // very good example for point by value and reference,
  // why answer = "" doesnot clear the text
  // show next question after 2 seconds
  setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
  // increment the question
  questionIndex += 1;
  questionHeading.innerHTML = questions[questionIndex];
}













// bug 1: lets say user did not input value mandate user to enter new value
// bug2: once you reach last question disable the input field and the submit button
// use switch statements
