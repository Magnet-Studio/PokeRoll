import React from 'react';
import '../styles/helpButton.css';
import HelpIcon from '@mui/icons-material/Help';
import { grey } from '@mui/material/colors';

function HelpButton()
{
    return (
        <HelpIcon id="helpButton" sx={{color: grey[100]}}/>
    );
}

export default HelpButton;