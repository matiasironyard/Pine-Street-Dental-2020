import React, { useState } from 'react';
import {
  Grid,
  Header,
  Segment,
  Image,
  Accordion,
  Card,
  Icon
} from 'semantic-ui-react';
import StaffData from '../data/staff.js';

//  Loading message component
const StaffBanner = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };
  let staff = StaffData().map((item, index) => {
    return (
      <div key={index}>
        <Image
          src={item.img}
          size="small"
          alt={`${item.name} ${
            item.position
          } at pine street dental spartanburg 864 582 5000 364 S Pine St suite a-101, Spartanburg, SC 29302`}
          circular
          style={{
            margin: '0px auto',
            width: '200px',
            borderRadius: '100%',
            height: '200px',
            objectFit: 'cover'
          }}
        />
        <Card
          raised={true}
          key={item.key}
          style={{
            width: '300px',
            border: '0 !important',
            boxShadow: 'none',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <Card.Meta>
              <span className="date">{item.position}</span>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === index}
                  index={index}
                  onClick={handleClick}
                >
                  <span className="date">Learn More</span>
                  <Icon name="dropdown" />
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                  <p>{item.bio}</p>
                </Accordion.Content>
              </Accordion>
            </Card.Meta>
            <Card.Description />
          </Card.Content>
        </Card>
      </div>
    );
  });

  return (
    <Segment
      placeholder
      style={{
        padding: '15px',
        minHeight: '300px',
        backgroundColor: 'white'
      }}
    >
      <Grid stackable textAlign="center">
        <Grid.Row>
          <Grid.Column columns={4} width={16}>
            <Header
              as="h2"
              style={{
                textTransform: 'uppercase',
                margin: '50px auto',
                color: '#2185d0'
              }}
            >
              Meet Our Friendly Staff
            </Header>
            <Card.Group
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '30px auto'
              }}
            >
              {staff}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default StaffBanner;
