import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// We define a fetcher function that checks if the response is okay.
// If the response is not okay, it throws an error with a message.
// We use this fetcher function in the useSWR hook.
const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(`Failed to fetch data: ${response.statusText}`);
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return data;
};

// We import useSWR from the SWR library.
// We use the useSWR hook to fetch data from the specified URL ("https://api.wheretheiss.at/v1/satellites/25544").
// useSWR provides us with data, error, isLoading, and isValidating as part of its response.
// We use these states to handle loading and error states.
// In the return statement, we directly use data.longitude and data.latitude instead of relying on a separate state.

export default function ISSTracker() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    URL,
    fetcher,
    {
      refreshInterval: 5000, // Set refresh interval to 5 seconds (in milliseconds)
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // We check for isValidating and display a loading message if it's true.
  // We check for error and display an error message if it exists.
  // If there is no validation or error, we render the Map and Controls components with the fetched data.

  // We use the spread operator (...) to pass all properties of the data object as separate props to both Map and Controls components.
  // This way, you can keep the child components unchanged while still passing the required coordinates.

  return (
    <main>
      {isValidating && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!isValidating && !error && (
        <>
          <Map {...data} />
          <Controls {...data} onRefresh={() => mutate()} />
        </>
      )}
    </main>
  );
}
