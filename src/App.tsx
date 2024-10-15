import React, { KeyboardEvent, useState } from "react";

import { getSearch } from "./apis/services/search-service";
import { GitHubUser } from "./types/GitHubUser";

import List from "./components/List";
import Header from "./components/Header";

import "./index.css";

function App() {
  const [searchResult, setSearchResult] = useState<GitHubUser[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const getSearchResult = async (keyword: string) => {
    if (!keyword) {
      alert("Please enter something to search");
      return;
    }

    setLoading(true);

    const response = await getSearch(keyword);
    setSearchResult(response?.data?.items);

    setSearchKeyword("");
    setLoading(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getSearchResult(searchKeyword)
    }
  };

  return (
    <div id="app">
      <div className="container">
        <Header
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          getSearchResult={getSearchResult}
          onKeyDown={onKeyDown}
        />
        {!loading ? <List searchResult={searchResult} /> : <h3>Loading...</h3>}
      </div>
    </div>
  );
}

export default App;
