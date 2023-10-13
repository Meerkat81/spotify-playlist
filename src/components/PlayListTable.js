import React from "react";
import { Table } from "semantic-ui-react";
import Playlist from "./Playlist";
import PlayListTablePagination from "./PlaylistTablePagination";
import DetailsPlaceholder from "./DetailsPlaceholder";
function PlayListTable({
  playlists,
  onPageDirectionClick,
  pages,
  onPlayListClick,
}) {
  return (
    <Table celled small>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Playlist</Table.HeaderCell>
          <Table.HeaderCell>Track Count</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Playlist playlists={playlists} onPlayListClick={onPlayListClick} />
      <Table.Footer>
        <PlayListTablePagination
          onPageDirectionClick={onPageDirectionClick}
          pages={pages}
        />
      </Table.Footer>
    </Table>
  );
}

export default PlayListTable;
