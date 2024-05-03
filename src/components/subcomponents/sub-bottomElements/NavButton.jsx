import React from 'react';
import {Link} from 'react-router-dom';
import './styles/navButton.css';

function NavButton(props) {

    let selected = 'selected';
    if(props.selected !== 'selected')
    {
        selected = '';
    }

    return (
      
        <Link to={props.link}>
            <div className={"navButton " + selected}>
                {props.icon}
            </div>
        </Link>
    );
}

export default NavButton;