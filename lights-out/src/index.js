import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Board from './Board';

const size = 5;
let lights = [];

for(let i = 0; i < size * size; i++) {
  lights.push({id: i + 1, on: 'on'});
}

const state = {
  lights,
};

console.log(state)
  // state.lights.

render(<Board lights={state.lights}/>, document.getElementById('container'));
