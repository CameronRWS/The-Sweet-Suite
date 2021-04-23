import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

// test('example test', () => {
//   render(<App />);
//   const paraElement = screen.getByText(/The Sweet Suite/i);
//   expect(paraElement).toBeInTheDocument();
// });

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('states your login credentials', () => {
  act(() => {
      ReactDOM.render(<App/>, container);
  });

  const resetButtonText = container.querySelector('div');
  expect(resetButtonText.textContent).toContain('Login');
});