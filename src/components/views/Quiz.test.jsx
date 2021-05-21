import React from 'react';
import { screen, render } from '@testing-library/react';
import Quiz from './Quiz';

it('renders Quiz component', () => {
  render(<Quiz />);
  
  expect(screen.getByText('Question')).toBeTruthy();
});
