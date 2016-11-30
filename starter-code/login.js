console.log("login.js loaded");
var userInput = prompt("Enter password for user " + userLogin.username);
var userLogin = {
  username: "dogg", password: "doggytime"
};

for (var i = 3; i > 0; i--) {
  userInput =
  if (userLogin.password === userInput) {
    alert("WELCOME!");
    break;
  } else {
    alert("Passwords do not match. Try Again!");
}
