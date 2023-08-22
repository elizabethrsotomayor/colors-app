import React, { Component } from 'react';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default class SingleColorPalette extends Component {
  constructor(props){
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({format: val});
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={uuidv4()}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className='SingleColorPalette Palette'>
        <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
        <div className='Palette-colors'>
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className='ColorBox-back-btn'>
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}
