import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/system';
import { Link } from 'react-router-dom';

function MiniPalette(props) {
    const { paletteName, id, emoji, colors } = {...props};

    // console.log(paletteName);
    // console.log(id);
    // console.log(colors);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#000',
            },
        },
        custom: {
            myOwnComponent: {
              margin: "3rem 10px",
              backgroundColor: "lightgreen"
            }
        }
    });
    
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ margin: (theme) => theme.custom.myOwnComponent.margin }}>
                <Box sx={{backgroundColor: "grey"}}/>
                <h5 sx={{ display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0",
            color: "black",
            paddingTop: "0.5rem",
            fontSize: "1rem",
            position: "relative"}}>{paletteName} <span sx={{marginLeft: "0.5rem",
            fontSize: "1.5rem"}}>{emoji}</span></h5>
            </Box>
        </ThemeProvider>
    )
}
export default MiniPalette;