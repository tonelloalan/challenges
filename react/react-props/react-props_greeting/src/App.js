import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  return <Greeting name="Alan" />;
}

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}
