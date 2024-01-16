export default function Footer({ title, date }) {
  return (
    <h5 className="footer">
      {title} — {date}
    </h5>
  );
}
