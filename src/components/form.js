import React from "react"
import Spotify from "../util/Searches"

import { Button, Form } from 'semantic-ui-react'

const Searchform = ({ search }) => {
  return (
    <Form onSubmit={ (event) => search(event.target.term.value)}>
      <Form.Field>
        <label>Playlist</label>
        <input name="term" placeholder = 'Playlist' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default Searchform