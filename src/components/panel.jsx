import React from 'react';
import './styles/panel.css';
import Logo from './subcomponents/logo';
import Login from './subcomponents/login';
import Coins from './subcomponents/coins';
import Username from './subcomponents/username';
import TopElements from './subcomponents/topElements';
import BottomElements from './subcomponents/bottomElements';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameState from './subcomponents/gameState';
import {useState, useEffect} from 'react';

const initData = {
    name:"Iniciar sesión",
    pass:"",
    currency: 300,
    pokemonList: [JSON.stringify({})],
    registers: [0]
}

const savedData = () => 
{
    const savedName = localStorage.getItem("username");
    const savedPass = localStorage.getItem("pass");
    const savedCurrency = localStorage.getItem("currency");
    const savedPokemonList = JSON.parse(localStorage.getItem("pokemonList"));
    const savedRegisters = JSON.parse(localStorage.getItem("registers"));

    return {
        name: savedName ? savedName : initData.name,
        pass: savedPass ? savedPass : initData.pass,
        currency: savedCurrency ? parseInt(savedCurrency) : initData.currency,
        pokemonList: savedPokemonList ? savedPokemonList : initData.pokemonList,
        registers: savedRegisters ? savedRegisters : initData.registers
    };
}

/** 
 * Este es el panel principal azul donde se contiene todo
*/
function MainPanel()
{
     
    const [UserData, setUserData] = useState(savedData() || initData);

    useEffect(() => {
        localStorage.setItem("username", UserData.name);
        localStorage.setItem("pass", UserData.pass);
        localStorage.setItem("currency", UserData.currency.toString());
        localStorage.setItem("pokemonList", JSON.stringify(UserData.pokemonList));
        localStorage.setItem("registers", JSON.stringify(UserData.registers));
    }, [UserData]);

    useEffect(() => {
        const data = savedData();
        if (data !== null) {
            setUserData(data);
        }
    }, []);

    // El Tier actual seleccionado de la ruleta
    const [TierRuleta, setTierRuleta] = useState(parseInt(sessionStorage.getItem("TierRuleta")) || 1);

    // El estado actual (disabled/enabled) de los botones de Tirar y de Cambiar Tier Ruleta
    const [tirarButtonDisable, setTirarButtonDisable] = useState("");
    const [changeTierButtonDisable, setChangeTierButtonDisable] = useState("");

    // Guardar en sesión actual Tier de la ruleta
    useEffect(() => {
        // Esto es un handler por si se saliera de rango TierRuleta
        if(TierRuleta < 1 || TierRuleta > 5)
        {
            setTierRuleta(1);
        }

        sessionStorage.setItem("TierRuleta", TierRuleta);
    }, [TierRuleta]);

    // Los tres pokémon que te tocan por tirada
    const [threePokemon, setThreePokemon] = useState([{}, {}, {}]);


    return (
        <>

            <div id='mainPanelContainer'>
                <div id='mainPanel'>

                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={
                            <>
                                <div id='logoContainer' className='subpanelContainer'>
                                    <LogoPanel/>
                                </div>
                                <div id='loginPanelContainer' className='subpanelContainer'>
                                    <LoginPanel setUserData={setUserData} />
                                </div>
                            </>
                        }/>
                        <Route path="*" element={
                            <>
                                <div id='logoContainer' className='subpanelContainer'>
                                    <LogoPanel/>
                                </div>
                                <div id='coinsPanelContainer' className='subpanelContainer'>
                                    <CoinsPanel UserData={UserData} />
                                </div>
                                <div id='topelementsPanelContainer' className='subpanelContainer'>
                                    <TopElementsPanel tirarButtonDisable={tirarButtonDisable} />
                                </div>
                                <div id='usernamePanelContainer' className='subpanelContainer'>
                                    <UsernamePanel UserData={UserData}/>
                                </div>
                                <div id='gamestatePanelContainer' className='subpanelContainer'> 
                                    <GameStatePanel UserData={UserData} setUserData={setUserData} TierRuleta={TierRuleta} threePokemon={threePokemon} tirarButtonDisable={tirarButtonDisable} setThreePokemon={setThreePokemon} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} />
                                </div>
                                <div id='bottomelementsPanelContainer' className='subpanelContainer'>
                                    <BottomElementsPanel UserData={UserData} setUserData={setUserData} 
                                                        TierRuleta={TierRuleta} setTierRuleta={setTierRuleta} 
                                                        tirarButtonDisable={tirarButtonDisable} setTirarButtonDisable={setTirarButtonDisable}
                                                        changeTierButtonDisable={changeTierButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable}
                                                        setThreePokemon={setThreePokemon}/>
                                </div>
                            </>
                        }/>
                    </Routes>
                </BrowserRouter>
                    
                </div>
            </div>
        </>
    );
}

/**
 * Este es el panel que contiene el logo
 */
function LogoPanel()
{
    return (
        <div className='subpanel' id='logoPanel'>
            <Logo/>
        </div>
    );
}

/**
 * Este es el panel que contiene el login
 */
function LoginPanel({setUserData})
{
    return (
        <div id='loginPanel'>
            <Login setUserData={setUserData} />
        </div>
    );
}

/**
 * Este es el panel que contiene el número de monedas
 */
function CoinsPanel({UserData})
{
    return (
        <div className='subpanel'>
            <Coins UserData={UserData}/>
        </div>
    );
}

/**
 * Este es el panel que contiene el título de dónde te encuentras
 */
function TopElementsPanel({tirarButtonDisable})
{
    return (
        <div className='subpanel' id='topelementsPanel'>
            <TopElements tirarButtonDisable={tirarButtonDisable}/>
        </div>
    );
}


/**
 * Este es el panel que contiene el username
 */
function UsernamePanel({UserData})
{
    return (
        <div className='subpanel'>
            <Username UserData={UserData}/>
        </div>
    );
}

/**
 * Este es el panel que contiene el estado actual del juego (game state)
 */
function GameStatePanel({UserData, setUserData, threePokemon, tirarButtonDisable, TierRuleta, setThreePokemon, setTirarButtonDisable, setChangeTierButtonDisable})
{
    return (
        <div className='subpanel' id='gamestatePanel'>
            <GameState UserData={UserData} TierRuleta={TierRuleta} setUserData={setUserData} threePokemon={threePokemon} tirarButtonDisable={tirarButtonDisable} setThreePokemon={setThreePokemon} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable}/>
        </div>
    );
}


/**
 * Este es el panel que contiene los botones de navegación / el botón de Tirar / la pokéball
 */
function BottomElementsPanel({UserData, setUserData, TierRuleta, setTierRuleta, tirarButtonDisable, setChangeTierButtonDisable, setTirarButtonDisable, changeTierButtonDisable, setThreePokemon})
{
    return (
        <div className='subpanel' id='bottomelementsPanel'>
            <BottomElements UserData={UserData} setUserData={setUserData} TierRuleta={TierRuleta} setTierRuleta={setTierRuleta} 
                            tirarButtonDisable={tirarButtonDisable} setTirarButtonDisable={setTirarButtonDisable}
                            changeTierButtonDisable={changeTierButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable}
                            setThreePokemon={setThreePokemon} />
        </div>
    );
}

/* Lo único que hace falta exportar */
export default MainPanel;