import Circle from "./components/Circle/Circle.js";
import Pentagon from "./components/Pentagon/Pentagon.js";
import Square from "./components/Square/Square.js";

// import function randomcolor
import { getRandomColor } from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

// removed circle function and moved it to circle folder

// removed square function and moved it to square folder

// removed pentagon function and moved it to pentagon folder

// root.append(circle, square, pentagon);
const circle = Circle(getRandomColor); // call the function and save returned value to a variable
const pentagon = Pentagon(getRandomColor); // call the function and save returned value to a variable
const square = Square(getRandomColor); // call the function and save returned value to a variable

root.append(circle, square, pentagon); // append the element to the root element
