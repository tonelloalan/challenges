console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name");
  console.log("First name: " + firstName.value);
  event.target.reset();
});
