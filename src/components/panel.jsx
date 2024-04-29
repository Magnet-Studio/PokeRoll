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

                    <div id='coinsPanelContainer' className='subpanelContainer'>
                        <CoinsPanel/>
                    </div>
                    
                    <div id='logoContainer' className='subpanelContainer'>
                        <Logo/>
                    </div>

                    <div id='usernamePanelContainer' className='subpanelContainer'>
                        <UsernamePanel/>
                    </div>

                    <div id='rouletteContainer' className='subpanelContainer'> 

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
 * Este es el panel que contiene el username
 */
function UsernamePanel()
{
    return (
        <div className='subpanel'>

        </div>
    );
}

/* Lo único que hace falta exportar */
export default MainPanel;