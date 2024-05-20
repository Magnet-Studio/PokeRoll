import React, {useState, useEffect} from 'react';
import './styles/ruletaElements.css';
import CoinImage from '../../../images/coin.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { GetThreeRandomPokemon } from '../sub-gameStatus/lib/RuletaController';

export function TirarButton({cost, TierRuleta, setUserData, tirarButtonDisable, setTirarButtonDisable, setChangeTierButtonDisable, UserData, setThreePokemon})
{
    
    const [redTirarButton, setRedTirarButton] = useState("");

    const tirarHandler = () => 
    {
        if(UserData.currency >= cost)
        {
            setUserData(prevUserData => {
                const updatedUserData = { ...prevUserData }; // Crear una copia del estado anterior
                updatedUserData.currency -= cost; // Modificar la copia (restar dinero)
                return updatedUserData; // Devolver la copia modificada
            });
    
            // Se desactivan los botones de Tirar y de Cambiar de Tier
            setTirarButtonDisable("disabled");
            setChangeTierButtonDisable("disabled");

            setThreePokemon(GetThreeRandomPokemon(TierRuleta - 1, UserData));
        }
    }

    // El botón de Tirar se queda disabled + rojo si no tienes suficientes monedas para esa tirada
    useEffect(() => {
        if(UserData.currency >= cost)
        {
            setRedTirarButton("");
        }
        else 
        {
            setRedTirarButton("notEnoughMoney")
        }
    }, [UserData.currency, cost]);

    return (
        <div id='tirarButton' onClick={tirarHandler} className={tirarButtonDisable + " " + redTirarButton} >
            <p>TIRAR</p>
            <div>
                <p>{cost}</p>
                <img src={CoinImage} alt={"Coins"} />
            </div>
        </div>
    );
}

export function ChangeTierButtons({TierRuleta, setTierRuleta, changeTierButtonDisable})
{
    const prevTier = () => {
        setTierRuleta(prevTierRuleta => {
            if(prevTierRuleta <= 1)
            {
                return 5;
            }
            return prevTierRuleta - 1;
        });
    };

    const nextTier = () => {
        setTierRuleta(prevTierRuleta => {
            if(prevTierRuleta >= 5)
            {
                return 1;
            }
            return prevTierRuleta + 1;
        });
    };

    return(
        <>
            <div id="changeTierButtons">
                <p>
                    TIER {TierRuleta}
                </p>
                <TierButton TierDir="prevTierButton" changeTierHandler={prevTier} changeTierButtonDisable={changeTierButtonDisable}/>
                <TierButton TierDir="nextTierButton" changeTierHandler={nextTier} changeTierButtonDisable={changeTierButtonDisable}/>
                
            </div>
        </>
    );
}

function TierButton({TierDir, changeTierHandler, changeTierButtonDisable})
{

    return(
        <div id={TierDir} onClick={changeTierHandler} className={changeTierButtonDisable}>
            <ArrowRightIcon />
        </div>
    );
}