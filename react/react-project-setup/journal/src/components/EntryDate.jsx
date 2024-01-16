export default function EntryDate({ month, day, year }) {
  return (
    <h3 className="entryDate">
      {month} {day}, {year}
    </h3>
  );
}
