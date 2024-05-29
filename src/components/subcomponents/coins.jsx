/**
 * Contenidos del panel que tiene las monedas
 */

import React, { useEffect, useState } from 'react';
import './styles/coins.css';
import CoinImage from '../../images/coin.png';
import CountUp from 'react-countup';

function Coins({UserData, coinsReference})
{
    const [coinsValue, setCoinsValue] = useState(UserData.currency);
    const [prevCoinsValue, setPrevCoinsValue] = useState(UserData.currency);
    const [numCifras, setNumCifras] = useState(1);

    useEffect(() => {
        setPrevCoinsValue(coinsValue);

        setCoinsValue(UserData.currency);

        let numCifras = 1;
        for(let c = coinsValue; c > 0; )
        {
            c = Math.floor(c / 10);
            numCifras++;
        }

        setNumCifras(numCifras);
        
        // (Esto warning no hace falta corregirlo)
        // eslint-disable-next-line 
    },  [UserData.currency]);


    const countUp = (
        <div>
            <CountUp start={prevCoinsValue} end={coinsValue} duration={2} separator="" >
                {({ countUpRef }) => (
                    <p id={'cifras-' + numCifras} ref={countUpRef} aria-hidden='true' />
                )}
            </CountUp>
        </div>
    );

    return (
        <div id="coins" tabIndex="10" aria-label={`Tienes ${UserData.currency} monedas`} ref={coinsReference}>
            <img src={CoinImage} alt={"Coins"} aria-hidden='true' />
            {countUp}
        </div>
    );
}

export default Coins;