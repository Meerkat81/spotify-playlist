import React, { useState, useEffect } from "react";
import { Grid, Segment } from "semantic-ui-react";
import SearchForm from "../features/playlist/SearchForm";
import PlayListTable from "../features/playlist/PlayListTable";
import DetailsPlaceholder from "./DetailsPlaceholder";
import {
  playListSearch,
  playListTablePagination,
  getPlayListDetails,
} from "../services/spotifyApi";
import Chart from "../features/chart/Chart";
import Header from "./Header";
import ErrorMessage from "./ErrorMessage";
import Footer from "./Footer";
function AppLayout() {
  const [query, setQuery] = useState("");
  const [playlists, setPlaylists] = useState();
  const [playlistId, setPlaylistId] = useState(null);
  const [error, setError] = useState("");
  const [pages, setPages] = useState({});
  const [pageSelection, setPageSelection] = useState();
  const [playlistDetail, setPlayListDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  function handlePaginationClick(direction) {
    setPageSelection(direction.activePage);
  }
  function handlePlayListClick(id) {
    setPlaylistId(id);
  }
  function handleTitleClick() {
    setQuery("");
    setPlaylists();
  }
  //pagination
  useEffect(
    function () {
      async function CallSpotify() {
        setError("");
        const results = await playListTablePagination(pageSelection, query);
        if (results instanceof Error) {
          setError(results.message);
        } else {
          setPlaylists(results.playlists.items);
        }
      }
      if (pageSelection) CallSpotify();
    },
    [pageSelection, query]
  );
  //details
  useEffect(
    function () {
      async function CallSpotifyDetails() {
        setError("");
        setIsLoadingDetails(true);
        const results = await getPlayListDetails(playlistId);

        if (results instanceof Error) {
          setError(results.message);
          setIsLoadingDetails(false);
        } else {
          setPlayListDetail(results);
          setIsLoadingDetails(false);
        }
      }
      if (playlistId) CallSpotifyDetails();
    },
    [playlistId]
  );
  //query
  useEffect(
    function () {
      async function callSpotify() {
        setIsLoading(true);
        setError("");
        const results = await playListSearch(query);
        if (results instanceof Error) {
          setError(results.message);
          setIsLoading(false);
        } else {
          const { limit, next, offset, previous, total } = results.playlists;
          setPages({ limit, next, offset, previous, total });
          setPlaylists(results.playlists.items);
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
      <Header onTitleClick={handleTitleClick}>
        <SearchForm query={query} setQuery={setQuery} />
      </Header>

      <Grid
        inverted
        style={{
          marginTop: "2em",
          height: "calc(100vh - 7.2rem - 3 * 2.4rem)",
          padding: "55px",
        }}
      >
        <Grid.Column width={8}>
          {!playlists && (
            <DetailsPlaceholder isLoading={isLoading} icon="music">
              <span style={{ color: "green" }}>Search Artist Up Top</span>
            </DetailsPlaceholder>
          )}
          {playlists && !error && (
            <PlayListTable
              pages={pages}
              playlists={playlists}
              onPageDirectionClick={handlePaginationClick}
              onPlayListClick={handlePlayListClick}
            />
          )}
        </Grid.Column>

        <Grid.Column width={4} style={{ marginTop: "40px" }}>
          {playlists && !playlistDetail && (
            <DetailsPlaceholder isLoading={isLoadingDetails} icon="info circle">
              <span style={{ color: "green" }}>
                Select a playlist to the left to see details
              </span>
            </DetailsPlaceholder>
          )}
          {playlistDetail && !error && (
            <Chart playlistDetail={playlistDetail} />
          )}
        </Grid.Column>
      </Grid>
      {error && <ErrorMessage />}
      <Footer />
    </>
  );
}

export default AppLayout;
