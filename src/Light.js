import React, { Component } from 'react';
import './light.css';

class Light extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.toggleLights();
  }

  render() {
    const classes = this.props.isOn ? 'lightWrapper light-on' : 'lightWrapper';
    return  (
      <div className={classes}>
        <span className='light' onClick={this.handleClick}> </span>
      </div>
    )
  }
}

export default Light;
