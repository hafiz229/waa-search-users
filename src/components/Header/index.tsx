import React, { KeyboardEvent } from 'react'

interface HeaderType {
    searchKeyword: string;
    setSearchKeyword: (e: string) => void;
    getSearchResult: (e: string) => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Header : React.FC<HeaderType> = ({searchKeyword, setSearchKeyword, getSearchResult, onKeyDown}) => {
  return (
    <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e?.target?.value)}
              onKeyDown={onKeyDown}
            />
            &nbsp;
            <button onClick={() => getSearchResult(searchKeyword)}>
              Search
            </button>
          </div>
        </section>
  )
}

export default Header