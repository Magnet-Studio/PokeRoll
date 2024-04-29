import React from 'react';
import '../styles/logo.css';
import LogoImage from '../images/logo.png';

function Logo()
{
    return (
        <div className='logo'>
            <img id='logoImage' src={LogoImage}/>
        </div>
    );
}

export default Logo;