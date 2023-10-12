const correctUsername = "vaqifzyv";
const correctPassword = "vaqif123";

const username = prompt("Enter username");
const password = prompt("Enter password");

if (username == correctUsername && password != correctPassword) {
  alert("password mismatch");
} else if (username != correctUsername && password == correctPassword) {
  alert("username mismatch");
} else if (username != correctUsername && password != correctPassword) {
  alert("mismatch");
} else {
  alert("Welcome vaqifzyv");
}
