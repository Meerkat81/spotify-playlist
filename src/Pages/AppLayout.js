import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import SearchForm from "../components/SearchForm";
import PlayListTable from "../components/PlayListTable";
import DetailsPlaceholder from "../components/DetailsPlaceholder";
import {
  playListSearch,
  playListTablePagination,
  getPlayListDetails,
} from "../modules/spotifyApi";
import Chart from "../components/chart/Chart";
import Header from "../components/header/Header";
function AppLayout() {
  const [query, setQuery] = useState("");
  const [playlists, setPlaylists] = useState();
  const [playlistId, setPlaylistId] = useState(null);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState({});
  const [pageSelection, setPageSelection] = useState();
  const [playlistDetail, setPlayListDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

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
        setIsLoadingDetails(true);
        const results = await getPlayListDetails(playlistId);
        setPlayListDetail(results);
        if (results instanceof Error) {
          setError(results.message);
        } else {
          setIsLoadingDetails(false);
        }
      }
      if (playlistId) CallSpotifyDetails();
    },
    [playlistId]
  );

  useEffect(
    function () {
      async function callSpotify() {
        setIsLoading(true);
        setError("");
        const results = await playListSearch(query);
        const { limit, next, offset, previous, total } = results.playlists;
        setPages({ limit, next, offset, previous, total });
        setPlaylists(results.playlists.items);

        if (results instanceof Error) {
          setError(results.message);
        } else {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setPlaylists("");
        setError("");
        return;
      }
      callSpotify();
    },
    [query]
  );
  return (
    <>
      <Header>
        <SearchForm query={query} setQuery={setQuery} />
      </Header>
      <Container
        style={{
          marginTop: "6em",
          height: "calc(100vh - 7.2rem - 3 * 2.4rem)",
        }}
      >
        <Grid>
          <Grid.Column width={10}>
            {!playlists && (
              <DetailsPlaceholder isLoading={isLoading} icon="music">
                Search for playlists{" "}
              </DetailsPlaceholder>
            )}
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
            {playlists && !playlistDetail && (
              <DetailsPlaceholder
                isLoading={isLoadingDetails}
                icon="info circle"
              >
                Select a Play list to see details
              </DetailsPlaceholder>
            )}
            {playlistDetail && <Chart playlistDetail={playlistDetail} />}
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}

export default AppLayout;
