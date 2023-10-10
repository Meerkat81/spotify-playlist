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
      </Table.Footer>
    </Table>
  );
}

export default PlayListTable;
