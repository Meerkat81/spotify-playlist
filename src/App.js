import React from "react"
import logo from './logo.svg'
import Searchform from "./components/form"
import Spotify from "./util/Spotify"
import './App.css'
//Show Search Box
//TODO: Query Spotify playlists
//TODO: List play list
//TODO: List Songs of playlist
//TODO: Break songs up by category into line graph

// Define the string
var decodedStringBtoA = '74a44c825ddd4457a120b0f621682e21:c6e6d2d6f9a54077982feb556cd75375';

// Encode the String
var encodedStringBtoA = btoa(decodedStringBtoA);
console.log(encodedStringBtoA);
var decoded = atob(encodedStringBtoA)
console.log(decoded)

const App = (props) => {
    return (
      <div className="App">
        <Searchform />
      </div>
    )
}

export default App;
