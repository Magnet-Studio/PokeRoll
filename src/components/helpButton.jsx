import React from 'react';
import '../styles/helpButton.css';
import HelpIcon from '@mui/icons-material/Help';

function HelpButton()
{
    return (
        <div id="helpButtonContainer">
            <HelpIcon id="helpButton"/>
        </div>
    );
}

export default HelpButton;