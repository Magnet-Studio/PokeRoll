import React from 'react';
import './styles/panel.css';
import Logo from './subcomponents/logo';
import Coins from './subcomponents/coins';
import Username from './subcomponents/username';
import TopElements from './subcomponents/topElements';
import BottomElements from './subcomponents/bottomElements';
import { BrowserRouter } from 'react-router-dom';
import GameState from './subcomponents/gameState';
import {useState} from 'react';

const initData = {
    name:"CreatorBeastGD",
    pass:"beast",
    currency: 100
}

/** 
 * Este es el panel principal azul donde se contiene todo
*/
function MainPanel()
{
    const [UserData, SetUserData] = useState(initData);

    return (
        <>

            <div id='mainPanelContainer'>
                <div id='mainPanel'>

                    <BrowserRouter>

                        <div id='logoContainer' className='subpanelContainer'>
                            <LogoPanel/>
                        </div>

                        <div id='coinsPanelContainer' className='subpanelContainer'>
                            <CoinsPanel UserData={UserData} />
                        </div>

                        <div id='topelementsPanelContainer' className='subpanelContainer'>
                            <TopElementsPanel/>
                        </div>

                        <div id='usernamePanelContainer' className='subpanelContainer'>
                            <UsernamePanel UserData={UserData}/>
                        </div>

                        <div id='gamestatePanelContainer' className='subpanelContainer'> 
                            <GameStatePanel SetUserData={SetUserData}/>
                        </div>

                        <div id='bottomelementsPanelContainer' className='subpanelContainer'>
                            <BottomElementsPanel UserData={UserData} SetUserData={SetUserData}/>
                        </div>

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
function TopElementsPanel()
{
    return (
        <div className='subpanel' id='topelementsPanel'>
            <TopElements/>
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
function GameStatePanel({UserData, SetUserData})
{
    return (
        <div className='subpanel' id='gamestatePanel'>
            <GameState UserData={UserData} SetUserData={SetUserData} />
        </div>
    );
}


/**
 * Este es el panel que contiene los botones de navegación / el botón de Tirar / la pokéball
 */
function BottomElementsPanel({UserData, SetUserData})
{
    return (
        <div className='subpanel' id='bottomelementsPanel'>
            <BottomElements UserData={UserData} SetUserData={SetUserData}/>
        </div>
    );
}

/* Lo único que hace falta exportar */
export default MainPanel;