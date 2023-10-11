import React, { useState, useEffect } from "react";
import { Segment, Grid } from "semantic-ui-react";
import SearchForm from "../components/SearchForm";
import PlayListTable from "../components/PlayListTable";
import { playListSearch } from "../modules/spotifyApi";
function AppLayout() {
  const [query, setQuery] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [playlistId, setplaylistId] = useState(null);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState({});
  const [pageSelection, setPageSelection] = useState();
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

  function handlePaginationClick(direction) {
    setPageSelection(direction.activePage);
  }

  useEffect(
    function () {
      async function callSpotify() {
        if (query.length < 3) return;

        const results = await playListSearch(query);
        // const {items: playlist, }
        console.log(results.playlists);
        const { limit, next, offset, previous, total } = results.playlists;
        setPages({ limit, next, offset, previous, total });
        setPlaylists(results.playlists.items);

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
    <Segment>
      <Grid columns={2}>
        <Grid.Column width={8}>
          <SearchForm query={query} setQuery={setQuery} />
          {playlists && !error && (
            <PlayListTable
              pages={pages}
              playlists={playlists}
              onPageDirectionClick={handlePaginationClick}
            />
          )}
        </Grid.Column>
        <Grid.Column width={8}>Future Graphs</Grid.Column>
      </Grid>
    </Segment>
  );
}

export default AppLayout;
