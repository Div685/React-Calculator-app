import React from 'react';
import renderer from 'react-test-renderer';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import Quote from '../../components/Quote';

describe('Quote Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});

describe('Test Quote component', () => {
  it('test heading content in Quote component', () => {
    render(<Quote />);
    expect(screen.getByRole('heading')).toHaveTextContent('Mathematics is not about numbers, equations, computations,or algorithms: it is about understanding. –William Paul Thurston');
  });
});
