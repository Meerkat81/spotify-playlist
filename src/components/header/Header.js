import React from "react";
import { Container, Menu, Search } from "semantic-ui-react";
import SearchForm from "../SearchForm";
function Header() {
  return (
    <Container>
      <Menu fixed="top" inverted>
        <Menu.Item as="a" header>
          Spotify Playlist Fun
        </Menu.Item>
        <Menu.Item>
          <Search></Search>
        </Menu.Item>
      </Menu>
    </Container>
  );
}

export default Header;
