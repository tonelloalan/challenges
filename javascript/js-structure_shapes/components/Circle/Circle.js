// wrap the creation of the circle element including the addEventListener into a separate function starting with a capital letter, e.g. Circle

// moved function to its own folder and added "export default"
export default function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    // circle.style.backgroundColor = "#ccc";
    circle.style.backgroundColor = `${getRandomColor()}`; // use function getRandomColor inside all three event listeners
  });
  return circle; // return the element
}

const circleElement = Circle(); // call the function and save returned value to a variable
