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
import IntercambioSimulado from "./sub-gameStatus/intercambioSimulado";
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

      <Route path="/marcadores" element={<MarcadoresGameState />} />

      <Route path="/intercambio/tipo" element={<TipoIntercambioGameState />} />

      <Route path="/intercambio" element={<IntercambioGameState />} />

      <Route
        path="/intercambio/conexion"
        element={<ConexionIntercambioGameState />}
      />

      <Route
        path="/intercambio/pantallaCarga"
        element={<PantallaCargaGameState />}
      />

      <Route path="*" element={<></>} />
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

function ConexionIntercambioGameState() {
  const exchangePlayerIndex = Math.floor(Math.random() * PlayerList.length);
  const exchangeUserName = PlayerList[exchangePlayerIndex].playername;
  return <IntercambioSimulado userToExchange={exchangeUserName} />;
}

export default GameState;
