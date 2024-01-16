import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import Tab from "./components/Tab";

function App() {
  return (
    <>
      <Header title="Journal" />
      <Tab />
      <Entry />
      <Footer title="Journal App" date={2024} />
    </>
  );
}

export default App;
