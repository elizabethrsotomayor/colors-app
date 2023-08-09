import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import React, { Component } from 'react'

class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[2])); 
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[1])} />
      </div>
    );
  }
}

export default App;
