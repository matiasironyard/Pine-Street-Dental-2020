import React from 'react';
import { Grid, Header, Segment, Table, Button } from 'semantic-ui-react';
//  Loading message component
const ServicesBanner = () => {
	const backgroundImage =
		'https://previews.123rf.com/images/9dreamstudio/9dreamstudio1802/9dreamstudio180202215/95506478-metal-dentist-tools-blue-background-top-view-.jpg';
	return (
		<Segment
			id="services"
			placeholder
			style={{
				minHeight: '500px',
				margin: '0',
				backgroundColor: '#fff',
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}>
			<Grid centered stackable>
				<Grid.Row>
					<Grid.Column width={8}>
						<Table textAlign="center" padded size="large">
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell width={4} />
									<Table.HeaderCell width={4}>SERVICES</Table.HeaderCell>
									<Table.HeaderCell width={4}> </Table.HeaderCell>
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
											<Header.Content>
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
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default ServicesBanner;
