console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

// Write a function with the "function" keyword named "showWelcomeMessage"
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

// call "handleUserLogin" and pass your callback function as the first argument
handleUserLogin(showWelcomeMessage);

// call "handleUserLogin" again with an anonymous function as the callback
handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now.`);
});
