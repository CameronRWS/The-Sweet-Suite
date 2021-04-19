import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/react';
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

it('can render The Suite Sweet on Login', () => {
    act(() => {
        ReactDOM.render(<Login/>, container);
    });

    const text = container.querySelector('h1');
    expect(text.textContent).toBe('The Sweet Suite');
});

it('can render Login on Login', () => {
    act(() => {
        ReactDOM.render(<Login/>, container);
    });

    const text = container.querySelector('h2');
    expect(text.textContent).toBe('Login');
})

it('can click button', () => {
    act(() => {
        ReactDOM.render(<Login/>, container);
    });
    
    const button = container.querySelector('button');
    expect(button.textContent).toBe("Login");
    act(() => {
        button.dispatchEvent(new MouseEvent('click'), {userId: "user", password: "pass" })
    });
});

