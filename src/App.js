import React, { useState, useEffect, useRef } from "react";
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
  const [searchString, setSearchString] = useState(); //use instead of onsubmit
  const isFirstRef = useRef(true);
  const isFirstTrack = useRef(true);
  const [error, setError] = useState(null);
  const search = (value) => {
    setSearchString(value);
  };
  console.log(searchString);
  const tracklistId = (value) => {
    setplaylistId(value);
  };

  useEffect(() => {
    if (isFirstTrack.current) {
      isFirstTrack.current = false;
      return;
    }
  }, [playlistId]);

  useEffect(() => {
    async function callSpotify() {
      try {
        const results = await playListSearch(searchString);
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
    callSpotify();
  }, [searchString]);

  return (
    <div className="App">
      <React.Fragment>
        <Searchform search={search} />
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
