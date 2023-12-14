console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError(); // 1st step

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  // 2nd step - if it is unchecked, donÄt let the submit to happen
  const isChecked = tosCheckbox.checked;
  if (!isChecked) {
    showTosError();
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
