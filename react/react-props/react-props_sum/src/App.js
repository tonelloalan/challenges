import React from "react";
import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  return <Sum valueA={2} valueB={4} />;
}

function Sum({ valueA, valueB }) {
  let result = valueA + valueB;
  // return <h2>{`${valueA} + ${valueB} = ${result}`}</h2>; // option 1
  return (
    <h2>
      {valueA} + {valueB} = {result}
    </h2>
  );
}
