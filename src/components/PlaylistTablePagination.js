import React from "react";
import { Table, Pagination } from "semantic-ui-react";
function PlayListTablePagination({ pages }) {
  console.log("init", pages);
  const numberOfPages = Math.ceil(pages.total / pages.limit);
  console.log(numberOfPages);
  return (
    <Table.Row>
      <Table.HeaderCell colSpan="3">
        <Pagination totalPages={numberOfPages} siblingRange={5} />
      </Table.HeaderCell>
    </Table.Row>
  );
}

export default PlayListTablePagination;
