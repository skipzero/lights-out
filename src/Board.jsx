import React, { Component } from 'react';
import Light from './Light.js';

class Board extends Component {
  static defaultProps = {
    rows: 5,
    cols: 5,

  }
  constructor(props) {
    super(props)
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    }
  }

  createBoard() {
    const {rows, cols} = this.props;
    let board = [];
    for (let y = 0; y < rows; y++) {
      let row = [];
      for (let x = 0; x < cols; x++) {
        row.push(false);
      }
      board.push(row);
    }
    return board;
  }

  toggleLightSwitch(pos) {
    let {rows, cols} = this.props;
    let board = this.state.board;
    let [y, x] = pos.split('-').map(Number);

    const switchLight = (y, x) => {
      if (x >= 0 && x < cols && y >= 0 && y < rows) {
        board[y][x] = !board[y][x];
      }
    }

    switchLight(y, x);
    switchLight(y, x - 1);
    switchLight(y, x + 1);
    switchLight(y - 1, x);
    switchLight(y + 1, x);
    const hasWon = board.every(row => row.every(light => !light));

    this.setState = {
      hasWon,
      board,
    }
  }

  lightBoard() {
    const board = [];
    let {rows, cols} = this.props;

    for (let y = 0; y < rows; y++) {
      let row = [];
      for (let x = 0; x < cols; x++) {
        let pos = `${y}-${x}`;
        row.push(
           <Light
            isOn={this.state.board[y][x]}
            key={pos}
            toggleLights={() => this.toggleLightSwitch(pos)}
          />
        );
      };
      board.push(row);
    }

    return board;
  }

  render() {
    console.log(this)
    return this.lightBoard();
  }
}

export default Board;
