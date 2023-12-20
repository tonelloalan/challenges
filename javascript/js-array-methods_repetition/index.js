const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

const onlyTitles = recipes.map((recipe) => {
  // The parameter 'recipe' represents each individual recipe object in the array

  // Extracting the 'title' property from the current recipe object
  return recipe.title;
}); // ['Crepes', ...]
console.log(onlyTitles); // The 'onlyTitles' array now contains only the titles of the recipes

const titlesWithDuration = recipes.map((recipe) => {
  // The parameter 'recipe' represents each individual recipe object in the array

  // Extracting the 'title' and 'duration' properties from the current recipe object
  return `${recipe.title} (${recipe.duration})`;
}); // ['Crepes (60min)', ...]
console.log(titlesWithDuration); // The 'onlyTitles' array now contains the titles and duration of the recipes

const timePerServing = recipes.map((recipe) => {
  // The parameter 'recipe' represents each individual recipe object in the array

  // Extracting the and 'duration' property from the current recipe object
  return recipe.duration;
}); // [20, 10, 432, 12]
console.log(timePerServing); // The 'onlyTitles' array now contains the duration of the recipes

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

const allTitlesInOneString = null; // 'Crepes, Scrambled Eggs, ...'

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

// Using filter() to get recipes that only take 60 minutes or less
const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipe) => {
  // The parameter 'recipe' represents each individual recipe object in the array

  // Checking if the 'duration' property of the current recipe is 60 or less
  return recipe.duration <= 60;
});

// The 'recipesThatOnlyTake60minutesOrLess' array now contains only the desired recipes
console.log(recipesThatOnlyTake60minutesOrLess);

// Using filter() to get recipes that have more than 2 servings
const allRecipesWithMoreThan2Servings = recipes.filter((recipe) => {
  // Checking if the 'servings' property of the current recipe is more than 2
  return recipe.servings > 2;
});
// The 'allRecipesWithMoreThan2Servings' array now contains only the desired recipes with more than 2 servings
console.log(allRecipesWithMoreThan2Servings);

const allRecipesWithTitlesLongerThan12Characters = null;

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
