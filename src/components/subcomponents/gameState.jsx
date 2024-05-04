import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Ruleta from './sub-gameStatus/ruleta';

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
    
}

function PokedexGameState() {
    
}

function MarcadoresGameState() {
    
}

function IntercambioGameState() {
    
}



export default GameState;