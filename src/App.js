import Palette from './Palette';
import PaletteWrapper from './PaletteWrapper';
import PaletteList from './PaletteList';
import {Route, Routes, useParams} from 'react-router-dom';
import seedColors from './seedColors';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route
        path="/"
        element={<PaletteList palettes={seedColors} />}
        render={(routeProps) => (
          <PaletteList palettes={seedColors} {...routeProps} />
       )}/>
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
