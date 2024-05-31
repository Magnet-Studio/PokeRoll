/**
 * Contenidos del panel que tiene el logo
 */

import React from 'react';
import './styles/logo.css';
import LogoImage from '../../images/logo.png';

function Logo()
{
    return (
        
        <img id='logoImage' src={LogoImage} alt={"Logo de PokéROLL"} />

    );
}

export default Logo;