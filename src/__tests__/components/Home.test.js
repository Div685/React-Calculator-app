import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../../components/Home';

describe('Home component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test Heading for home component', () => {
  it('test the heading of home component', () => {
    render(<Home />);
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome to our Page!');
  });
});
