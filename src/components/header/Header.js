import React from "react";
import { Container, Menu, Search } from "semantic-ui-react";
function Header({ children }) {
  return (
    <Container>
      <Menu fixed="top" inverted>
        <Menu.Item as="a" header>
          Spotify Playlist Fun
        </Menu.Item>
        <Menu.Item>{children}</Menu.Item>
      </Menu>
    </Container>
  );
}

export default Header;
