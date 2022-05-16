import React from 'react'
import searchicon from "../Asset/search.svg";



function Search() {
  return (
    <>
      <div className="row py-4 p-4 search__text ">
          <div className="search__">

          </div>
        <input
          type={"text" } 
          className={`form-control  search__text p-2 shadow`}
          placeholder={`Search Anything... ` }
        />
      
      </div>
    </>
  );
}

export default Search