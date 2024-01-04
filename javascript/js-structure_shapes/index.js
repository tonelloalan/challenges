import Circle from "./components/Circle/Circle.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

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

// removed pentagon function and moved it to pentagon folder

// root.append(circle, square, pentagon);
const circle = Circle(getRandomColor); // call the function and save returned value to a variable
const pentagon = Pentagon(getRandomColor); // call the function and save returned value to a variable

root.append(circle, square, pentagon); // append the element to the root element
