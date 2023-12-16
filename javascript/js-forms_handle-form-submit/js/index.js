console.clear();

const form = document.querySelector('[data-js="form"]'); // targeted the form item and assigned its value to a variable

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents the form submition to trigger the standard action from the browser, which is refreshing the page and printing the form values on the navigator

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const firstName = document.getElementById("first-name");

  firstName.focus();

  event.target.reset();
});

console.log(form); // log all data into the console
