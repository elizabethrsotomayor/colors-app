import React, { Component } from 'react'
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard";

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
        <CopyToClipboard text={background}>
        <div style={{background}} className="ColorBox">
            <div className="ColorBox-copy-container">
                <div className="ColorBox-box-content">
                    <span>{name}</span>
                </div>
                <button className="ColorBox-copy-btn">Copy</button>
            </div>
            <span className="ColorBox-see-more">More</span>
        </div>
        </CopyToClipboard>
    )
  }
}
