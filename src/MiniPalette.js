import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
    },
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          cursor: "pointer"
        },
        height: "12rem"
    },
      colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
      title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
      emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
      miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
});

function MiniPalette(props) {
    const { paletteName, id, emoji, colors } = {...props};
    
    const miniColorBoxes = colors.map(color => (
        <Box key={color.name} sx={theme.miniColor} style={{backgroundColor: color.color}}/>
      ));

    return (
        <ThemeProvider theme={theme}>
            <Box sx={theme.root}>
                <Box sx={theme.colors}>{miniColorBoxes}</Box>
                <h5 style={theme.title}>{paletteName} <span style={theme.emoji}>{emoji}</span></h5>
            </Box>
        </ThemeProvider>
    )
}
export default MiniPalette;