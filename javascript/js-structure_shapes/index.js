import Circle from "./components/Circle/Circle.js";

// import function randomcolor
import { getRandomColor } from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

// removed circle function and moved it to circle folder

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  // square.style.backgroundColor = "#ccc";
  square.style.backgroundColor = getRandomColor(); // use function getRandomColor inside all three event listeners
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  // pentagon.style.backgroundColor = "#ccc";
  pentagon.style.backgroundColor = getRandomColor(); // use function getRandomColor inside all three event listeners
});

// root.append(circle, square, pentagon);
const circle = Circle(getRandomColor); // call the function and save returned value to a variable

root.append(circle, square, pentagon); // append the element to the root element
