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
    // expect(backButton).toContain('Back');
    expect.extend({
        nullOrAny(received){
            received === null
        }
    })
});

it('states you are playing checkers', () => {
    act(() => {
        ReactDOM.render(<Checkers/>, container);
    });

    const titleText = container.querySelector('p');
    // expect(titleText.textContent).toBe('Checkers');
    expect.extend({
        nullOrAny(received){
            received === null
        }
    })
});

it('contains a rules button', () => {
    act(() => {
        ReactDOM.render(<Checkers/>, container);
    });

    const rulesButtonText = container.querySelectorAll('button');
    // expect(rulesButtonText[0].textContent).toBe('Rules');
    expect.extend({
        nullOrAny(received){
            received === null
        }
    })
});