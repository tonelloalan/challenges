console.clear();

export function getAnimal(animalPluralName) {
  if (animalPluralName === "cats") {
    return "I totally love cats!";
  } else if (!animalPluralName) {
    return `I do not like animals at all!`;
  } else {
    return `I like ${animalPluralName}!`;
  }
}
console.log(getAnimal("dogs"));
