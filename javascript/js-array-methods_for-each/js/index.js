const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// add new element inside the functio with a color argument
colors.forEach((color) => {
  const colorBox = document.createElement("div"); // create element
  colorBox.classList.add("color-box"); // add class to element
  document.body.append(colorBox); // append to body
});

// const colorBox = document.createElement("div"); // create element
// colorBox.classList.add("color-box"); // add class to element
// document.body.append(colorBox); // append to body

// example from handout:

// const pets = ["bird", "cat", "dog", "ferret", "fish"];
// pets.forEach((pet) => {
//   const petElement = document.createElement("p");
//   petElement.textContent = pet;
//   document.body.append(petElement);
// });
