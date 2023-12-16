console.clear();

const form = document.querySelector('[data-js="form"]'); // targeted the form item and assigned its value to a variable

form.addEventListener("submit", (event) => {
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.preventDefault();

  const firstName = document.getElementById("first-name");

  firstName.focus();

  event.target.reset();
});

console.log(form); // log all data into the console
