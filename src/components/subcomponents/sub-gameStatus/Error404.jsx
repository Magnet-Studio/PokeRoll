import React from 'react';
import './styles/error404.css';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div id='errorContainer'>
            <h1>404</h1>
            <h2>La página que estás buscando no existe</h2>
            <Link to='/ruleta'>
                <button className='error404Button'>Volver a la ruleta</button>
            </Link>
        </div>
    )
}

export default Error404;