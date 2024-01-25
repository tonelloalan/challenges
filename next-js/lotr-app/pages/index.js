import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>My Lord of The Rings App</title>
      </Head>
      <div>
        <h1>Lord of the Rings App</h1>
        <Link href="/volumes">Volumes</Link>
      </div>
    </>
  );
}
