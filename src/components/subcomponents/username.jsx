/**
 * Contenidos del panel que tiene el usuario
 */

import React, {useState, useEffect} from 'react';
import './styles/username.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Username()
{
    const [name, setName] = useState('Iniciar Sesión');
   

    /* Calcula a partir del length del username el font size */
    useEffect(() => {
        const nameTag = document.querySelector('#username p');

        if(name.length > 10)
        {
            const newLenght = (15 / name.length).toFixed(3);
            nameTag.style.setProperty('font-size', 'calc(0.01vw + ' + newLenght + "vw)");
        }
        else // Size mínimo
        {
            nameTag.style.setProperty('font-size', '1.375vw');
        }
        
    }, [name]);

    const handleChangeName = () => {
        setName('DragonKiller7719');
      };

    return(
        <div id="username">
            <AccountCircleIcon id="icon"/>
            <p>{name}</p>
        </div>
    );
}

export default Username;