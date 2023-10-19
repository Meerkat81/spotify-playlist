import React from "react";
import { Container, Menu, Search } from "semantic-ui-react";
function Header({ children }) {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item as="a" header>
        Spotify Playlist Fun
      </Menu.Item>
      <Menu.Item>{children}</Menu.Item>
    </Menu>
  );
}

export default Header;
