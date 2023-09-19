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
  const [playlists, setPlaylists] = useState(null)
  const [pages, setPages] = useState(0)
  const [playlistId, setplaylistId] = useState(null)
  const [tracks, setTracks] = useState(null)
  const [searchString, setSearchString] = useState() //use instead of onsubmit 
  const isFirstRef = useRef(true)
  const isFirstTrack = useRef(true)
  
  const search = (value) => {
    setSearchString(value)
  }

  const tracklistId = (value) => {
    setplaylistId(value)
  }

  useEffect(() =>{
    if (isFirstTrack.current) {
    isFirstTrack.current = false;
    return;
    }
    
    Spotify.tracklist(playlistId)
      .then(tracks => {
        console.log(tracks)
      })
  }, [playlistId])

  useEffect(() => {
    if (isFirstRef.current) {
    isFirstRef.current = false;
    return;
    }
      
    Spotify.playlistsearch(searchString)
      .then(list => {
        setPages(list[1])
        return list[0].filter(filterlist => filterlist.description !== "")
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
    <React.Fragment>
      <Searchform search={search} />
      { playlists && <Table playlists={playlists} pages={pages} tracklistId={tracklistId} compact={true}/> }
      { tracks && <Table tracks={tracks} compact={true}/> }
    </React.Fragment>
    </div>
  )
};

export default App;