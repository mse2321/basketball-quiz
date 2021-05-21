import React from 'react';
import { screen, render } from '@testing-library/react';
import Score from './Score';

it('renders Score component', () => {
  render(<Score />);
  
  expect(screen.getByText('Your Score')).toBeTruthy();
});
