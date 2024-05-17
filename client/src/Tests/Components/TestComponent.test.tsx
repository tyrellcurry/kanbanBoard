test.skip('Skipping entire test file', () => {});
import React from "react";
import { render, screen } from '@testing-library/react';
import TestComponent from "../../Components/TestComponent";
test('renders component, checks title' , () => {
  render(<TestComponent />);
  const title = screen.getByText(/Counter/i);
  expect(title).toBeInTheDocument();
})