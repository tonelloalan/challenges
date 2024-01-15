import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  return <Greeting name="Marcell" />;
}

function Greeting({ name }) {
  // return <h2>Hello, {name}!</h2>;
  return <h2>{name === "Marcell" ? "Hello, Coach!" : `Hello, ${name}!`}</h2>; // implemented ternary operator to conditionally render greeting message
}
