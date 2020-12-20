import React from "react"
import { Button, Form } from 'semantic-ui-react'

const Searchform = () => (
  <Form>
    <Form.Field>
      <label>Playlist</label>
      <input placeholder='Playlist' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default Searchform