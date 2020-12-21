import React from "react"
import Spotify from "../util/Spotify"

import { Button, Form } from 'semantic-ui-react'

const Searchform = (props) => {
  return (
    <Form onSubmit={Spotify}>
      <Form.Field>
        <label>Playlist</label>
        <input placeholder='Playlist' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default Searchform