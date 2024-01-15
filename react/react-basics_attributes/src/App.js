import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">This is my article title</h2>
      <label htmlFor="my-input">
        Input Label:
        <input id="my-input" placeholder="Type here..." />
      </label>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(software)"
      >
        React Wikipedia Article
      </a>
    </article>
  );
}
