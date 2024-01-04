import Bookmark from "./components/Bookmark/Bookmark.js";
import Card from "./components/Card/Card.js";
import CardList from "./components/CardList/CardList.js";
import Form from "./components/Form/Form.js";
import Header from "./components/Header/Header.js";
import App from "./components/App/App.js";
export { cards };

// Store the cards in a global state
const cards = [
  {
    question:
      "In the Kingdom Hearts series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["kingdomheart", "mastereraqus", "english voices"],
    isBookmarked: false,
  },
  {
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["hewhomustnotbenamed", "danielradcliffe", "abracadabra"],
    isBookmarked: false,
  },
  {
    question:
      'In the game series "The Legend of Zelda" what is the name of the main character?',
    answer: "Link",
    tags: ["linktothepast", "linkbetweenworlds", "linkbetweenages"],
    isBookmarked: false,
  },
];

// moved function Bookmark to its own folder
// moved function Card to its own folder
// moved function CardList to its own folder
// moved function Form to its own folder
// moved function Header to its own folder

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
