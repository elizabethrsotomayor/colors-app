import React, { Component } from 'react';
import ColorBox from './ColorBox';
import "./Palette.css"

export default class Palette extends Component {
  render() {
    console.log(this.props.palette);
    const colorBoxes = this.props.palette.colors[500].map(color => (
        <ColorBox background={color.hex} name={color.name}/>
    ))
    // console.log(this.props.palette.colors);
    return (
      <div className='Palette'>
        <div className='Palette-colors'>
            {colorBoxes}
        </div>
      </div>
    )
  }
}