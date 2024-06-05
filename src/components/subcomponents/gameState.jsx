import React from "react";
import { Routes, Route } from "react-router-dom";
import Ruleta from "./sub-gameStatus/ruleta";
import Almacen from "./sub-gameStatus/almacen";
import Marcadores from "./sub-gameStatus/marcadores";
import Pokedex from "./sub-gameStatus/pokedex";
import VerPokemonAlmacen from "./sub-gameStatus/verPokemonAlmacen";
import TipoIntercambio from "./sub-gameStatus/tipointercambio";
import Intercambio from "./sub-gameStatus/intercambio";
import IntercambioSimulado from "./sub-gameStatus/intercambioSimulado";
import Error404 from "./sub-gameStatus/Error404";
import { PlayerList } from "./sub-gameStatus/userdata/rankingList";

function GameState({
  UserData,
  threePokemon,
  tirarButtonDisable,
  TierRuleta,
  setThreePokemon,
  setTirarButtonDisable,
  setChangeTierButtonDisable,
  setUserData,
  coinsReference
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RuletaGameState
            threePokemon={threePokemon}
            tirarButtonDisable={tirarButtonDisable}
            TierRuleta={TierRuleta}
            setThreePokemon={setThreePokemon}
            setTirarButtonDisable={setTirarButtonDisable}
            setChangeTierButtonDisable={setChangeTierButtonDisable}
            setUserData={setUserData}
          />
        }
      />

      <Route
        path="/ruleta"
        element={
          <RuletaGameState
            UserData={UserData}
            threePokemon={threePokemon}
            tirarButtonDisable={tirarButtonDisable}
            TierRuleta={TierRuleta}
            setThreePokemon={setThreePokemon}
            setTirarButtonDisable={setTirarButtonDisable}
            setChangeTierButtonDisable={setChangeTierButtonDisable}
            setUserData={setUserData}
            coinsReference={coinsReference}
          />
        }
      />

      <Route
        path="/almacen"
        element={
          <AlmacenGameState UserData={UserData} setUserData={setUserData} />
        }
      />

      <Route
        path="/almacen/ver-pokemon"
        element={
          <VerPokemonAlmacenGameState
            UserData={UserData}
            setUserData={setUserData}
          />
        }
      />

      <Route
        path="/pokedex"
        element={<PokedexGameState UserData={UserData} />}
      />

      <Route
        path="/marcadores"
        element={<MarcadoresGameState UserData={UserData} />}
      />

      <Route path="/intercambio/tipo" element={<TipoIntercambioGameState />} />

      <Route path="/intercambio" element={<IntercambioGameState UserData={UserData}/>} />

      <Route
        path="/intercambio/conexion"
        element={<ConexionIntercambioGameState />}
      />

      <Route path="*" element={<Error404GameState />} />
    </Routes>
  );
}

function RuletaGameState({
  UserData,
  threePokemon,
  tirarButtonDisable,
  TierRuleta,
  setThreePokemon,
  setTirarButtonDisable,
  setChangeTierButtonDisable,
  setUserData,
  coinsReference
}) {
  return (
    <Ruleta
      UserData={UserData}
      threePokemon={threePokemon}
      tirarButtonDisable={tirarButtonDisable}
      TierRuleta={TierRuleta}
      setThreePokemon={setThreePokemon}
      setTirarButtonDisable={setTirarButtonDisable}
      setChangeTierButtonDisable={setChangeTierButtonDisable}
      setUserData={setUserData}
      coinsReference={coinsReference}
    />
  );
}

function AlmacenGameState({ UserData, setUserData }) {
  return <Almacen UserData={UserData} setUserData={setUserData} />;
}

function VerPokemonAlmacenGameState({ UserData, setUserData }) {
  return <VerPokemonAlmacen UserData={UserData} setUserData={setUserData} />;
}

function PokedexGameState({ UserData }) {
  return <Pokedex UserData={UserData} />;
}

function MarcadoresGameState({ UserData }) {
  return <Marcadores UserData={UserData} />;
}

function TipoIntercambioGameState() {
  return <TipoIntercambio />;
}

function IntercambioGameState({ UserData }) {
  return <Intercambio UserData={UserData} />;
}

function ConexionIntercambioGameState() {
  return <IntercambioSimulado />;
}

function Error404GameState() {
  return <Error404 />;
}

export default GameState;
