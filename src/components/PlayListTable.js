import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import Playlist from "./Playlist";
import PlayListTablePagination from "./PlaylistTablePagination";
function PlayListTable({ playlists, pages, tracklistId }) {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Playlist</Table.HeaderCell>
          <Table.HeaderCell>Track Count</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Playlist playlists={playlists} tracklistId={tracklistId} />
      <Table.Footer>
        <PlayListTablePagination />
        {/* <Table.Row>
          <Table.HeaderCell>1 / {pages} </Table.HeaderCell>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row> */}
      </Table.Footer>
    </Table>
  );
}

export default PlayListTable;
