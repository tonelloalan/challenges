console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {} // 1. mark the function with the async keyword, because we want to use await inside the function.

fetchData();

/* 
async function fetchData() {
  const response = await fetch("/url/to/something");
  const data = await response.json();
  return data;
} 
*/
