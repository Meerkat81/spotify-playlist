import React from "react";
import { Table, Pagination } from "semantic-ui-react";
function PlayListTablePagination({ pages, onPageDirectionClick }) {
  const numberOfPages = Math.ceil(pages.total / pages.limit);
  return (
    <Table.Row>
      <Table.HeaderCell colSpan="3">
        <Pagination
          totalPages={numberOfPages}
          siblingRange={5}
          onPageChange={(e, d) => onPageDirectionClick(d)}
        />
      </Table.HeaderCell>
    </Table.Row>
  );
}

export default PlayListTablePagination;
