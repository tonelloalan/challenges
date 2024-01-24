import Link from "next/link.js";
import { volumes } from "../../resources/lib/data.js";
import Image from "next/image.js";

export default function TheReturnOfTheKing() {
  const volume3 = volumes[2];
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumes[2].title}</h1>
      <p>{volumes[2].description}</p>
      <ul>
        {/* maps over the array of books in the Fellowship of the Ring volume. */}
        {volume3.books.map((book, index) => (
          <li key={index}>
            {/* the key={index} attribute is used to provide a unique key to each <li> element, which is necessary for React to efficiently update the list when it changes. */}
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={`/images/${volume3.slug}.png`}
        alt={`${volume3.title}`}
        width={140}
        height={230}
      />
      <br />
      <Link href={`/volumes/${volumes[1].slug}`}>Previous</Link>
    </>
  );
}
