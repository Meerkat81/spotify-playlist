import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import SearchForm from "../components/SearchForm";
import PlayListTable from "../components/PlayListTable";
import { playListSearch } from "../modules/spotifyApi";
function AppLayout() {
  const [query, setQuery] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [playlistId, setplaylistId] = useState(null);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState(null);
  const search = (value) => {
    setQuery(value);
  };
  const tracklistId = (value) => {
    setplaylistId(value);
  };

  useEffect(
    function () {
      console.log("this first run");
      function help() {
        console.log("first run ran again");
      }
      help();
    },
    [playlistId]
  );

  useEffect(
    function () {
      async function callSpotify() {
        if (query.length < 3) return;

        const results = await playListSearch(query);

        setPlaylists(results[0]);

        if (results instanceof Error) {
          console.log("lol", results.message);
          setError(results.message);
        } else {
          // console.log(results);
        }
      }

      if (query) callSpotify();
      return function () {};
    },
    [query]
  );

  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <SearchForm query={query} setQuery={setQuery} />
          {playlists && !error && <PlayListTable playlists={playlists} />}
        </Grid.Column>
        <Grid.Column width={9}>LayoutLayoutLayoutLayout</Grid.Column>
      </Grid>
    </Container>
  );
}

export default AppLayout;
