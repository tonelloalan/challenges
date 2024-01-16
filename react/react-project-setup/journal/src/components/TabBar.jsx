// import
// Tab
// Badge

// function should have two tabs, each with a badge with the number of entries.

import Tab from "./Tab";

export default function TabBar() {
  return (
    <>
      <Tab badgeName="All Entries" entriesNumber={3} />
      <Tab badgeName="Favorites" entriesNumber={1} />
    </>
  );
}
