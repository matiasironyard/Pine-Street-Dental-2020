import React from 'react';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
//  Loading message component
const AboutSegment = () => {
  const backgroundImage =
    'https://www.mydentistforlife.com/wp-content/uploads/2019/04/Cosmetic-Dentistry-banner-1024x416.jpg';
  return (
    <Segment
      id="about"
      placeholder
      style={{
        padding: '30px',
        minHeight: '350px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }}
    >
      <Grid columns={2} stackable textAlign="center">
        <Grid.Row verticalAlign="middle">
          <Grid.Column
            width={6}
            style={{
              backgroundColor: 'rgba(255,255,255,.75)',
              minHeight: '80px',
              padding: '15px'
            }}
          >
            <Header icon>
              40 Years Of Smiles
              <Header.Subheader>
                Pine Street Dental has been providing general dentistry to the
                family and friends of Spartanburg and the Upstate for over 40
                years.
              </Header.Subheader>
              <Header.Subheader>
                Proporcionando odontología general a la familia y amigos de
                Spartanburg y el norte del estado por más de 40 años.
              </Header.Subheader>
            </Header>
            <Button
              basic
              color="grey"
              as="a"
              href="#services"
              style={{ margin: '15px auto' }}
            >
              Our Services
            </Button>
          </Grid.Column>

          <Grid.Column width={10} />
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default AboutSegment;
