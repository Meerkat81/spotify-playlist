import React, { useState, useEffect } from "react";
import { Grid, Container, Loader } from "semantic-ui-react";
import SearchForm from "../components/SearchForm";
import PlayListTable from "../components/PlayListTable";
import DetailsPlaceholder from "../components/DetailsPlaceholder";
import {
  playListSearch,
  playListTablePagination,
  getPlayListDetails,
} from "../modules/spotifyApi";

function AppLayout() {
  const [query, setQuery] = useState(null);
  const [playlists, setPlaylists] = useState();
  const [playlistId, setPlaylistId] = useState(null);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState({});
  const [pageSelection, setPageSelection] = useState();
  const [playlistDetail, setPlayListDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const search = (value) => {
    setQuery(value);
  };

  useEffect(
    function () {
      async function CallSpotify() {
        const results = await playListTablePagination(pageSelection, query);
        setPlaylists(results.playlists.items);
      }
      if (pageSelection) CallSpotify();
    },
    [pageSelection]
  );
  function handlePaginationClick(direction) {
    setPageSelection(direction.activePage);
  }
  function handlePlayListClick(id) {
    setPlaylistId(id);
  }

  useEffect(
    function () {
      async function CallSpotifyDetails() {
        const results = await getPlayListDetails(playlistId);
        setPlayListDetail(results);
        if (results instanceof Error) {
          console.log("lol", results.message);
          setError(results.message);
        } else {
          // console.log(results);
        }
      }
      if (playlistId) CallSpotifyDetails();
    },
    [playlistId]
  );

  useEffect(
    function () {
      async function callSpotify() {
        if (query.length < 3) return;

        const results = await playListSearch(query);
        // const {items: playlist, }
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
    <Container
      style={{ marginTop: "3em", height: "calc(100vh - 7.2rem - 3 * 2.4rem)" }}
    >
      <SearchForm query={query} setQuery={setQuery} />
      <Grid>
        <Grid.Column width={10}>
          {!playlists && !isLoading && (
            <DetailsPlaceholder>Search for playlists </DetailsPlaceholder>
          )}
          {}
          {playlists && (
            <PlayListTable
              pages={pages}
              playlists={playlists}
              onPageDirectionClick={handlePaginationClick}
              onPlayListClick={handlePlayListClick}
            />
          )}
        </Grid.Column>
        <Grid.Column width={6}>
          <DetailsPlaceholder>
            Select a Play list to see details
          </DetailsPlaceholder>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default AppLayout;
