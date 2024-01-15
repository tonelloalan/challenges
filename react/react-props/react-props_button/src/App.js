import React from "react";
import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  return (
    <Button
      padding="8px"
      borderRadius="15px"
      text="Click me!"
      color="red"
      bgColor="yellow"
    />
  );
}

function Button({ padding, borderRadius, bgColor, color, disabled, text }) {
  return (
    <button
      style={{
        padding: padding,
        borderRadius: borderRadius,
        backgroundColor: bgColor,
        color: color,
        display: disabled,
      }}
    >
      {text}
    </button>
  );
}

{
  /* <h1 style="color: red; font-size: 40px;">Hello World</h1> */
}
