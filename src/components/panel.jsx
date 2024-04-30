import React from 'react';
import '../styles/panel.css';
import Logo from './subcomponents/logo';

/** 
 * Este es el panel principal azul donde se contiene todo
*/
function MainPanel()
{
    return (
        <>

            <div id='mainPanelContainer'>
                <div id='mainPanel'>

                    <div id='logoContainer' className='subpanelContainer'>
                        <LogoPanel/>
                    </div>

                    <div id='coinsPanelContainer' className='subpanelContainer'>
                        <CoinsPanel/>
                    </div>

                    <div id='topelementsPanelContainer' className='subpanelContainer'>
                        <TopElementsPanel/>
                    </div>

                    <div id='usernamePanelContainer' className='subpanelContainer'>
                        <UsernamePanel/>
                    </div>

                    <div id='gamestatePanelContainer' className='subpanelContainer'> 
                        <GameStatePanel/>
                    </div>

                    <div id='bottomelementsPanelContainer' className='subpanelContainer'>
                        <BottomElementsPanel/>
                    </div>
                    
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
function CoinsPanel()
{
    return (
        <div className='subpanel'>

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

        </div>
    );
}


/**
 * Este es el panel que contiene el username
 */
function UsernamePanel()
{
    return (
        <div className='subpanel'>

        </div>
    );
}

/**
 * Este es el panel que contiene el estado actual del juego (game state)
 */
function GameStatePanel()
{
    return (
        <div className='subpanel' id='gamestatePanel'>

        </div>
    );
}


/**
 * Este es el panel que contiene los botones de navegación / el botón de Tirar / la pokéball
 */
function BottomElementsPanel()
{
    return (
        <div className='subpanel' id='bottomelementsPanel'>

        </div>
    );
}

/* Lo único que hace falta exportar */
export default MainPanel;