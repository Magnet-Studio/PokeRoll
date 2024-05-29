import React, { useState, useEffect } from 'react';
import './styles/ruletaElements.css';
import CoinImage from '../../../images/coin.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { GetThreeRandomPokemon } from '../sub-gameStatus/lib/RuletaController';

export function TirarButton({ cost, coinsReference, TierRuleta, setUserData, tirarButtonDisable, setTirarButtonDisable, setChangeTierButtonDisable, UserData, setThreePokemon }) {

    const [redTirarButton, setRedTirarButton] = useState("");

    const tirarHandler = () => {
        if (UserData.currency >= cost) {
            setUserData(prevUserData => {
                const updatedUserData = { ...prevUserData }; // Crear una copia del estado anterior
                updatedUserData.currency -= cost; // Modificar la copia (restar dinero)
                return updatedUserData; // Devolver la copia modificada
            });

            // Se desactivan los botones de Tirar y de Cambiar de Tier
            setTirarButtonDisable("disabled");
            setChangeTierButtonDisable("disabled");

            setThreePokemon(GetThreeRandomPokemon(TierRuleta - 1, UserData));

            // ! IMPLEMENTAR con otra cosa (?)
            if(coinsReference) 
            {
                coinsReference.current.focus(); // Te cambia el tab a las monedas si has reclamado
            }
        }
    }

    // El botón de Tirar se queda disabled + rojo si no tienes suficientes monedas para esa tirada
    useEffect(() => {
        if (UserData.currency >= cost) {
            setRedTirarButton("");
        } else {
            setRedTirarButton("notEnoughMoney")
        }
    }, [UserData.currency, cost]);

    return (
        <button
            id='tirarButton'
            onClick={tirarHandler}
            className={`${tirarButtonDisable} ${redTirarButton}`}
            disabled={tirarButtonDisable === "disabled"}
            aria-disabled={tirarButtonDisable === "disabled"}
            aria-label={`Tirar por ${cost} monedas`}
        >
            <p>TIRAR</p>
            <div>
                <p>{cost}</p>
                <img src={CoinImage} alt="Monedas" />
            </div>
        </button>
    );
}

export function ChangeTierButtons({ TierRuleta, setTierRuleta, changeTierButtonDisable }) {
    const prevTier = () => {
        setTierRuleta(prevTierRuleta => {
            if (prevTierRuleta <= 1) {
                return 5;
            }
            return prevTierRuleta - 1;
        });
    };

    const nextTier = () => {
        setTierRuleta(prevTierRuleta => {
            if (prevTierRuleta >= 5) {
                return 1;
            }
            return prevTierRuleta + 1;
        });
    };

    return (
        <>
            <div id="changeTierButtons" role="group" >
                <p>
                    TIER {TierRuleta}
                </p>
                <TierButton
                    TierDir="prevTierButton"
                    changeTierHandler={prevTier}
                    changeTierButtonDisable={changeTierButtonDisable}
                    ariaLabel="Cambiar al Tier anterior"
                />
                <TierButton
                    TierDir="nextTierButton"
                    changeTierHandler={nextTier}
                    changeTierButtonDisable={changeTierButtonDisable}
                    ariaLabel="Cambiar al siguiente Tier"
                />
            </div>
        </>
    );
}

function TierButton({ TierDir, changeTierHandler, changeTierButtonDisable, ariaLabel }) {
    return (
        <button
            id={TierDir}
            onClick={changeTierHandler}
            className={changeTierButtonDisable}
            disabled={changeTierButtonDisable === "disabled"}
            aria-disabled={changeTierButtonDisable === "disabled"}
            aria-label={ariaLabel}
        >
            <ArrowRightIcon />
        </button>
    );
}
