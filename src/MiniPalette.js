import React from 'react';
import { Box, createTheme } from '@mui/system';
import { Link } from 'react-router-dom';

function MiniPalette(props) {
    //console.log(props);
    const { paletteName, id, emoji, colors } = {...props};

    console.log(paletteName);
    console.log(id);
    console.log(colors);

    const theme = createTheme()
    
    return (
        <Box sx={{backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden"}}>
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
    )
}
export default MiniPalette;