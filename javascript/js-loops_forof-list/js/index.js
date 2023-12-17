console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

// using the for ... of iteration to list all the items in the programmingLanguages object, and append them to a new creted element "li", and finally append as child of the main "ol" element.
for (const language of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = language;
  ol.appendChild(li);
}

// --^-- write/change code here --^--
