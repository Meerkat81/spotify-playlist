import React from "react";
import { Button, Form } from "semantic-ui-react";

function SearchForm({ query, setQuery }) {
  return (
    <Form onSubmit={(event) => setQuery(event.target.term.value)}>
      <Form.Field>
        <label>Playlist</label>
        <input
          name="term"
          placeholder="Search Playlists"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </Form.Field>
    </Form>
  );
}

export default SearchForm;
