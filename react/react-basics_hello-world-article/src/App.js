import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is my header</h1>
      <p>And this is my paragraph.</p>
    </article>
  );
}
