import React from 'react';
import {
	Grid,
	Header,
	Segment,
	Table,
	Button,
	Container,
} from 'semantic-ui-react';
//  Loading message component
const ServicesBanner = () => {
	const backgroundImage =
		'https://previews.123rf.com/images/9dreamstudio/9dreamstudio1802/9dreamstudio180202215/95506478-metal-dentist-tools-blue-background-top-view-.jpg';
	return (
		<div
			id="services"
			style={{
				minHeight: '500px',
				margin: '0',
				backgroundColor: '#fff',
				//backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<Container style={{ padding: '5% 0' }}>
				<Segment
					placeholder
					style={{
						backgroundColor: 'rgba(255,255,255,.8',
						padding: '50px 0',
						border: '2px solid #2185d0',
					}}>
					<Header
						as="h1"
						style={{ textAlign: 'center', color: 'rgb(33, 133, 208)' }}>
						SERVICES
					</Header>
					<Table basic="very" textAlign="center" padded size="large">
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell width={3} />
								<Table.HeaderCell width={3} />
								<Table.HeaderCell width={3}> </Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Header as="h4">
										<Header.Content>Cleaning</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>
									<Header as="h4">
										<Header.Content>Exams</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>
									<Header as="h4">
										<Header.Content>Fillings</Header.Content>
									</Header>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Header as="h4">
										<Header.Content>Pediatric Dentistry</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>
									<Header as="h4">
										<Header.Content>Teeth Whitening</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>
									<Header as="h4">
										<Header.Content>Crowns</Header.Content>
									</Header>
								</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>
									<Header as="h4">
										<Header.Content>Implants</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>
									<Header as="h4">
										<Header.Content>Extractions</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>
									<Header as="h4">
										<Header.Content style={{ textTransform: 'uppercase' }}>
											Call for more services
											<Header.Subheader>Se habla espanol</Header.Subheader>
										</Header.Content>
									</Header>
								</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
					<Button
						primary
						as="a"
						href="tel:864-582-500"
						style={{ marging: '25px auto !important' }}>
						Call us now
						<br />
						864.582.5000
					</Button>
				</Segment>
			</Container>
		</div>
	);
};

export default ServicesBanner;
