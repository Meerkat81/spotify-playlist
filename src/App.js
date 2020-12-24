import React, { useState} from "react"
import Searchform from "./components/form"
import Spotify from "./util/Searches"
import Table from "./components/table"
import './App.css'
//Show Search Box
//Get Spotify token
//Query Spotify playlists
//TODO: Show play list
//TODO: List Songs of playlist
//TODO: Break songs up by category into line graph

const App = (props) => {
    return (
      <div className="App">
        <Searchform />
        <Table />
      </div>
    )
}

export default App;
