import Badge from "./Badge";

export default function Tab() {
  return (
    <>
      <Badge badgeName="All Entries" entriesNumber={3} />
      {"     "}
      <Badge badgeName="Favorites" entriesNumber={1} />
    </>
  );
}
