import React from 'react';
import ReactDOM from 'react';
import SocialNetworkApp from '.';

test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetworkApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});