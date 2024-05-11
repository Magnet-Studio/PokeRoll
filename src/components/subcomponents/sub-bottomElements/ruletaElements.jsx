import React from 'react';
import './styles/ruletaElements.css';
import CoinImage from '../../../images/coin.png';
import PokeballIcon from '../../../images/pokeball.png';

export function TirarButton({cost})
{


    return (
        <div id='tirarButton'>
            <p>TIRAR</p>
            <div>
                <p>{cost}</p>
                <img src={CoinImage} />
            </div>
        </div>
    );
}


export function Pokeball() 
{
    return (
        <img className="pokeBall" src={PokeballIcon} />
    );
}