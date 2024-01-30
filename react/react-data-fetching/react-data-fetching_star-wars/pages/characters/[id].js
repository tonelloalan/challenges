import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router"; // Import useRouter from next/router

// Fetcher function to handle data fetching with error checking
const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export default function Character() {
  // Use the useRouter hook to access the id from router.query
  const router = useRouter();
  const { id } = router.query;

  // Use the useSWR hook to fetch data from the Star Wars API
  const { data, error } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

  // Loading state: if data is not available yet
  if (!data && !error) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  // Error state: if there's an issue with fetching data
  if (error) {
    return (
      <Layout>
        <p>Error: {error.message}</p>
      </Layout>
    );
  }

  // Render the Card component with fetched data
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
