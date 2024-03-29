import Link from "next/link";
import Head from "next/head";
import { introduction, volumes } from "../../resources/lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const handleRandomVolumeClick = () => {
    if (confirm("Do you want to visit a random Volume?")) {
      const randomVolume = getRandomElement(volumes);
      router.push(`/volumes/${randomVolume.slug}`);
    }
  };

  return (
    <>
      <Head>
        <title>My LOTR App: Volumes</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.id}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleRandomVolumeClick}>
        CLICK FOR A RANDOM VOLUME
      </button>
    </>
  );
}
