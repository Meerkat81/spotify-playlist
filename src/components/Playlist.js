import { Table } from "semantic-ui-react";
function Playlist({ playlists, tracklistId }) {
  return (
    <Table.Body>
      {playlists.map((playlist) => {
        let image = playlist.images[0].url;

        return (
          <Table.Row key={playlist.id} onClick={() => console.log(playlist.id)}>
            <Table.Cell>
              <img className="playList-image" src={image} atl={playlist.name} />
            </Table.Cell>
            <Table.Cell>{playlist.name}</Table.Cell>
            <Table.Cell>{playlist.tracks.total}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  );
}

export default Playlist;
