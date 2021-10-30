import React from "react";
import SearchField from "react-search-field";

function Search() {
  return (
    <div  style={{marginLeft: "650px"}}>
      <h3 style={{marginLeft: "-650px"}}> Search Field</h3>
      <SearchField placeholder="Search..." classNames="test-class"/>
    </div>
  );
}

export default Search;
