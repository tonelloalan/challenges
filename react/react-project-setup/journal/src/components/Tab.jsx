import Badge from "./Badge";

export default function Tab({ badgeName, entriesNumber }) {
  return (
    <div className="tab">
      <span>{badgeName}</span>
      <Badge entriesNumber={entriesNumber} />
    </div>
  );
}
