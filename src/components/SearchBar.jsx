import React from "react";
import { Container, Form } from 'semantic-ui-react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="ui container">
      <form className="ui form">
        <fieldset>
          <label id="filter">Filter</label>
          <input
            id="filterInput"
            type="text"
            placeholder="filter"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBar;
