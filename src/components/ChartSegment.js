import React from "react";
import { Segment, Sticky } from "semantic-ui-react";

function ChartSegment({ children }) {
  return (
    <Sticky style={{ marginTop: "6em" }}>
      <Segment>{children}</Segment>
    </Sticky>
  );
}

export default ChartSegment;
