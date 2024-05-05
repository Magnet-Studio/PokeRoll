import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Ruleta from './sub-gameStatus/ruleta';
import Almacen from './sub-gameStatus/almacen';

function GameState() {
    return (
        <Routes>
            <Route path='/ruleta' element={<RuletaGameState/>} />

            <Route path='/almacen' element={<AlmacenGameState/>} />

            <Route path='/pokedex' element={<PokedexGameState/>} />

            <Route path='/marcadores' element={<MarcadoresGameState/>} />

            <Route path='/intercambio' element={<IntercambioGameState/>} />

            <Route path='*' element={<></>} />
        </Routes>
    );
}

function RuletaGameState() {
    return (
        <Ruleta />
    );
}

function AlmacenGameState() {
    return (
        <Almacen />
    );
}

function PokedexGameState() {
    
}

function MarcadoresGameState() {
    
}

function IntercambioGameState() {
    
}



export default GameState;