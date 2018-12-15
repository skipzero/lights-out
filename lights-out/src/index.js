import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Board from './Board';

const state = {
  boardSize: 5,
};

render(<Board gameProps={state}/>, document.getElementById('container'));
