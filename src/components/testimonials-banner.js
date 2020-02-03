import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
	Grid,
	Segment,
	Card,
	Icon,
	Image,
	Button,
	Header,
	Container,
} from 'semantic-ui-react';
import StaffData from '../data/staff.js';

//  Loading message component
const TestimonialsBanner = () => {
	const backgroundImage =
		'https://pantherpediatricdentistry.com/wp-content/uploads/2018/11/background-hero.jpg';
	const officeManager = StaffData()[0];
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
			let name = item.author_name;
			let firstName = name.substr(0, name.indexOf(' '));

			return (
				<Card
					key={item.time}
					fluid
					as="a"
					href={item.author_url}
					style={{ borderRadius: '0' }}>
					<Card.Content
						style={{
							textAlign: 'center',
							padding: '60px 20px',
						}}>
						<Image
							src={item.profile_photo_url}
							style={{ height: '100px', width: '100px' }}
						/>
						<Card.Header>{firstName}</Card.Header>
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
		<div
			id="testimonials"
			placeholder
			style={{
				margin: '0',
				minHeight: '400px',
				backgroundColor: '#2185d0',
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<Container style={{ padding: '5% 0' }}>
				<Segment
					placeholder
					style={{
						padding: '30px 15px',
						backgroundColor: 'rgba(255,255,255,.8)',
					}}>
					<Grid container stackable>
						<Grid.Row>
							<Grid.Column width={16}>
								<div>
									{data != null && data.length > 0 ? (
										<Card.Group stackable itemsPerRow={3}>
											{items}
											<Card
												style={{
													borderRadius: '0',
													boxShadow: '0px 0px 5px 2px #bababc',
												}}>
												<Card.Content
													style={{
														textAlign: 'center',
														padding: '60px 20px',
													}}>
													<Image
														src={officeManager.img}
														size="small"
														alt={`${officeManager.name} ${
															officeManager.position
														} at pine street dental spartanburg 864 582 5000 364 S Pine St suite a-101, Spartanburg, SC 29302`}
														circular
														style={{
															margin: '0px auto',
															width: '100px',
															borderRadius: '100%',
															height: '100px',
															objectFit: 'cover',
														}}
													/>
													<Card.Header style={{ paddingBottom: '20px' }}>
														Call Kathey today and schedule your appointment!
													</Card.Header>
													<Card.Description style={{ paddingBottom: '20px' }}>
														<Button
															primary
															as="a"
															href="tel:864-582-500"
															style={{ padding: '20px 50px' }}>
															864.582.5000
														</Button>
													</Card.Description>
													<Card.Meta
														style={{
															margin: '20px 50px',
														}}>
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
			</Container>
		</div>
	);
};

export default TestimonialsBanner;
