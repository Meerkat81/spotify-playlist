import React, { useState, useEffect, useRef } from "react"
import Searchform from "./components/form"
import Table from "./components/table"
import Spotify from "./util/Searches"
import './App.css'

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
        .then(list => {
          return list.filter(filterlist => filterlist.description !== "")
        })
        .then(list => {
          setPlaylists(list.map(element => ({
              key: element,
              name: element.description,
              track_count: element.tracks.total,
              id: element.id,
          })))
        })
      }, [searchString]);

  return (
    <div className="App">
      <Searchform search={search} />
      <Table playlists={playlists} compact={true}/>
    </div>
  )
};

export default App;