import useSWR from "swr"; // import useSWR hook

const url = "/api/products"; // create variable to store address of api url
const fetcher = (...args) => fetch(...args).then((res) => res.json()); // create fetcher and fetch the api url

// create function to return the data fetched from the API:
export default function ProductList() {
  const { data, isLoading, error } = useSWR(url, fetcher); // destructured the API object with useSWR

  if (isLoading) {
    return <h1>Loading Product List...</h1>;
  }

  if (error) {
    return;
  }

  // Map over the fetched data object to create a list of all products where you display their information.
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <a href={`/products/${product.id}`}>{product.name}</a>
        </li>
      ))}
    </ul>
  );
}
