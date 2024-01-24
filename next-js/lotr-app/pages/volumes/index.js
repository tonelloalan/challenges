import Link from "next/link";
import Head from "next/head";
import { introduction } from "../../resources/lib/data.js";
import { volumes } from "../../resources/lib/data.js";

export default function Volumes() {
  return (
    <>
      <Head>
        <title>My LOTR App: Volumes</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href={`/volumes/${volumes[0].slug}`}>{volumes[0].title}</Link>
        </li>
        <li>
          <Link href={`/volumes/${volumes[1].slug}`}>{volumes[1].title}</Link>
        </li>
        <li>
          <Link href={`/volumes/${volumes[0].slug}`}>{volumes[2].title}</Link>
        </li>
      </ul>
    </>
  );
}
