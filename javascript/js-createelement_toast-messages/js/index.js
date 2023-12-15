console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const toastMessage = document.createElement("li"); // store the creation of new element in toastMessage variable
  toastMessage.classList.add("toast-container__message"); // reads: add css class(list) "toast-container__message" to the toastMessage item (which was just declared above)
  toastContainer.append(toastMessage); // append the toastMessage item which was earlier declared and had its style (class) modified
  toastMessage.textContent = "I am a new toast message"; // change the inner text from the item to the mentioned string
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});
