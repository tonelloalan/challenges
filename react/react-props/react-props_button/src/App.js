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
      disabled={false}
      onClick={() => console.log("You clicked me!")}
    />
  );
}

function Button({
  padding,
  borderRadius,
  bgColor,
  color,
  disabled,
  text,
  onClick,
}) {
  function handleClick() {
    console.log("handleClick() triggered me!");
  }
  return (
    <button
      style={{
        padding: padding,
        borderRadius: borderRadius,
        backgroundColor: bgColor,
        color: color,
      }}
      disabled={disabled}
      // onClick={onClick}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

{
  /* <h1 style="color: red; font-size: 40px;">Hello World</h1> */
}
