import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const PlayListTable = () => {
  return(
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Playlist</Table.HeaderCell>
          <Table.HeaderCell>Track Count</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>That 90s List</Label>
          </Table.Cell>
          <Table.Cell>30</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Totally Wicked</Table.Cell>
          <Table.Cell>55</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Far Out Dude</Table.Cell>
          <Table.Cell>50</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}


export default PlayListTable
