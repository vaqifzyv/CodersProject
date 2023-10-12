const button = document.querySelector("button");
const circle = document.querySelector(".circle");
let counter = 0;

button.addEventListener("click", () => {
  if (counter == 0) {
    circle.setAttribute("style", "margin-left: 93%; background-color:black");
    counter++;
  } else {
    circle.setAttribute("style", "margin-left: 0.5%");
    counter--;
  }
});
