// import
// Tab
// Badge

// function should have two tabs, each with a badge with the number of entries.

import Tab from "./Tab";

export default function TabBar() {
  return (
    <div className="tabBar">
      <Tab className="activeTab" badgeName="All Entries" entriesNumber={3} />
      <Tab className="notActiveTab" badgeName="Favorites" entriesNumber={1} />
    </div>
  );
}
