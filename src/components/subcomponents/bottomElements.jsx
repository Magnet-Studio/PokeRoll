/**
 * Contenidos del panel que tiene las diferentes posibilidades
 * de los elementos que hay abajo: botones de navegación, pokeball, botón de Tirar
 */

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './styles/bottomElements.css';

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
        </>
    );
}

function ButtonsAlmacenStatus()
{
    return(
        <>
        </>
    );
}

function ButtonsPokedexStatus()
{
    return(
        <>
        </>
    );
}

function ButtonsMarcadoresStatus()
{
    return(
        <>
        </>
    );
}

function ButtonsIntercambioStatus()
{
    return(
        <>
        </>
    );
}

export default BottomElements;