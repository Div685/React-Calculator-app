import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../components/App';

describe('App Component', () => {
  it('renders App page correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
