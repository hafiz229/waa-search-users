import React, { useState } from "react";

import { getSearch } from "./apis/services/search-service";
import { GitHubUser } from "./types/GitHubUser";

import List from "./components/List";
import Header from "./components/Header";

import "./index.css";

function App() {
  const [searchResult, setSearchResult] = useState<GitHubUser[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const getSearchResult = async (keyword: string) => {
    const response = await getSearch(keyword);
    setSearchResult(response?.data?.items);
    setSearchKeyword("");
  };

  return (
    <div id="app">
      <div className="container">
        <Header
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          getSearchResult={getSearchResult}
        />
        <List searchResult={searchResult} />
      </div>
    </div>
  );
}

export default App;
