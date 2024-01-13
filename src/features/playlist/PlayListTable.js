import React from "react";
import { Container, Header, Table } from "semantic-ui-react";
import Playlist from "./Playlist";
import PlayListTablePagination from "./PlaylistTablePagination";
function PlayListTable({
  playlists,
  onPageDirectionClick,
  pages,
  onPlayListClick,
}) {
  return (
    <>
      <Container>
        <Header size="large">Select a playlist</Header>
        <Table columns={3} celled compact singleLine={false} textAlign="left">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}></Table.HeaderCell>
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
      </Container>
    </>
  );
}

export default PlayListTable;
