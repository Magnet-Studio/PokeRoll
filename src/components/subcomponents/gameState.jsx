import React from "react";
import { Routes, Route } from "react-router-dom";
import Ruleta from "./sub-gameStatus/ruleta";
import Almacen from "./sub-gameStatus/almacen";
import Marcadores from "./sub-gameStatus/marcadores";
import Pokedex from "./sub-gameStatus/pokedex";
import VerPokemonAlmacen from "./sub-gameStatus/verPokemonAlmacen";
import TipoIntercambio from "./sub-gameStatus/tipointercambio";
import Intercambio from "./sub-gameStatus/intercambio";
import PantallaCargaIntercambio from "./sub-gameStatus/pantallaCargaIntercambio";

function GameState({threePokemon, tirarButtonDisable, TierRuleta, setThreePokemon}) {
  return (
    <Routes>

      <Route path="/" element={<RuletaGameState threePokemon={threePokemon} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} setThreePokemon={setThreePokemon}/>} />

      <Route path="/ruleta" element={<RuletaGameState threePokemon={threePokemon} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} setThreePokemon={setThreePokemon} />} />

      <Route path="/almacen" element={<AlmacenGameState />} />

      <Route
        path="/almacen/ver-pokemon"
        element={<VerPokemonAlmacenGameState />}
      />

      <Route path="/pokedex" element={<PokedexGameState />} />

      <Route path="/marcadores" element={<MarcadoresGameState />} />

      <Route path="/intercambio/tipo" element={<TipoIntercambioGameState />} />

      <Route path="/intercambio" element={<IntercambioGameState />} />

      <Route
        path="/intercambio/pantallaCarga"
        element={<PantallaCargaGameState />}
      />

      <Route path="*" element={<></>} />
    </Routes>
  );
}

function RuletaGameState({threePokemon, tirarButtonDisable, TierRuleta, setThreePokemon}) {
  return <Ruleta threePokemon={threePokemon} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} setThreePokemon={setThreePokemon}/>;
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

function TipoIntercambioGameState() {
  return <TipoIntercambio />;
}

function IntercambioGameState() {
  return <Intercambio />;
}

function PantallaCargaGameState() {
  return <PantallaCargaIntercambio />;
}

export default GameState;
