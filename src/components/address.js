import React from 'react';
import { Header, Table } from 'semantic-ui-react';

const Address = () => (
  <Table basic="very" celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Address</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          <a href="https://www.google.com/maps/place/Pine+Street+Dental,+364+S+Pine+St+suite+a-101,+Spartanburg,+SC+29302/@34.9462678,-81.9152215,17z/data=!4m2!3m1!1s0x8857758753b8b943:0x2d2892b185b97ef5">
            364 S Pine St suite a-101, Spartanburg, SC 29302
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Phone</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          <a href="tel:864-582-5000">864.582.5000</a>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default Address;
