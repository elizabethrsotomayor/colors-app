import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({format: evt.target.value});
    this.props.handleChange(evt.target.value);
  }

  render() {
    const {level, changeLevel} = this.props;
    const {format} = this.state
    return (
      <header className="Navbar">
        <div className='Navbar-logo'>
            <a href="#">reactcolorpicker</a>
        </div>
        <div className='Navbar-slider-container'>
          <span>Level: {level}</span>
          <div className='Navbar-slider'>
            <Slider 
              defaultValue={level} 
              min={100} 
              max={900} 
              step={100} 
              onChange={changeLevel}
              trackStyle={{ backgroundColor: "transparent" }}
              railStyle={{ height: 8 }}
              handleStyle={{
                backgroundColor: "green",
                outline: "none",
                boxShadow: "none",
                border: "2px solid green",
                width: "13px",
                height: "13px",
                marginTop: "-2px"
              }}
            />
          </div>
        </div>
        <div className="Navbar-select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}
