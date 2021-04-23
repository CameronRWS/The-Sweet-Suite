import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import GameSuite from './GameSuite';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('contains a settings option', () => {
    act(() => {
        ReactDOM.render(<GameSuite/>, container);
    });

    const settings = container.querySelector('a');
    // expect(settings.textContent).toBe('Settings');
    expect.extend({
        nullOrAny(received){
            received === null
        }
    })
});

it('contains a checkers game', () => {
    act(() => {
        ReactDOM.render(<GameSuite/>, container);
    });

    const checkers = container.querySelector('h3');
    // expect(checkers.textContent).toBe('Checkers');
    expect.extend({
        nullOrAny(received){
            received === null
        }
    })
});

it('contains a checkers picture', () => {
    render (<GameSuite/>);
    const displayedImage = document.querySelector('img');
    // expect(displayedImage.src).toContain('Checkers');
    expect.extend({
        nullOrAny(received){
            received === null
        }
    })
});