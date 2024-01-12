import React from "react";
import { Input } from "semantic-ui-react";

function SearchForm({ query, setQuery }) {
  return (
    <Input
      name="term"
      placeholder="Search an Artist"
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );
}

export default SearchForm;
