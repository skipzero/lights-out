import React, { Component } from 'react';
import './light.css';

class Light extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isOn: false,
    }
  }

  handleClick(evt) {
    const isOn = !this.props.isOn;
    this.props.toggleLights();
    debugger;
    this.setState = {
      isOn,
    }
  }

  render() {
    console.log('IS ON???', this.props)
    const classes = this.props.isOn ? 'lightWrapper light-on' : 'lightWrapper';
    return  (
      <div className={classes}>
        <span className='light' onClick={this.handleClick}> </span>
      </div>
    )
  }
}

export default Light;
