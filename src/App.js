import React, { useState, useEffect, useRef } from "react"
import Searchform from "./components/form"
import Table from "./components/table"
import Spotify from "./util/Searches"
import './App.css'
import { useStorageState } from "react-storage-hooks"

//Show Search Box
//Get Spotify token
//Query Spotify playlists
//TODO: Show play list
//TODO: List Songs of playlist
//TODO: Break songs up by category into line graph

const App = (props) => {
  const [playlists, setPlaylists] = useState([])
  const [searchString, setSearchString] = useState() //use instead of onsubmit 
  const isFirstRef = useRef(true);
  
  const search = (value) => {
    setSearchString(value)
  }

  useEffect(() => {
      if (isFirstRef.current) {
      isFirstRef.current = false;
      return;
      }
      
      Spotify.playlistsearch(searchString)
        .then(val => {
          setPlaylists(val.map(element => ({
              name: element.description,
              track_count: element.tracks.total,
          })))
        })
      }, [searchString]);

  return (
    <div className="App">
      <Searchform search={search}/>
      <Table playlists={playlists}/>
    </div>
  )
};

export default App;