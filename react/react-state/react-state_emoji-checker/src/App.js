import React from "react";
import "./styles.css";
import { useState } from "react"; // import useState function

export default function App() {
  // let code = "?";
  let [code, setCode] = useState(""); // declare state variable and remove question mark from it

  // const validCode = "🐡🐠🐋";
  const [validCode, setValidCode] = useState("🐡🐠🐋"); // declare state variable

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCode(code + "🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode(code + "🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode(code + "🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}

// linke 57: if code is strictly equal to validCode, return it and p element with text
