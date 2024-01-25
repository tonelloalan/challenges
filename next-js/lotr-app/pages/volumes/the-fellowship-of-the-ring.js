import Link from "next/link.js";
import { volumes } from "../../resources/lib/data.js";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
  const volume1 = volumes[0];
  console.log();
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volumes[0].title}</h1>
      <p>{volumes[0].description}</p>
      <ul>
        {/* maps over the array of books in the Fellowship of the Ring volume. */}
        {volume1.books.map((book, index) => (
          <li key={index}>
            {/* the key={index} attribute is used to provide a unique key to each <li> element, which is necessary for React to efficiently update the list when it changes. */}
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={volume1.cover}
        alt={`${volume1.title}`}
        width={140}
        height={230}
      />
      <br />
      <Link href={`/volumes/${volumes[1].slug}`}>Next</Link>
    </>
  );
}

// Import the volumes array from lib/data.js and find the data for each volume. You can identify each volume by the slug property, which acts like an ID. (Use volumes.find(({slug}) => slug === "the-fellowship-of-the-ring") to find the book with the slug the-fellowship-of-the-ring.)

// Each detail page should have the following content:

// A link "← All Volumes" that links back to the overview page (Link)
// The title of the book (h1)
// The description of the book (p)
// An unordered list of the books contained in the volume (ul and li)
// Each book should show its ordinal number and title
// Bonus: Previous and Next Volume Links

// Add links to the previous and next volume to the bottom of the detail pages. If there is no previous or next volume, do not render the link.
