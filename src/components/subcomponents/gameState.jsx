import React from "react";
import { Routes, Route } from "react-router-dom";
import Ruleta from "./sub-gameStatus/ruleta";
import Almacen from "./sub-gameStatus/almacen";
import Marcadores from "./sub-gameStatus/marcadores";
import Pokedex from "./sub-gameStatus/pokedex";
import VerPokemonAlmacen from "./sub-gameStatus/verPokemonAlmacen";
import Intercambio from "./sub-gameStatus/intercambio";

function GameState() {
  return (
    <Routes>
      <Route path="/ruleta" element={<RuletaGameState />} />

      <Route path="/almacen" element={<AlmacenGameState />} />

      <Route
        path="/almacen/ver-pokemon"
        element={<VerPokemonAlmacenGameState />}
      />

      <Route path="/pokedex" element={<PokedexGameState />} />

      <Route path="/marcadores" element={<MarcadoresGameState />} />

      <Route path="/intercambio" element={<IntercambioGameState />} />

      <Route path="*" element={<></>} />
    </Routes>
  );
}

function RuletaGameState() {
  return <Ruleta />;
}

function AlmacenGameState() {
  return <Almacen />;
}

function VerPokemonAlmacenGameState() {
  return <VerPokemonAlmacen />;
}

function PokedexGameState() {
  return <Pokedex />;
}

function MarcadoresGameState() {
  return <Marcadores />;
}

function IntercambioGameState() {
  return <Intercambio />;
}

export default GameState;
