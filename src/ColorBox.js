import React, { Component } from 'react'
import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{background}} className="ColorBox">
        <div className="ColorBox-copy-container">
            <div className="ColorBox-box-content">
                <span>{name}</span>
            </div>
            <button className="ColorBox-copy-btn">Copy</button>
        </div>
        <span className="ColorBox-see-more">More</span>
      </div>
    )
  }
}
