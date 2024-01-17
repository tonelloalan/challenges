import "./Tag.css";

// receive an additional class called 'Tag--highlight' if the tag prop equals the string 'admin'
export default function Tag({ tag }) {
  return (
    <li className={`tag ${tag === "admin" ? "tag--highlight" : ""}`}>{tag}</li>
  );
}
