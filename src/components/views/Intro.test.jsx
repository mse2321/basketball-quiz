import React from 'react';
import { screen, render } from '@testing-library/react';
import Intro from './Intro';

it('renders Intro component', () => {
  render(<Intro />);
  
  expect(screen.getByText('Get ready to take the quiz!')).toBeTruthy();
});
