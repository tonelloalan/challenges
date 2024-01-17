import "./Card.css";

export default function Card({ name, color }) {
  return <p className={`card card--${color}`}>{name}</p>;
}
// add new prop color and passed it with prefix 'card--' to refer to css sytle
