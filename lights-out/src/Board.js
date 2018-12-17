import React, { Component } from 'react';
import './App.css';

class Board extends Component {

  render() {
    return (
      <div className='game'>
        <h3>Lights Out Game</h3>
        <div className='board'>
          {this.props.lights.map(light => (
            <div className='light' key={light.id} id={light.id} onClick={this.clickHandler}>
              <span className={light.on ? 'on' : 'off'}>{light.id}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  clickHandler() {
    console.log('bang')
  }
}

export default Board;
