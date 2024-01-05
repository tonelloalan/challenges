import cards from "./components/CardsData/CardsData.js";
import Bookmark from "./components/Bookmark/Bookmark.js";
import Card from "./components/Card/Card.js";
import CardList from "./components/CardList/CardList.js";
import Form from "./components/Form/Form.js";
import Header from "./components/Header/Header.js";
import App from "./components/App/App.js";

// Store the variable cards in a global state
// moved function Bookmark to its own folder
// moved function Card to its own folder
// moved function CardList to its own folder
// moved function Form to its own folder
// moved function Header to its own folder
// moved function App to its own folder

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
