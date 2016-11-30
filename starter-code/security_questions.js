console.log("security_questions.js loaded");
var answer;
var securityQuestions = [ {question: "What was your first pet's name?", expectedAnswer: "Tripp"},
  {question: "Where were you born?", answer: "Las Vegas"},
  {question: "What's your favorite color?", answer: "blue" },
]

for (var i = 0; i < securityQuestions.length; i++) {
  answer = prompt(securityQuestions[i].question);
  if (answer != securityQuestions[i].expectedAnswer) {
    alert("GET OUTTA HERE");
    break;
  }
  alert("YOU'RE IN");
}
