import React from 'react';
import { screen, render } from '@testing-library/react';
import ViewContainer from './ViewContainer';

it('renders ViewContainer component', () => {
  render(<ViewContainer />);
  
  expect(screen.getByText('Question')).toBeTruthy();
});
