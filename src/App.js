import React, { useState } from "react"
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
  
 
  function search(searchTerm){
    let spotlist = Spotify.playlistsearch(searchTerm)
    let tablelist = []
    spotlist.then(val =>{
      val.forEach(element =>{
        tablelist.push(
          { name: element.description,
            track_count: element.tracks.total,
          })
      } 
    )})
    setPlaylists(tablelist)
  };

  return (
    <div className="App">
      <Searchform search={search}/>
      <Table playlists={playlists}/>
    </div>
  )
};

export default App;


//console.log(val[0].description)