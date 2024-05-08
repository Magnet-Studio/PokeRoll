/**
 * Contenidos del panel que tiene las diferentes posibilidades
 * de los elementos que hay arriba: titulo con/sin botón de cambio de Tier de tirada
 */

import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import './styles/topElements.css';
import TitleGameStatus from './sub-topElements/titleGameStatus';
import { GetPokemonByID } from './sub-gameStatus/userdata/pokemonList';

/**
 * Rutas de todas las posibilidades del elemento superior (título / cambiar tier)
 */
function TopElements()
{

    const location = useLocation();
    let pokenametag = "";
    if (location.pathname === "/almacen/ver-pokemon") {
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get("id");
        const pokemon = GetPokemonByID(id);
        pokenametag = pokemon.nametag;
    }

    return (
        <Routes>
            <Route path='/ruleta' element={<TitleGameStatus titleName='Ruleta'/>} />

            <Route path='/almacen' element={<TitleGameStatus titleName='Mi almacén de Pokémon'/>} />

            <Route path='/almacen/ver-pokemon' element={<TitleGameStatus titleName={'Datos de ' + pokenametag}/>} />

            <Route path='/pokedex' element={<TitleGameStatus titleName='Pokédex'/>} />

            <Route path='/marcadores' element={<TitleGameStatus titleName='Clasificación'/>} />

            <Route path='/intercambio' element={<TitleGameStatus titleName='Intercambio Pokémon'/>} />

            <Route path='*' element={<></>} />
        </Routes>
    );
}

export default TopElements;