import Badge from "./Badge";

export default function Tab({ badgeName, entriesNumber }) {
  return (
    <>
      <Badge badgeName={badgeName} entriesNumber={entriesNumber} />
    </>
  );
}
