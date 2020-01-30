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
            <Header style={{ paddingTop: '15px' }}>
              <span
                style={{
                  textTransform: 'uppercase'
                }}
              >
                40 Years Of Smiles
              </span>
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
          <Grid.Column width={2} />

          <Grid.Column width={8}>
            <blockquote cite="https://www.google.com/maps/contrib/116929363328710895849/reviews/@34.9462678,-81.9152215,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1">
              <p style={{ color: 'white', fontSize: '1.5em' }}>
                {' '}
                "Dr. Figueroa is impressive in his professional and personal
                approach to his patients and his entire staff is Top Notch!"
              </p>
              <footer style={{ color: '#dedede' }}>
                <cite>~ Aldous Huxley</cite>
              </footer>
            </blockquote>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default AboutSegment;
