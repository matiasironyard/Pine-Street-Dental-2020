import React from 'react';
import { Button, Grid, Header, Segment, Container } from 'semantic-ui-react';
//  Loading message component
const AboutSegment = () => {
	const backgroundImage =
		'https://www.mydentistforlife.com/wp-content/uploads/2019/04/Cosmetic-Dentistry-banner-1024x416.jpg';
	return (
		<div
			style={{
				minHeight: '450px',
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'bottom',
			}}>
			<Container style={{ padding: '5% 0' }}>
				<Segment
					id="about"
					placeholder
					style={{
						backgroundColor: 'rgba(255,255,255,.80)',
						minHeight: '400px',
						padding: '50px 0',
					}}>
					<Header
						as="h1"
						style={{
							textAlign: 'center',
							textTransform: 'uppercase',
							color: 'rgb(33, 133, 208)',
						}}>
						40 Years Of Smiles
					</Header>
					<Grid container columns={2} stackable textAlign="center">
						<Grid.Row verticalAlign="middle">
							<Grid.Column
								width={6}
								style={{
									minHeight: '80px',
									padding: '15px',
								}}>
								<Header as="h2" style={{ paddingTop: '15px' }}>
									<span
										style={{
											textTransform: 'uppercase',
											color: '#666',
										}}>
										Trusted Experience
									</span>
									<Header.Subheader>
										Pine Street Dental has been providing general dentistry to
										the family and friends of Spartanburg and the Upstate for
										over 40 years.
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
									style={{ margin: '15px auto' }}>
									Our Services
								</Button>
							</Grid.Column>
							<Grid.Column width={2} />

							<Grid.Column width={8}>
								<blockquote cite="https://www.google.com/maps/contrib/116929363328710895849/reviews/@34.9462678,-81.9152215,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1">
									<p style={{ color: '#666', fontSize: '1.5em' }}>
										{' '}
										"Dr. Figueroa is impressive in his professional and personal
										approach to his patients and his entire staff is Top Notch!"
									</p>
									<footer style={{ color: '#666' }}>
										<cite>~ Aldous Huxley</cite>
									</footer>
								</blockquote>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		</div>
	);
};

export default AboutSegment;
