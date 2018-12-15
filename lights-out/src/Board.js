import React, { Component } from 'react';
import './App.css';

class Board extends Component {

  board() {
    let boardSize = this.props.gameProps.boardSize ;
    boardSize = boardSize * boardSize;
    let boardArray = [];
    for(let i = 0; i < boardSize; i++) {
      boardArray.push(<Light key={i + 1} col={i + 1} />);
    }
    return boardArray;
  }

  render() {
    return (
      <div className='game'>
        <h3>Lights Out Game</h3>
        <div className='board'>
          {this.board()}
        </div>
      </div>
    );
  }
}

class Light extends Component {
  render() {
    return (
      <button className='light' col={this.props.col}>{ this.props.col }</button>
    )
  }
}

// class Row extends Component {
//
// }

export default Board;
