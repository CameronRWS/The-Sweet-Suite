import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Login from './Login';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render and update a form', () => {
    act(() => {
        ReactDOM.render(<Login/>, container);
    });

    const label = container.querySelector('label');
    expect(label.textContent).toBe('User Name');
})