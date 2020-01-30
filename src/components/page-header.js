import React from 'react';
import { Grid } from 'semantic-ui-react';
import QuickLinksNav from './quick-links-nav';
//  Loading message component
const PageHeader = () => {
	return (
		<Grid>
			<Grid.Row style={{ padding: '30px 5px 0 30px' }}>
				<Grid.Column width={16}>
					<QuickLinksNav />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default PageHeader;
