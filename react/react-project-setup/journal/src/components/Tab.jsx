import Badge from "./Badge";

export default function Tab({
  badgeName,
  entriesNumber,
  tabStyle,
  badgeStyle,
}) {
  return (
    <div className="tab" style={tabStyle}>
      <span>{badgeName}</span>
      <Badge badgeStyle={badgeStyle} entriesNumber={entriesNumber} />
    </div>
  );
}
