// wrap the creation of the pentagon element including the addEventListener into a separate function starting with a capital letter, e.g. Pentagon

// moved function to its own folder and added "export default"
export default function Pentagon(getRandomColor) {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    // pentagon.style.backgroundColor = "#ccc";
    pentagon.style.backgroundColor = getRandomColor(); // use function getRandomColor inside all three event listeners
  });
  return pentagon; // return the element
}
