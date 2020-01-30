import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

// Loading message component
const Loader = () => (
  <Message icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header>Loading</Message.Header>
      Plase, wait...
    </Message.Content>
  </Message>
);

export default Loader;
