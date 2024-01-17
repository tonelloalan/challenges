// import
// Tab
// Badge

// function should have two tabs, each with a badge with the number of entries.

import Tab from "./Tab";

export default function TabBar() {
  return (
    <div className="tabBar">
      <Tab
        tabStyle={{ color: "var(--color-nemo)" }}
        badgeStyle={{
          backgroundColor: "var(--color-nemo)",
          color: "var(--color-foam)",
          marginLeft: "10px",
          padding: "2px 10px",
          borderRadius: "15px",
        }}
        className="activeTab"
        badgeName="All Entries"
        entriesNumber={3}
      />
      <Tab
        tabStyle={{ color: "var(--color-granite)" }}
        badgeStyle={{
          backgroundColor: "var(--color-water-10)",
          color: "var(--color-granite)",
          marginLeft: "10px",
          padding: "2px 10px",
          borderRadius: "15px",
        }}
        className="notActiveTab"
        badgeName="Favorites"
        entriesNumber={1}
      />
    </div>
  );
}
