import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Calculator from '../../components/Calculator';

describe('Calculator component', () => {
  it('renders calculator page correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test for calculator component', () => {
  it('test the heading of calculator component', () => {
    render(<Calculator />);
    expect(screen.getByRole('heading')).toHaveTextContent('Let\'s do some math!');
  });
});
