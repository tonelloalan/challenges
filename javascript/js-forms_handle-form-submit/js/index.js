console.clear();

const form = document.querySelector('[data-js="form"]'); // targeted the form item and assigned its value to a variable

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents the form submition to trigger the standard action from the browser, which is refreshing the page and printing the form values on the navigator

  const formData = new FormData(event.target); // creates new FormData objects and assigs it to a variable. The parameter for the object, event.target, means that for this event, the object will be targetting the form itself, as to get the data being entered in the form.
  const data = Object.fromEntries(formData); // Then, we create a new variable to assign the following: the data from the form entries will be pulled from the object we just created earlier (formData) and creates a new object in which the key-value pairs are represented as properties of the object. This results in a more structured representation of the form data.

  console.log(data);

  const firstName = document.getElementById("first-name");

  firstName.focus();

  event.target.reset();
});
