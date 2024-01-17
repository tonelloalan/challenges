import "./styles.css";
import { useState } from "react"; // import the function

export default function App() {
  // let isActive = false;
  const [isActive, setIsActive] = useState(false); // consider the useState function, initial state should be false

  function handleClick() {
    // isActive = !isActive;
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  // if isActive is true, the nadd "box--actrive", otherwise (if it is false), remove it (add empty string)
  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
