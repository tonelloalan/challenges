// import function randomcolor
import { getRandomColor } from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

// wrap the creation of the circle element including the addEventListener into a separate function starting with a capital letter, e.g. Circle
function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    // circle.style.backgroundColor = "#ccc";
    circle.style.backgroundColor = `${getRandomColor()}`; // use function getRandomColor inside all three event listeners
  });
  return circle; // return the element
}

const circleElement = Circle(); // call the function and save returned value to a variable

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  // square.style.backgroundColor = "#ccc";
  square.style.backgroundColor = `${getRandomColor()}`; // use function getRandomColor inside all three event listeners
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  // pentagon.style.backgroundColor = "#ccc";
  pentagon.style.backgroundColor = `${getRandomColor()}`; // use function getRandomColor inside all three event listeners
});

root.append(circle, square, pentagon);
