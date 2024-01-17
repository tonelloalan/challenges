export default function Badge({ entriesNumber, badgeStyle }) {
  return (
    <span style={badgeStyle} className="badge">
      {entriesNumber}
    </span>
  );
}
