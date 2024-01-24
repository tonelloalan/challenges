import Link from "next/link";
import Head from "next/head";
import { introduction } from "../../resources/lib/data.js";

export default function Volumes() {
  return (
    <>
      <Head>
        <title>My LOTR App: Volumes</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
    </>
  );
}
