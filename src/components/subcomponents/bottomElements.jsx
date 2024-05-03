/**
 * Contenidos del panel que tiene las diferentes posibilidades
 * de los elementos que hay abajo: botones de navegación, pokeball, botón de Tirar
 */

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavButton from './sub-bottomElements/NavButton';
import './styles/bottomElements.css';
import AlmacenIcon from '@mui/icons-material/Inventory2';
import IntercambioIcon from '@mui/icons-material/Autorenew';
import MarcadoresIcon from '@mui/icons-material/EmojiEvents';
import PokedexIcon from '@mui/icons-material/Apps';
import RuletaIcon from '@mui/icons-material/Money';

/**
 * Rutas de todas las posibilidades del elemento inferior (botones de navegación / pokéball / botón de tirada)
 */
function BottomElements()
{
    return (
        <Routes>
            <Route path='/' element={<ButtonsRuletaStatus/>} />

            <Route path='/almacen' element={<ButtonsAlmacenStatus/>} />

            <Route path='/pokedex' element={<ButtonsPokedexStatus/>} />

            <Route path='/marcadores' element={<ButtonsMarcadoresStatus/>} />

            <Route path='/intercambio' element={<ButtonsIntercambioStatus/>} />

            <Route path='*' element={<></>} />
            
        </Routes>
    );
}

function ButtonsRuletaStatus()
{
    return(
        <>
            <NavButton link='/' selected="selected" icon={<RuletaIcon/>}/>
            <NavButton link='/almacen' icon={<AlmacenIcon/>}/>
            <NavButton link='/pokedex' icon={<PokedexIcon/>}/>
            <NavButton link='/marcadores' icon={<MarcadoresIcon/>}/>
            <NavButton link='/intercambio' icon={<IntercambioIcon/>}/>
        </>
    );
}

function ButtonsAlmacenStatus()
{
    return(
        <>
            <NavButton link='/' icon={<RuletaIcon/>}/>
            <NavButton link='/almacen' selected="selected" icon={<AlmacenIcon/>}/>
            <NavButton link='/pokedex' icon={<PokedexIcon/>}/>
            <NavButton link='/marcadores' icon={<MarcadoresIcon/>}/>
            <NavButton link='/intercambio' icon={<IntercambioIcon/>}/>
        </>
    );
}

function ButtonsPokedexStatus()
{
    return(
        <>
            <NavButton link='/' icon={<RuletaIcon/>}/>
            <NavButton link='/almacen' icon={<AlmacenIcon/>}/>
            <NavButton link='/pokedex' selected="selected" icon={<PokedexIcon/>}/>
            <NavButton link='/marcadores' icon={<MarcadoresIcon/>}/>
            <NavButton link='/intercambio' icon={<IntercambioIcon/>}/>
        </>
    );
}

function ButtonsMarcadoresStatus()
{
    return(
        <>
            <NavButton link='/' icon={<RuletaIcon/>}/>
            <NavButton link='/almacen' icon={<AlmacenIcon/>}/>
            <NavButton link='/pokedex' icon={<PokedexIcon/>}/>
            <NavButton link='/marcadores' selected="selected" icon={<MarcadoresIcon/>}/>
            <NavButton link='/intercambio' icon={<IntercambioIcon/>}/>
        </>
    );
}

function ButtonsIntercambioStatus()
{
    return(
        <>
            <NavButton link='/' icon={<RuletaIcon/>}/>
            <NavButton link='/almacen' icon={<AlmacenIcon/>}/>
            <NavButton link='/pokedex' icon={<PokedexIcon/>}/>
            <NavButton link='/marcadores' icon={<MarcadoresIcon/>}/>
            <NavButton link='/intercambio' selected="selected" icon={<IntercambioIcon/>}/>
        </>
    );
}

export default BottomElements;