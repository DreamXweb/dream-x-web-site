import { render, screen } from '@testing-library/react';
import AppBoot from './App';

test('renders learn react link', () => {
  render(<AppBoot />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
