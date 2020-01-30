import React from 'react';
import { Button, Grid, Header, Segment, Message } from 'semantic-ui-react';
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
				margin: '0',
				padding: '35px',
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'top',
			}}>
			<Grid columns={2} stackable textAlign="center">
				<Grid.Row>
					<Grid.Column width={10} />

					<Grid.Column
						width={6}
						style={{
							backgroundColor: 'rgba(255, 255,255, .75)',
							padding: '50px 30px',
						}}>
						<Header as="h1" style={{ textTransform: 'uppercase' }}>
							Schedule An Appointment
						</Header>
						<div style={{ paddingBottom: '20px' }}>
							<HoursOfOperation />
						</div>
						<div style={{ paddingBottom: '20px' }}>
							<Button
								primary
								as="a"
								href="tel:864-582-500"
								style={{ marging: '25px auto !important' }}>
								864.582.5000
							</Button>
						</div>
						<Message style={{ textTransform: 'uppercase' }}>
							Hablamos español, llamenos hoy!
						</Message>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default PageBanner;
