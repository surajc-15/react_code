import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import Header from "./Header";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />

      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        {query === "unmount" ? "" : <CountriesList query={query} />}
      </main>
    </>
  );
}
