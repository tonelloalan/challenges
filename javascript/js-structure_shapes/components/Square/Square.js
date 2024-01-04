// wrap the creation of the square element including the addEventListener into a separate function starting with a capital letter, e.g. Square

// moved function to its own folder and added "export default"
export default function Square(getRandomColor) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    // square.style.backgroundColor = "#ccc";
    square.style.backgroundColor = getRandomColor(); // use function getRandomColor inside all three event listeners
  });
  return square; // return the element
}
