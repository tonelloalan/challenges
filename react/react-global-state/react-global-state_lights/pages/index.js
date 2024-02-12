import Link from "../components/Link";

// added two props: lights and handleLightToggle
export default function HomePage(lights, handleLightToggle) {
  return (
    <div>
      <h1>Home</h1>
      <p>?? light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
