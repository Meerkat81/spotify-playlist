import React from "react";
import { Container, Menu } from "semantic-ui-react";
function Header({ children, onTitleClick }) {
  return (
    <Container>
      <Menu fixed="top" inverted>
        <Menu.Item as="a" header onClick={onTitleClick}>
          Spotify Playlist Data
        </Menu.Item>
        <Menu.Item>{children}</Menu.Item>
      </Menu>
    </Container>
  );
}

export default Header;
