import React from "react";
import { Segment, Header, Icon, Dimmer } from "semantic-ui-react";

function DetailsPlaceholder({ children, isLoading, icon }) {
  return (
    <Segment placeholder loading={isLoading}>
      <Header icon>
        <Icon name={icon} circular />
        {children}
      </Header>
    </Segment>
  );
}

export default DetailsPlaceholder;
