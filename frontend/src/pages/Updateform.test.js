import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Updateform from './Updateform';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('can render the update button on Updateform', () => {
    act(() => {
        ReactDOM.render(<Updateform/>, container);
    });

    const text = container.querySelector('button');
    expect(text.textContent).toBe('Update');
});

it('can render Update profile information on Update form', () => {
    act(() => {
        ReactDOM.render(<Updateform/>, container);
    });

    const text = container.querySelector('h3');
    expect(text.textContent).toBe('Update profile Information');
});

it('can render update username field', () => {
    act(() => {
        ReactDOM.render(<Updateform/>, container);
    });

    const username = container.querySelector('input');
    expect(username.textContent).toBe('');

});
