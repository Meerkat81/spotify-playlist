import React from "react"
//import Spotify from "../util/Searches"

import { Button, Form } from 'semantic-ui-react'

const Searchform = ( {search}  ) => {
  return (
    <Form onSubmit={search}>
      <Form.Field>
        <label>Playlist</label>
        <input placeholder='Playlist' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default Searchform