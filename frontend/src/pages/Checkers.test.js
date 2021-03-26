import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Checkers from './Checkers';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('contains a back button', () => {
    act(() => {
        ReactDOM.render(<Checkers/>, container);
    });

    const backButton = container.querySelector('a');
    expect(backButton.textContent).toBe('Back');
});