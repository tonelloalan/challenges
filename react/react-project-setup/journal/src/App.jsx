import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EntryForm from "./components/EntryForm";
import EntriesSection from "./components/EntriesSection";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header title="Journal" />
      <Main />
      <Footer title="Journal App" date={2024} />
    </>
  );
}

export default App;
