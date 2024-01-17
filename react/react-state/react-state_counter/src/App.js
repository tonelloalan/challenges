import React from "react";
import "./styles.css";
import { useState } from "react"; // import useState function

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0); // declare state variable

  // create new function for adding and pass variable
  function addOne() {
    setCount(count + 1);
  }
  // create new function for subtracting and pass variable
  function subtractOne() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={subtractOne}>
          -
        </button>
        <button type="button" onClick={addOne}>
          +
        </button>
      </div>
    </div>
  );
}

// import { useState } from "react";

// function SocialMediaPost() {
//   const [liked, setLiked] = useState(false);

//   function toggleLiked() {
//     setLiked(!liked);
//   }

//   return (
//     <article>
//       <p>Liked: {liked ? "Yes" : "No"}</p>
//       <button type="button" onClick={toggleLiked}>
//         {liked ? "Remove like" : "Add like"}
//       </button>
//     </article>
//   );
// }
