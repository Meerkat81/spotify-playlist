import React, { useState, useEffect } from "react";
import Searchform from "./components/form";
import Table from "./components/table";
import { playListSearch } from "./modules/spotifyApi";

import "./App.css";

//Show Search Box
//Get Spotify token
//Query Spotify playlists
//TODO: Show play list
//TODO: List Songs of playlist
//TODO: Break songs up by category into line graph

const App = (props) => {
  const [playlists, setPlaylists] = useState(null);
  const [pages, setPages] = useState(0);
  const [playlistId, setplaylistId] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [query, setQuery] = useState(null); //use instead of onsubmit

  const [error, setError] = useState(null);
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
        try {
          const results = await playListSearch(query);
          // if (results instanceof Error) {
          //   console.log(results);
          console.log("19", results.Error);
        } catch (err) {
          console.log("lol", err);
          setError(err);
        }

        //   if (playListsCall.message) throw new Error(playListsCall.error);
        // } catch (err) {
        //   console.log(err);
        //   setError(err.message);
        // }
        // .then((list) => {
        //   setPages(list[1]);
        //   return list[0].filter((filterlist) => filterlist.description !== "");
        // })
        // .then((list) => {
        //   setPlaylists(
        //     list.map((element) => ({
        //       key: element,
        //       name: element.description,
        //       track_count: element.tracks.total,
        //       id: element.id,
        //     }))
        //   );
        // });
      }
      if (query) callSpotify();
    },
    [query]
  );

  return (
    <div className="App">
      <React.Fragment>
        <Searchform query={query} setQuery={setQuery} />
        <ErrorMessage messsage={error} />
        {playlists && (
          <Table
            playlists={playlists}
            pages={pages}
            tracklistId={tracklistId}
            compact={true}
          />
        )}
        {tracks && <Table tracks={tracks} compact={true} />}
      </React.Fragment>
    </div>
  );
};
function ErrorMessage({ message }) {
  return (
    <div className="error">
      <span>{message}</span>
    </div>
  );
}
export default App;
