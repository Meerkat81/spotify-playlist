import React from "react";
import { Message } from "semantic-ui-react";
function ErrorMessage() {
  return (
    <Message negative>
      <Message.Header>We're sorry something happened</Message.Header>
    </Message>
  );
}

export default ErrorMessage;
