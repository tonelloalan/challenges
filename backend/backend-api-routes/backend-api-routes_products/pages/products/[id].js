import { useRouter } from "next/router"; // import the useRouter hook to access the id query parameter from router.query
import useSWR from "swr";

// create function to return the data fetched from the API:

export default function Product() {
  const router = useRouter(); // assigned useRouter hook to a variable named router
  const { id } = router.query; // access the id query parameter from router.query
  const url = `/api/products/${id}`; // create variable to store address of api url

  const fetcher = (...args) => fetch(...args).then((res) => res.json()); // create fetcher and fetch the api url

  const { data, isLoading, error } = useSWR(url, fetcher); // destructured the API object with useSWR
  if (isLoading) {
    return <h1>Loading Product...</h1>;
  }

  if (error) {
    return;
  }

  // Display the product information:
  // data.id = product's id
  // data.name = product's name
  return (
    <>
      <p>ID: {data.id}</p>
      <h1>{data.name}</h1>
      <a href="/products">← Back to Product List</a>
    </>
  );
}
