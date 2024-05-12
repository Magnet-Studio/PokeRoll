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
    const [numCifras, setNumCifras] = useState(1);

    useEffect(() => {
        setPrevCoinsValue(coinsValue);
        setCoinsValue(UserData.currency);
        let cif = 0;
        for(let c = UserData.currency; c > 0; )
            {
                c = Math.floor(c / 10);
                cif++;
            }
        setNumCifras(cif);
        
    },  [JSON.stringify(UserData.currency)]);


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