import Input from "./Input";
import TextArea from "./TextArea";
import SubmitButton from "./SubmitButton";

export default function EntryForm() {
  return (
    <>
      <Input labelText="Motto" />
      <br />
      <TextArea labelText="Notes" />
      <br />
      <SubmitButton />
      <br />
    </>
  );
}

// import
// Input
// TextArea
// SubmitButton
