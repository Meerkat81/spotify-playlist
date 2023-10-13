import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

function DetailsPlaceholder({ children }) {
  return (
    <Segment placeholder size="large">
      <Header icon>
        <Icon name="pdf file outline" />
        {children}
      </Header>
    </Segment>
  );
}

export default DetailsPlaceholder;
