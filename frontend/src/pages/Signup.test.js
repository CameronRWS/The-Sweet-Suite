import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Signup from './Signup';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render The Sweet Suite on Signup', () => {
    act(() => {
        ReactDOM.render(<Signup/>, container);
    });

    const text = container.querySelector('h1');
    expect(text.textContent).toBe('The Sweet Suite');
});

it('can render Sign Up on Signup', () => {
    act(() => {
        ReactDOM.render(<Signup/>, container);
    });

    const text = container.querySelector('h2');
    expect(text.textContent).toBe('Sign Up');
});

it('can render update username field', () => {
    act(() => {
        ReactDOM.render(<Signup/>, container);
    });

    const username = container.querySelector('input');
    expect(username.textContent).toBe('');

});