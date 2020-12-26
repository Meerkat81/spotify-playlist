import React, { useState } from "react"
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
  const [playlists, setPlaylists] = useState([
      {
        name: "Awesome Dude",
        track_count: "150",
        link:"yahoo.com"
      },
      {
        name:"How about that",
        track_count:"123",
        link: "google.com"
      },
      ])
    
    async function search(searchTerm){
      await setPlaylists(Spotify.playlistsearch())
    };
  
  
    return (
      <div className="App">
        <Searchform search={search} />
        <Table playlists={playlists}/>
      </div>
    )
};

export default App;
