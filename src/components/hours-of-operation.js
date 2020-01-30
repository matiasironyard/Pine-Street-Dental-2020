import React from 'react';
import { Header, Table } from 'semantic-ui-react';

const HoursOfOperation = () => (
  <Table compact basic celled basic="very">
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Monday</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>8:30 - 1:00 / 2:00 - 5:00 </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Tuesday</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>8:30 - 1:00 / 2:00 - 5:00 </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Wednesday</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>8:30 - 1:00 / 2:00 - 5:00 </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Thursday</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>8:30 - 1:00 / 2:00 - 5:00 </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Friday</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Closed</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Saturday</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Closed</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>Sunday</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Closed</Table.Cell>
      </Table.Row>
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
    </Table.Body>
  </Table>
);

export default HoursOfOperation;
