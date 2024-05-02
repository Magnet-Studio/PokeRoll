/**
 * Contenidos del panel que tiene las monedas
 */

import React from 'react';
import './styles/coins.css';
import CoinImage from '../../images/coin.png';

function Coins()
{

    let coinsValue = 0;
    let numCifras = 1;

    for(let c = coinsValue; c > 0; )
    {
        c = Math.floor(c / 10);
        numCifras++;
    }

    return (
        <div id="coins">
            <img src={CoinImage} />
            <p id={'cifras-' + numCifras}>{coinsValue}</p>
        </div>
    );
}

export default Coins;