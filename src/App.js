import PaletteWrapper from './PaletteWrapper';
import PaletteList from './PaletteList';
import {Route, Routes} from 'react-router-dom';
import seedColors from './seedColors';
import React, { Component } from 'react';
import SingleColorPaletteWrapper from './SingleColorPaletteWrapper';

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
        <Route path="/palette/:paletteId/:colorId" element={<SingleColorPaletteWrapper/>}/>
        <Route path="*" element={<h1>Not Found!</h1>}/>
      </Routes>
    );
  }
}

export default App;
