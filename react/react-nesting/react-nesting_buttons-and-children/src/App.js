import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>I am button 1</Button>
      <Button>Well I am button 2</Button>
      <Button>And I am button 3</Button>
      <Button>Of course, I´ m the last button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
