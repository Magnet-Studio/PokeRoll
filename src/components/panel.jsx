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
    skeledirgeCreatorBeastEvent: false,
    sawkAndressruiizEvent: false,
    unownSimulationOfMarioEvent: false,
    gengarSparaopEvent: false,
    arcanineJoseCPEvent: false,
    centiskorchGmaxEvent: false
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
    const savedSawkAndressRuiizEvent = localStorage.getItem("sawkAndressruiizEvent");
    const savedUnownSimulationOfMarioEvent = localStorage.getItem("unownSimulationOfMarioEvent");
    const savedGengarSparaopEvent = localStorage.getItem("gengarSparaopEvent");
    const savedArcanineJoseCPEvent = localStorage.getItem("arcanineJoseCPEvent");
    const savedCentiskorchGmaxEvent = localStorage.getItem("centiskorchGmaxEvent");

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
        skeledirgeCreatorBeastEvent: savedSkeledirgeCreatorBeastEvent ? savedSkeledirgeCreatorBeastEvent : initData.skeledirgeCreatorBeastEvent,
        sawkAndressruiizEvent: savedSawkAndressRuiizEvent ? savedSawkAndressRuiizEvent : initData.sawkAndressruiizEvent,
        unownSimulationOfMarioEvent: savedUnownSimulationOfMarioEvent ? savedUnownSimulationOfMarioEvent : initData.unownSimulationOfMarioEvent,
        gengarSparaopEvent: savedGengarSparaopEvent ? savedGengarSparaopEvent : initData.gengarSparaopEvent,
        arcanineJoseCPEvent: savedArcanineJoseCPEvent ? savedArcanineJoseCPEvent : initData.arcanineJoseCPEvent,
        centiskorchGmaxEvent: savedCentiskorchGmaxEvent ? savedCentiskorchGmaxEvent : initData.centiskorchGmaxEvent,

    };
}

const EventCodeList = [
    "sandyShocksBetaEvent",
    "skeledirgeCreatorBeastEvent",
    "sawkAndressruiizEvent",
    "unownSimulationOfMarioEvent",
    "gengarSparaopEvent",
    "arcanineJoseCPEvent",
    "centiskorchGmaxEvent",
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
        "originaltrainer": "PokéRoll", // jsx
        "type1":"electric",    // jsx hecho
        "type2":"ground",   // jsx hecho
        "event": true,
        "event_desc" : "¡Gracias por participar en la Beta de PokéRoll! Disfruta de este Pelarena variocolor durante tu estancia :)"
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
        event_desc:"¡Disfruta de este Skeledirge variocolor de parte de uno de los creadores de PokéRoll! ¡Que los cantos celestiales de este Pokémon bendigan tus tiradas!"
    },
    {
        frequency:3,
        speciesname:"Sawk",
        name:539,
        shiny:"shiny",
        nametag:"Llados ✰",
        originaltrainer:"Andressruiiz",
        type1:"fighting",
        type2:null,
        event:true,
        event_desc:"¡Disfruta de este Sawk variocolor de parte de uno de los creadores de PokéRoll! ¡Que este Pokémon te de suerte y dejen de tocarte panzas y mileuristas!"
    },
    {
        frequency:3,
        speciesname:"UnowM ✰",
        name:201,
        shiny:"shiny",
        nametag:"Unown?",
        originaltrainer:"SimulationOfMario",
        type1:"psychic",
        type2:null,
        event:true,
        variant: {name: "unown-m"},
        event_desc:"¡Disfruta de este Unown variocolor de parte de uno de los creadores de PokéRoll! ¡Felicidades Mario, a ver si esto te ayuda a completar tu colección de Unowns!"
    },
    {
        frequency:4,
        speciesname:"Gengar",
        name:94,
        shiny:"shiny",
        nametag:"Shadow ✰",
        originaltrainer:"Sparaop",
        type1:"ghost",
        type2:"poison",
        megaevolution:true,
        variant: {name: "gengar-mega"},
        event:true,
        event_desc:"¡Disfruta de este Gengar megaevolucionado variocolor de parte de uno de los creadores de PokéRoll! ¡Que este Gengar te acompañe hasta en los momentos más sombríos!"
    },
    {
        frequency:3,
        speciesname:"Arcanine",
        name:59,
        shiny:"shiny",
        nametag:"Anubis ✰",
        originaltrainer:"JoseCP",
        type1:"fire",
        type2:"rock",
        variant: { name: "arcanine-hisuian", types: ["fire", "rock"] },
        event:true,
        event_desc:"¡Disfruta de este Arcanine de Hisui variocolor de parte de uno de los creadores de PokéRoll! ¡Felicidades Jose, disfruta de esta leyenda de Pokémon!"
    },
    {
        frequency: 4,
        speciesname:"Centiskorch",
        name: 851,
        shiny: "shiny",
        nametag: "El bicho ✰",
        originaltrainer: "PokéROLL",
        type1:"fire",
        type2:"bug",
        variant: { name: "centiskorch-gigantamax", gmax: true},
        gigantamax: true,
        event: true,
        event_desc: "Como inauguración de las especies Gigamax, ¡llévate a este Centiskorch Gigamax variocolor de regalo!"
    }

]

/** Función utilizada para crear eventos de distribución
 * 
 * @param {*} UserData Los datos del usuario
 * @param {*} setUserData La operacion setUserData definida en Panel
 * @param {string} eventCode El código del evento (Es el parámetro que se pilla en el LocalStorage como clave, ej. "sandyShocksBetaEvent")
 * @param {Date} startDate Fecha de comienzo INCLUSIVE (IMPORTANTE: Mes que se quiera - 1)
 * @param {Date} endDate Fecha de fin EXCLUSIVE (IMPORTANTE: Mes que se quiera - 1)
 * @param {string | boolean} eventCommand El valor de UserData a comprobar (ej. UserData.sandyShocksBetaEvent)
 */
function GetSpecialEvent(eventIndex, UserData, setUserData, startDate, endDate, eventCommand) {
    let fecha = new Date();
    //console.log(fecha <= endDate && fecha >= startDate)
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
        UserData.skeledirgeCreatorBeastEvent,
        UserData.sawkAndressruiizEvent,
        UserData.unownSimulationOfMarioEvent,
        UserData.gengarSparaopEvent,
        UserData.arcanineJoseCPEvent,
        UserData.centiskorchGmaxEvent
    ];

    useEffect(() => {
        const data = savedData();
        if (data !== null) {
            setUserData(data);
        }

        // Ordenados por orden de fecha de inicio
        // Sandy Shocks
        GetSpecialEvent(0, UserData, setUserData, new Date(2024, 4, 31), new Date(2024, 6, 1), EventCommandList);
        // Arcanine de Hisui
        GetSpecialEvent(5, UserData, setUserData, new Date(2024, 4, 31), new Date(2024, 5, 4), EventCommandList);
        // Sawk
        GetSpecialEvent(2, UserData, setUserData, new Date(2024, 5, 4), new Date(2024, 5, 7), EventCommandList);
        // Skeledirge
        GetSpecialEvent(1, UserData, setUserData, new Date(2024, 5, 7), new Date(2024, 5, 10), EventCommandList);
        // Mega Gengar 
        GetSpecialEvent(4, UserData, setUserData, new Date(2024, 5, 10), new Date(2024, 5, 13), EventCommandList);
        // Unown
        GetSpecialEvent(3, UserData, setUserData, new Date(2024, 5, 13), new Date(2024, 5, 16), EventCommandList);
        // Centiskorch Gigantamax
        GetSpecialEvent(6, UserData, setUserData, new Date(2024, 6, 5), new Date(2024, 11, 1), EventCommandList);

    // eslint-disable-next-line
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
    const coinsReference = useRef("coinsReference");

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
                                                        setThreePokemon={setThreePokemon} coinsReference={coinsReference}/>
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
        <div className='subpanel' id='coinsPanel'>
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
        <div className='subpanel' id="usernamePanel">
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
                            setThreePokemon={setThreePokemon} coinsReference={coinsReference}/>
        </div>
    );
}

/* Lo único que hace falta exportar */
export default MainPanel;