/**
 * Contenidos del panel que tiene las monedas
 */

import React, { useEffect, useState } from 'react';
import './styles/coins.css';
import CoinImage from '../../images/coin.png';
import CountUp from 'react-countup';

function Coins({UserData})
{
    const [coinsValue, setCoinsValue] = useState(UserData.currency);
    const [prevCoinsValue, setPrevCoinsValue] = useState(UserData.currency);

    useEffect(() => {
        setPrevCoinsValue(coinsValue);
        setCoinsValue(UserData.currency);
    },  [JSON.stringify(UserData.currency)]);

    let numCifras = 1;

    for(let c = coinsValue; c > 0; )
    {
        c = Math.floor(c / 10);
        numCifras++;
    }

    return (
        <div id="coins">
            <img src={CoinImage} />
            <CountUp start={prevCoinsValue} end={coinsValue} duration={1} separator="">
                {({ countUpRef }) => (
                    <div>
                        <p id={'cifras-' + numCifras} ref={countUpRef} />
                    </div>
                )}
            </CountUp>
        </div>
    );
}

export default Coins;