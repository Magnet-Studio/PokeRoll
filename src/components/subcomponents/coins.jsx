/**
 * Contenidos del panel que tiene las monedas
 */

import React, { useEffect } from 'react';
import './styles/coins.css';
import CoinImage from '../../images/coin.png';
import { UserData } from './sub-gameStatus/userdata/userData';

function Coins()
{


    let coinsValue = UserData.currency;

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

export function reloadCoins() {
    return Coins();
}

export default Coins;