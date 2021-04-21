import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Routes from '../../components/Routes';

describe('Routes Component', () => {
  it('renders Routes page correctly', () => {
    const tree = renderer.create(<Routes />);
    expect(tree).toMatchSnapshot();
  });
});

describe('Test Routes Component for NavBar Links', () => {
  it('it test the home page', () => {
    render(<Routes />);
    expect(screen.getByTestId('page-wrapper')).toHaveTextContent('Welcome to our Page!');
  });

  it('Test the Calculator Page if the Calculator Link in the NavBar is clicked', () => {
    render(<Routes />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getByTestId('page-wrapper')).toHaveTextContent('Let\'s do some math!');
  });
});
