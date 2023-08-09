import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    const {level, changeLevel} = this.props;
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
      </header>
    )
  }
}
