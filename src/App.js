import Palette from './Palette';
import PaletteWrapper from './PaletteWrapper';
import {Route, Routes, useParams} from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<h1>Palette List goes here!</h1>}/>
        <Route path="/palette/:id" element={<PaletteWrapper/>}/>
        <Route path="*" element={<h1>Not Found!</h1>}/>
      </Routes>

      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[1])} />
      // </div>
      // <Route path="/palette/:id" element={<Palette palette={generatePalette(seedColors[1])}/>}/>
    );
  }
}

export default App;
