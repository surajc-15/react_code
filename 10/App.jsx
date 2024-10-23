import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
