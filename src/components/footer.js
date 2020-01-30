import React from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';
// Location component
const Footer = () => (
  <Segment inverted vertical style={{ padding: '35px' }}>
    <Container>
      <Grid divided inverted stackable columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item>Cleaning</List.Item>
              <List.Item>Exams</List.Item>
              <List.Item>Fillings</List.Item>
              <List.Item>Crowns</List.Item>
              <List.Item>Implants</List.Item>
              <List.Item>Extractions</List.Item>
              <List.Item>Pediatric Dentistry</List.Item>
              <List.Item>Call for more services</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" inverted>
              Patient Forms
            </Header>
            <List.Item
              as="a"
              href="https://drive.google.com/drive/folders/1eG2DDF_sEuRfNO4vIPYP1Rt8vad8-K00?usp=sharing"
              target="_blank"
            >
              See Forms
            </List.Item>

            <Header as="h4" inverted>
              Accepted Insurances
            </Header>
            <List link inverted>
              <List.Item as="a" href="https://www.cigna.com/" target="_blank">
                Cigna
              </List.Item>
              <List.Item
                as="a"
                href="https://www.deltadentalins.com/"
                target="_blank"
              >
                Delta Dental Premier
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h4" inverted>
              Contact & Patient Information
            </Header>
            <List link inverted>
              <List.Item as="a">(864) 582-5000</List.Item>
              <List.Item as="a">
                364 S. Pine Street, Suite A-101, Spartanburg, SC 29302
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="Social" />
            <List link inverted>
              <List.Item
                as="a"
                href="https://www.facebook.com/pinestdentalsc/"
                target="_blank"
              >
                Facebook
              </List.Item>
              <List.Item
                as="a"
                href="https://www.instagram.com/pinestdentalsc/"
                target="_blnak"
              >
                Instagram
              </List.Item>
            </List>
            <Header inverted as="h4" content="Website" />
            <List link inverted>
              <List.Item
                as="a"
                href="http://wwww.matiasmariani.io"
                target="_blank"
              >
                Matias Mariani
              </List.Item>
              <List.Item as="a">&reg; PineStDentalSC 2020</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
