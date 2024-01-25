import Link from "next/link.js";
import { volumes } from "../../resources/lib/data.js";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);
  if (!currentVolume) {
    return (
      <>
        <h1>This Volume doesn't exist.</h1>
        <Link href="/volumes">← Back to all Volumes</Link>
      </>
    );
  }

  const { title, description, year } = currentVolume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {/* maps over the array of books in the Fellowship of the Ring volume. */}
        {{ title }.books.map((book, index) => (
          <li key={index}>
            {/* the key={index} attribute is used to provide a unique key to each <li> element, which is necessary for React to efficiently update the list when it changes. */}
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={{ title }.cover}
        alt={`${{ title }.title}`}
        width={140}
        height={230}
      />
      <br />
      <Link href={`/volumes/${{ title }.slug}`}>Next</Link>
    </>
  );
}

// const currentMovie = movies.find((movie) => movie.slug === slug);

//   if (!currentMovie) {
//     return (<><h1>This movie doesnt exist</h1>;
// <Link href="/movies">← Back to all movies</Link>
//     </>)
//   }

//   const { title, description, year } = currentMovie;

//   return (
//     <>
//       <h1>
//         {title} <small>{year}</small>
//       </h1>
//       <p>{description}</p>
//       <Link href="/movies">← Back to all movies</Link>
//     </>
//   );
// }
