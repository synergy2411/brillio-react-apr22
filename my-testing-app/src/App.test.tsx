import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// describe()
// Setup / teardown -> beforeEach, afterEach, beforeAll, afterAll

test('renders learn react link', () => {
  // Arrange
  render(<App />);
  const linkElement = screen.getByText("Learn React");
  // Act
  // .... nothing

  // Assert
  expect(linkElement).toBeInTheDocument();
});
