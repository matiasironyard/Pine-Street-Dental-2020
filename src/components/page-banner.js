import React from 'react';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import HoursOfOperation from './hours-of-operation';
import OfficeExterior from '../images/officeExterior.jpg';

//  Loading message component
const PageBanner = () => {
  const backgroundImage = OfficeExterior;
  return (
    <Segment
      placeholder
      style={{
        minHeight: '400px',
        padding: '35px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }}
    >
      <Grid columns={2} stackable textAlign="center">
        <Grid.Row>
          <Grid.Column width={10} />

          <Grid.Column
            width={6}
            style={{
              backgroundColor: 'rgba(255, 255,255, .75)',
              padding: '50px 30px'
            }}
          >
            <Header icon style={{ textTransform: 'uppercase' }}>
              Schedule An Appointment
            </Header>
            <HoursOfOperation />
            <Button
              primary
              as="a"
              href="tel:864-582-500"
              style={{ marging: '25px auto !important' }}
            >
              864.582.5000
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default PageBanner;
