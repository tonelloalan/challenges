import Input from "./Input";
import TextArea from "./TextArea";
import SubmitButton from "./SubmitButton";

export default function EntryForm() {
  return (
    <div className="entryForm">
      <h3 className="newEntryHeader">NEW ENTRY</h3>
      <Input labelText="Motto" />
      <br />
      <TextArea labelText="Notes" />
      <br />
      <SubmitButton />
      <br />
    </div>
  );
}

// import
// Input
// TextArea
// SubmitButton
