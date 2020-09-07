import {shallow} from 'enzyme';
import * as React from 'react';

import {App} from './App';

it('Render correctly', () => {
	const snapshot = shallow(
		<App />,
	);
	expect(snapshot).toMatchSnapshot();
});
