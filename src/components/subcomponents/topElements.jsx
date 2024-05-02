/**
 * Contenidos del panel que tiene las diferentes posibilidades
 * de los elementos que hay arriba: titulo con/sin botón de cambio de Tier de tirada
 */

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './styles/topElements.css';
import TitleGameStatus from './sub-topElements/titleGameStatus';

/**
 * Rutas de todas las posibilidades del elemento superior (título / cambiar tier)
 */
function TopElements()
{
    return (
        <Routes>
            <Route path='/' element={<></>} />

            <Route path='/almacen' element={<TitleGameStatus titleName='Mi almacén de Pokémon'/>} />

            <Route path='/pokedex' element={<TitleGameStatus titleName='Pokédex'/>} />

            <Route path='/marcadores' element={<TitleGameStatus titleName='Clasificación'/>} />

            <Route path='/intercambio' element={<TitleGameStatus titleName='Intercambio Pokémon'/>} />

            <Route path='*' element={<></>} />
        </Routes>
    );
}

export default TopElements;