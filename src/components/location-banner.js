import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import HoursOfOperation from './hours-of-operation';
//  Loading message component
const LocationBanner = () => {
	return (
		<Segment
			id="location"
			placeholder
			style={{
				backgroundColor: 'rgba(81, 154, 255, .25)',
				margin: '0',
			}}>
			<Grid columns={2} stackable textAlign="center">
				<Grid.Row verticalAlign="middle">
					<Grid.Column width={10}>
						<iframe
							title="pinest-dental-map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.4126124107916!2d-81.9174088847612!3d34.94626568037214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d2892b185b97ef5!2sPine+Street+Dental!5e0!3m2!1sen!2sus!4v1521335983219"
							frameBorder="0"
							allowfullscreen=""
							style={{ width: '100%', height: '450px', border: '0px' }}
						/>
					</Grid.Column>
					<Grid.Column width={6}>
						<HoursOfOperation />
						<Button
							primary
							as="a"
							href="tel:864-582-500"
							style={{ marging: '25px auto !important' }}>
							Call us now
							<br />
							864.582.5000
						</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default LocationBanner;
