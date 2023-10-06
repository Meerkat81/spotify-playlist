import React from "react";
import { Button, Form } from "semantic-ui-react";

function SearchForm({ query, setQuery }) {
  return (
    <Form onSubmit={(event) => setQuery(event.target.term.value)}>
      <Form.Field>
        <label>Playlist</label>
        <input name="term" placeholder="Search Playlists" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default SearchForm;
