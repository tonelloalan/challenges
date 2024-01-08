console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  // 1. mark the function with the async keyword, because we want to use await inside the function.
  const response = await fetch(url); // declare a variable named response. It stores the Response object (previsouly defined variable "url") that is returned by fetch.
  console.log(response);
  const data = await response.json(); // Once this promise resolves (the network request is finished), we call the .json method on the response variable. This function returns another Promise.
  return data; // This second promise resolves with the actual data (payload) converted from JSON (a formatted string) to a JavaScript value or object. This result is stored in the variable named data.
}
fetchData();

/* 
async function fetchData() {
  const response = await fetch("/url/to/something");
  const data = await response.json();
  return data;
} 
*/
