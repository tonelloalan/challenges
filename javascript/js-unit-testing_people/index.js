export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  return people.filter((person) => person.age > age);
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === "Skywalker");
}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}
