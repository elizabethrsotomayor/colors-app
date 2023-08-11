import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import { Link } from 'react-router-dom';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    }
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(evt) {
    this.setState({format: evt.target.value, open: true});
    this.props.handleChange(evt.target.value);
  }

  closeSnackbar() {
    this.setState({
      open: false
    })
  }

  render() {
    const {level, changeLevel} = this.props;
    const {format} = this.state;
    return (
      <header className="Navbar">
        <div className='Navbar-logo'>
            <Link to="/">reactcolorpicker</Link>
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
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label='close'>
              <CloseIcon/>
            </IconButton>
          ]} />
      </header>
    )
  }
}
