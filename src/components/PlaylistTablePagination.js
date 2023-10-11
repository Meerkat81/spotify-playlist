import React from "react";
import { Table, Menu, Icon, Pagination } from "semantic-ui-react";
function PlayListTablePagination({ pages }) {
  console.log("init", pages);
  return (
    <Table.Row>
      <Table.HeaderCell>1 / </Table.HeaderCell>
      <Table.HeaderCell colSpan="3">
        {/* <Menu floated="right" pagination>
          <Menu.Item as="a" icon>
            <Icon name="chevron left" />
          </Menu.Item>
          <Menu.Item as="a" icon>
            <Icon name="chevron right" />
          </Menu.Item>
        </Menu> */}
        <Pagination defaultActivePage={5} totalPages={10} />
      </Table.HeaderCell>
    </Table.Row>
  );
}

export default PlayListTablePagination;
