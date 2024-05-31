import React from 'react';
import './styles/panel.css';
import Logo from './subcomponents/logo';
import Login from './subcomponents/login';
import Coins from './subcomponents/coins';
import Username from './subcomponents/username';
import TopElements from './subcomponents/topElements';
import BottomElements from './subcomponents/bottomElements';
import {Route, Routes, HashRouter } from 'react-router-dom';
import GameState from './subcomponents/gameState';
import {useState, useEffect, useRef} from 'react';
import { ReclamarEvent } from './subcomponents/sub-gameStatus/ruleta';
import { GetIVs } from './subcomponents/sub-gameStatus/lib/RuletaController';

const initData = {
    name:"Iniciar sesión",
    pass:"",
    currency: 300,
    pokemonList: [JSON.stringify({})],
    registers: [0],
    shinycharm: false,
    rarecharm: false,
    megacharm: false,
    shinycount: 0,
    rarecount: 0,
    megacount: 0,
    sandyShocksBetaEvent: false,
    skeledirgeCreatorBeastEvent: false
}

const savedData = () => 
{
    const savedName = localStorage.getItem("username");
    const savedPass = localStorage.getItem("pass");
    const savedCurrency = localStorage.getItem("currency");
    const savedPokemonList = JSON.parse(localStorage.getItem("pokemonList"));
    const savedRegisters = JSON.parse(localStorage.getItem("registers"));
    const savedShinyCharm = localStorage.getItem("shinycharm");
    const savedRareCharm = localStorage.getItem("rarecharm");
    const savedMegaCharm = localStorage.getItem("megacharm");
    const savedShinyCount = localStorage.getItem("shinycount");
    const savedRareCount = localStorage.getItem("rarecount");
    const savedMegaCount = localStorage.getItem("megacount");
    const savedSandyShocksBetaEvent = localStorage.getItem("sandyShocksBetaEvent");
    const savedSkeledirgeCreatorBeastEvent = localStorage.getItem("skeledirgeCreatorBeastEvent");

    return {
        name: savedName ? savedName : initData.name,
        pass: savedPass ? savedPass : initData.pass,
        currency: savedCurrency ? parseInt(savedCurrency) : initData.currency,
        pokemonList: savedPokemonList ? savedPokemonList : initData.pokemonList,
        registers: savedRegisters ? savedRegisters : initData.registers,
        shinycharm: savedShinyCharm ? savedShinyCharm : initData.shinycharm,
        rarecharm: savedRareCharm ? savedRareCharm : initData.rarecharm,
        megacharm: savedMegaCharm ? savedMegaCharm : initData.megacharm,
        shinycount: savedShinyCount ? savedShinyCount : initData.shinycount,
        rarecount: savedRareCount ? savedRareCount : initData.rarecount,
        megacount: savedMegaCount ? savedMegaCount : initData.megacount,
        sandyShocksBetaEvent: savedSandyShocksBetaEvent ? savedSandyShocksBetaEvent : initData.sandyShocksBetaEvent,
        skeledirgeCreatorBeastEvent: savedSkeledirgeCreatorBeastEvent ? savedSkeledirgeCreatorBeastEvent : initData.skeledirgeCreatorBeastEvent
    };
}
const EventCodeList = [
    "sandyShocksBetaEvent",
    "skeledirgeCreatorBeastEvent"
]

const EventPokemonList = [
    {
        "frequency":4,
        "iv": {
            "hp":25,
            "atq":25,
            "def":25,
            "spatq":25,
            "spdef":25,
            "spe":25
        },
        "speciesname":"Pelarena",
        "name": 989,
        "nametag":"VMagnet ✰",
        "shiny": "shiny",
        "originaltrainer": "PokéROLL", // jsx
        "type1":"electric",    // jsx hecho
        "type2":"ground",   // jsx hecho
        "event": true,
        "event_desc" : "¡Gracias por participar en la Beta de PokéROLL! Disfruta de este Pelarena variocolor durante tu estancia :)"
    },
    {
        frequency:4,
        speciesname:"Skeledirge",
        name:911,
        shiny:"shiny",
        nametag:"Llaminem ✰",
        originaltrainer:"CreatorBeastGD",
        type1:"fire",
        type2:"ghost",
        event:true,
        event_desc:"¡Disfruta de este Skeledirge variocolor de parte de uno de los creadores de PokéROLL! ¡Que ojalá quede genial en tu colección!"
    }
]
/** Función utilizada para crear eventos de distribución
 * 
 * @param {*} UserData Los datos del usuario
 * @param {*} setUserData La operacion setUserData definida en Panel
 * @param {string} eventCode El código del evento (Es el parámetro que se pilla en el LocalStorage como clave, ej. "sandyShocksBetaEvent")
 * @param {Date} startDate Fecha de comienzo (IMPORTANTE: Mes que se quiera - 1)
 * @param {Date} endDate Fecha de fin (IMPORTANTE: Mes que se quiera - 1)
 * @param {string | boolean} eventCommand El valor de UserData a comprobar (ej. UserData.sandyShocksBetaEvent)
 */
function GetSpecialEvent(eventIndex, UserData, setUserData, startDate, endDate, eventCommand) {
    let fecha = new Date();
    if (fecha <= endDate && fecha >= startDate && eventCommand[eventIndex] !== "true" && UserData.name !== "Iniciar sesión") {
        let eventPokemon = EventPokemonList[eventIndex];
        let eventCode = EventCodeList[eventIndex]
        
        if (eventPokemon?.iv === undefined) {
            eventPokemon.iv = GetIVs(5);
        }

        ReclamarEvent(eventPokemon, UserData, setUserData, eventCode);
    }
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
        localStorage.setItem("shinycount", UserData.shinycount);
        localStorage.setItem("rarecount", UserData.rarecount);
        localStorage.setItem("megacount", UserData.megacount);
        localStorage.setItem("shinycharm", (UserData.registers.length-1 >= 1025));
        localStorage.setItem("rarecharm", (UserData.rarecount >= 300));
        localStorage.setItem("megacharm", (UserData.megacount >= 100));
        
    }, [UserData]);

    const EventCommandList = [
        UserData.sandyShocksBetaEvent,
        UserData.skeledirgeCreatorBeastEvent
    ];

    useEffect(() => {
        const data = savedData();
        if (data !== null) {
            setUserData(data);
        }
        
        GetSpecialEvent(0, UserData, setUserData, new Date(2024, 4, 31), new Date(2024, 5, 30), EventCommandList);
        GetSpecialEvent(1, UserData, setUserData, new Date(2024, 5, 7), new Date(2024, 5, 9), EventCommandList);
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

    // Referencia a las monedas para el tab
    const coinsReference = useRef(null);

    useEffect(() => {
        document.activeElement.blur();
    }, []);
    
    return (
        <>

            <div id='mainPanelContainer'>
                <div id='mainPanel'>

                <HashRouter>
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
                                    <CoinsPanel UserData={UserData} coinsReference={coinsReference} />
                                </div>
                                <div id='topelementsPanelContainer' className='subpanelContainer'>
                                    <TopElementsPanel tirarButtonDisable={tirarButtonDisable} UserData={UserData} />
                                </div>
                                <div id='usernamePanelContainer' className='subpanelContainer'>
                                    <UsernamePanel UserData={UserData}/>
                                </div>
                                <div id='gamestatePanelContainer' className='subpanelContainer'> 
                                    <GameStatePanel UserData={UserData} setUserData={setUserData} coinsReference={coinsReference} TierRuleta={TierRuleta} threePokemon={threePokemon} tirarButtonDisable={tirarButtonDisable} setThreePokemon={setThreePokemon} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} />
                                </div>
                                <div id='bottomelementsPanelContainer' className='subpanelContainer'>
                                    <BottomElementsPanel UserData={UserData} setUserData={setUserData} 
                                                        TierRuleta={TierRuleta} setTierRuleta={setTierRuleta} 
                                                        tirarButtonDisable={tirarButtonDisable} setTirarButtonDisable={setTirarButtonDisable}
                                                        changeTierButtonDisable={changeTierButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable}
                                                        setThreePokemon={setThreePokemon} coinsReference={coinsReference} />
                                </div>
                            </>
                        }/>
                    </Routes>
                </HashRouter>
                    
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
function CoinsPanel({UserData, coinsReference})
{
    return (
        <div className='subpanel'>
            <Coins UserData={UserData} coinsReference={coinsReference} />
        </div>
    );
}

/**
 * Este es el panel que contiene el título de dónde te encuentras
 */
function TopElementsPanel({UserData, tirarButtonDisable})
{
    return (
        <div className='subpanel' id='topelementsPanel'>
            <TopElements tirarButtonDisable={tirarButtonDisable} UserData={UserData}/>
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
function GameStatePanel({UserData, setUserData, threePokemon, tirarButtonDisable, TierRuleta, setThreePokemon, setTirarButtonDisable, setChangeTierButtonDisable, coinsReference})
{
    return (
        <div className='subpanel' id='gamestatePanel'>
            <GameState UserData={UserData} TierRuleta={TierRuleta} setUserData={setUserData} coinsReference={coinsReference} threePokemon={threePokemon} tirarButtonDisable={tirarButtonDisable} setThreePokemon={setThreePokemon} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable}/>
        </div>
    );
}


/**
 * Este es el panel que contiene los botones de navegación / el botón de Tirar / la pokéball
 */
function BottomElementsPanel({UserData, coinsReference, setUserData, TierRuleta, setTierRuleta, tirarButtonDisable, setChangeTierButtonDisable, setTirarButtonDisable, changeTierButtonDisable, setThreePokemon})
{
    return (
        <div className='subpanel' id='bottomelementsPanel'>
            <BottomElements UserData={UserData} setUserData={setUserData} TierRuleta={TierRuleta} setTierRuleta={setTierRuleta} 
                            tirarButtonDisable={tirarButtonDisable} setTirarButtonDisable={setTirarButtonDisable}
                            changeTierButtonDisable={changeTierButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable}
                            setThreePokemon={setThreePokemon} coinsReference={coinsReference} />
        </div>
    );
}

/* Lo único que hace falta exportar */
export default MainPanel;