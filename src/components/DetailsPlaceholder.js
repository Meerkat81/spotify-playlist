import React from "react";
import { Segment, Header, Icon, Dimmer, Loader } from "semantic-ui-react";

function DetailsPlaceholder({ children, isLoading, icon }) {
  return (
    <Segment placeholder style={{ height: "100%" }}>
      <Dimmer active={isLoading}>
        <Loader active={isLoading} />
      </Dimmer>
      <Header icon>
        <Icon name={icon} circular />
        {children}
      </Header>
    </Segment>
  );
}

export default DetailsPlaceholder;
