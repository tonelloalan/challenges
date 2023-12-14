console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.preventDefault();

  const firstName = document.getElementById("first-name");

  firstName.focus();

  event.target.reset();
});
