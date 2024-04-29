import React from 'react';
import '../styles/panel.css';
import Logo from './logo';

/** 
 * Este es el panel principal azul donde se contiene todo
*/
function MainPanel()
{
    return (
        <>
            <div id='topBorder'></div>

            <div id='mainPanelContainer'>
                <div id='mainPanel'>

                    <div id='coinsPanelContainer'>
                        <CoinsPanel/>
                    </div>
                    
                    <div id='logoContainer'>
                        <Logo/>
                    </div>

                    <div id='userPanelContainer'>
                        <UserPanel/>
                    </div>

                    <div id='rouletteContainer'> 

                    </div>
                    
                </div>
            </div>
        </>
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
 * Este es el panel que contiene el user account
 */
function UserPanel()
{
    return (
        <div className='subpanel'>

        </div>
    );
}

/* Lo único que hace falta exportar */
export default MainPanel;