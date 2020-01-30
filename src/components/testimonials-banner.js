import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Grid,
  Segment,
  Card,
  Icon,
  Image,
  Button,
  Header
} from 'semantic-ui-react';
//  Loading message component
const TestimonialsBanner = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const url = 'https://yelp-proxy-server.herokuapp.com/pinestreetdentalsc';
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data.result.reviews);
    };
    fetchData();
  }, []);
  let items;
  if (data != null && data.length > 0) {
    items = data.map(item => {
      console.log('item', item);
      return (
        <Card key={item.time} fluid as="a" href={item.author_url}>
          <Card.Content style={{ textAlign: 'center' }}>
            <Image
              src={item.profile_photo_url}
              style={{ height: '70px', width: '70px' }}
            />
            <Card.Header>{item.author_name}</Card.Header>
            <Card.Description>{item.text}</Card.Description>
            <Card.Meta>{item.relative_time_description}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Icon name="star" />
            {item.rating}
          </Card.Content>
        </Card>
      );
    });
  }

  return (
    <Segment
      id="testimonials"
      placeholder
      style={{
        minHeight: '300px',
        backgroundColor: 'rgba(81, 154, 255, .25)'
      }}
    >
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <div>
              {data != null && data.length > 0 ? (
                <Card.Group stackable itemsPerRow={3}>
                  {items}
                  <Card>
                    <Card.Content
                      style={{ textAlign: 'center', padding: '60px 0 30px 0' }}
                    >
                      <Card.Header>
                        Call us today and schedule an appointment!
                      </Card.Header>
                      <Card.Description>
                        <Button
                          primary
                          as="a"
                          href="tel:864-582-500"
                          style={{ padding: '20px 50px' }}
                        >
                          864.582.5000
                        </Button>
                      </Card.Description>
                      <Card.Meta
                        style={{
                          margin: '20px 50px'
                        }}
                      >
                        <Header>Your smile is in good hands!</Header>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="star" />5
                    </Card.Content>
                  </Card>
                </Card.Group>
              ) : (
                'loading'
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default TestimonialsBanner;
