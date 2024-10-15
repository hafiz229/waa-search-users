import React from 'react'

interface HeaderType {
    searchKeyword: string;
    setSearchKeyword: (e: string) => void;
    getSearchResult: (e: string) => void;
}

const Header : React.FC<HeaderType> = ({searchKeyword, setSearchKeyword, getSearchResult}) => {
  return (
    <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e?.target?.value)}
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