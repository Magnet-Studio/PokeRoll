import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './styles/navButton.css';

function NavButton(props) {

    let selected = 'selected';
    if(props.selected !== 'selected')
    {
        selected = '';
    }

    let title = '';
    if(props.title !== '')
    {
        title = props.title;
    }

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={props.link} aria-label={props.ariaLabel}>
            <div className={"navButton " + selected + ' ' + (isHovered ? 'mouseleave' : '')} 
                onMouseEnter={() => setIsHovered(false)} 
                onMouseLeave={() => setIsHovered(true)}>
                {props.icon}
                <p className='navButtonTitle'>{title}</p>
            </div>
        </Link>
    );
}

export default NavButton;