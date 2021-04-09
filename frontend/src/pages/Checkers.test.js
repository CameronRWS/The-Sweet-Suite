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
    expect(backButton.textContent).toContain('Back');
});

it('states you are playing checkers', () => {
    act(() => {
        ReactDOM.render(<Checkers/>, container);
    });

    const titleText = container.querySelector('p');
    expect(titleText.textContent).toBe('Checkers');
});

it('contains a reset button', () => {
    act(() => {
        ReactDOM.render(<Checkers/>, container);
    });

    const resetButtonText = container.querySelectorAll('button');
    expect(resetButtonText[64].textContent).toBe('Reset');
});

it('contains a rules button', () => {
    act(() => {
        ReactDOM.render(<Checkers/>, container);
    });

    const rulesButtonText = container.querySelectorAll('button');
    expect(rulesButtonText[65].textContent).toBe('Rules');
});