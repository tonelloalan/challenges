export default function TextArea({ labelText }) {
  return (
    <>
      <label>{labelText}</label>
      <br />
      <textarea rows={5} className="textArea"></textarea>
    </>
  );
}
