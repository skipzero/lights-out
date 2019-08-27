import React, { Component } from 'react';
import light from './Light.jsx';

class Board extends Component {
  constructor(props) {
    super(props);
    props.store.register(this.updateState.bind(this));
    this.toggleLights = this.toggleLights.bind(this);
  }

  updateState() {
    const newState = this.props.store.getState('boardState');
    this.setState(newState);
  }

  toggleLights(light) {
    // if ()
    console.log('======= HERE LIGHT', light);
  }

  lights() {
    const lightBoard = new Array(25).fill(light);
    return lightBoard.map((light) => {
      return light();
    });
  }

  render() {
    return this.lights();
  }
}

export default Board;
