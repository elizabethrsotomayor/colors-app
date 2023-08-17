import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Box, createTheme, ThemeProvider } from '@mui/system';

const theme = createTheme({
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
});

export default class PaletteList extends Component {
  render() {
    const {palettes} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Box style={theme.root}>
          <Box style={theme.container}>
            <nav style={theme.nav}>
              <h1>React Colors</h1>
            </nav>
            <div style={theme.palettes}>
              {palettes.map(palette => (
                <MiniPalette {...palette} key={palette.id}/>
                ))}
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    )
  }
}
