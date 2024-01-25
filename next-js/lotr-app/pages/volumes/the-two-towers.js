import Link from "next/link.js";
import { volumes } from "../../resources/lib/data.js";
import Image from "next/image.js";

export default function TheTwoTowers() {
  const volume2 = volumes[1];
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumes[1].title}</h1>
      <p>{volumes[1].description}</p>
      <ul>
        {/* maps over the array of books in the Fellowship of the Ring volume. */}
        {volume2.books.map((book, index) => (
          <li key={index}>
            {/* the key={index} attribute is used to provide a unique key to each <li> element, which is necessary for React to efficiently update the list when it changes. */}
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={volume2.cover}
        alt={`${volume2.title}`}
        width={140}
        height={230}
      />
      <br />
      <Link href={`/volumes/${volumes[0].slug}`}>Previous</Link>
      <Link href={`/volumes/${volumes[2].slug}`}>Next</Link>
    </>
  );
}
