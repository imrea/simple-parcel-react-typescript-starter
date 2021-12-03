import { App } from './app';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('renders Hello', async () => {
    render(<App />);
    screen.getByText(/Hello/);
  });

  it('renders Parcel', async () => {
    render(<App />);
    screen.getByText('Parcel');
  });
});
