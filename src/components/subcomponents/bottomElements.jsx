/**
 * Contenidos del panel que tiene las diferentes posibilidades
 * de los elementos que hay abajo: botones de navegación, pokeball, botón de Tirar
 */

import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import NavButton from "./sub-bottomElements/NavButton";
import "./styles/bottomElements.css";
import AlmacenIcon from "@mui/icons-material/Inventory2";
import IntercambioIcon from "@mui/icons-material/Autorenew";
import MarcadoresIcon from "@mui/icons-material/EmojiEvents";
import PokedexIcon from "@mui/icons-material/Apps";
import RuletaIcon from "@mui/icons-material/Money";
import {
  Pokeball,
  TirarButton,
  ChangeTierButtons,
} from "./sub-bottomElements/ruletaElements";
import { useLocation } from "react-router-dom";
import { GetPokemonByID } from "./sub-gameStatus/lib/pokemonList";
import LiberarButton from "./sub-bottomElements/liberarButton";

/**
 * Rutas de todas las posibilidades del elemento inferior (botones de navegación / pokéball / botón de tirada)
 */
function BottomElements({
  UserData,
  setUserData,
  TierRuleta,
  setTierRuleta,
  tirarButtonDisable,
  setChangeTierButtonDisable,
  setTirarButtonDisable,
  changeTierButtonDisable,
  setThreePokemon,
}) {
  const location = useLocation();
  let pokenametag = "";
  let pokemon;

  if (location.pathname === "/almacen/ver-pokemon") {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    pokemon = GetPokemonByID(id, UserData.pokemonList);
  }

  return (
    <Routes>
      <Route
        path="/ruleta"
        element={
          <ButtonsRuletaStatus
            TierRuleta={TierRuleta}
            setTierRuleta={setTierRuleta}
            UserData={UserData}
            setUserData={setUserData}
            tirarButtonDisable={tirarButtonDisable}
            setTirarButtonDisable={setTirarButtonDisable}
            changeTierButtonDisable={changeTierButtonDisable}
            setChangeTierButtonDisable={setChangeTierButtonDisable}
            setThreePokemon={setThreePokemon}
          />
        }
      />

      <Route path="/" element={<ButtonsLoginStatus UserData={UserData} />} />

      <Route
        path="/almacen/"
        element={<ButtonsAlmacenStatus UserData={UserData} />}
      />

      <Route
        path="/almacen/ver-pokemon"
        element={
          <ButtonsVerPokemonAlmacenStatus
            data={pokemon}
            UserData={UserData}
            setUserData={setUserData}
          />
        }
      />

      <Route
        path="/pokedex/*"
        element={<ButtonsPokedexStatus UserData={UserData} />}
      />

      <Route
        path="/marcadores/*"
        element={<ButtonsMarcadoresStatus UserData={UserData} />}
      />

      <Route
        path="/intercambio/tipo"
        element={<ButtonsIntercambioStatus UserData={UserData} />}
      />

      <Route
        path="/intercambio"
        element={<ButtonsIntercambioStatus UserData={UserData} />}
      />

      <Route
        path="/intercambio/pantallaCarga"
        element={<ButtonsIntercambioStatus UserData={UserData} />}
      />

      <Route
        path="/intercambio/conexion"
        element={<ButtonCancelarConexionIntercambio />}
      />

      <Route path="*" element={<></>} />
    </Routes>
  );
}

const TierCosts = [100, 500, 1500, 4000, 10000];

function ButtonsRuletaStatus({
  TierRuleta,
  setTierRuleta,
  UserData,
  setUserData,
  tirarButtonDisable,
  setChangeTierButtonDisable,
  setTirarButtonDisable,
  changeTierButtonDisable,
  setThreePokemon,
}) {
  const TierCost = TierCosts[TierRuleta - 1];

  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData]);

  return (
    <>
      <div id="navButtonsRuletaStatusContainer">
        <NavButton
          link="/ruleta"
          selected="selected"
          icon={<RuletaIcon />}
          title="Ruleta"
        />
        <NavButton link="/almacen" icon={<AlmacenIcon />} title="Almacén" />
        <NavButton link="/pokedex" icon={<PokedexIcon />} title="Pokédex" />
        <NavButton
          link="/marcadores"
          icon={<MarcadoresIcon />}
          title="Marcadores"
        />
        <NavButton
          link="/intercambio"
          icon={<IntercambioIcon />}
          title="Intercambio"
        />
      </div>

      <div id="ruletaSpecialButtonsContainer">
        <ChangeTierButtons
          TierRuleta={TierRuleta}
          setTierRuleta={setTierRuleta}
          changeTierButtonDisable={changeTierButtonDisable}
        />
        <TirarButton
          cost={TierCost}
          UserData={UserData}
          TierRuleta={TierRuleta}
          setUserData={setUserData}
          tirarButtonDisable={tirarButtonDisable}
          setTirarButtonDisable={setTirarButtonDisable}
          setChangeTierButtonDisable={setChangeTierButtonDisable}
          setThreePokemon={setThreePokemon}
        />
      </div>
    </>
  );
}

function ButtonsVerPokemonAlmacenStatus({ data, UserData, setUserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData]);

  return (
    <>
      <NavButton link="/ruleta" icon={<RuletaIcon />} title="Ruleta" />
      <NavButton
        link="/almacen"
        selected="selected"
        icon={<AlmacenIcon />}
        title="Almacén"
      />
      <NavButton link="/pokedex" icon={<PokedexIcon />} title="Pokédex" />
      <NavButton
        link="/marcadores"
        icon={<MarcadoresIcon />}
        title="Marcadores"
      />
      <NavButton
        link="/intercambio"
        icon={<IntercambioIcon />}
        title="Intercambio"
      />
      <LiberarButton
        data={data}
        setUserData={setUserData}
        UserData={UserData}
      />
    </>
  );
}

function ButtonsAlmacenStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData]);

  return (
    <>
      <NavButton link="/ruleta" icon={<RuletaIcon />} title="Ruleta" />
      <NavButton
        link="/almacen"
        selected="selected"
        icon={<AlmacenIcon />}
        title="Almacén"
      />
      <NavButton link="/pokedex" icon={<PokedexIcon />} title="Pokédex" />
      <NavButton
        link="/marcadores"
        icon={<MarcadoresIcon />}
        title="Marcadores"
      />
      <NavButton
        link="/intercambio"
        icon={<IntercambioIcon />}
        title="Intercambio"
      />
    </>
  );
}

function ButtonsLoginStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name !== "Iniciar sesión") {
      navigate("/ruleta");
    }
  }, [UserData]);

  return (
    <>
      <NavButton link="/login" selected="selected" icon={<RuletaIcon />} />
      <NavButton link="/login" icon={<AlmacenIcon />} />
      <NavButton link="/login" icon={<PokedexIcon />} />
      <NavButton link="/login" icon={<MarcadoresIcon />} />
      <NavButton link="/login" icon={<IntercambioIcon />} />
    </>
  );
}

function ButtonsPokedexStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData]);

  return (
    <>
      <NavButton link="/ruleta" icon={<RuletaIcon />} title="Ruleta" />
      <NavButton link="/almacen" icon={<AlmacenIcon />} title="Almacén" />
      <NavButton
        link="/pokedex"
        selected="selected"
        icon={<PokedexIcon />}
        title="Pokédex"
      />
      <NavButton
        link="/marcadores"
        icon={<MarcadoresIcon />}
        title="Marcadores"
      />
      <NavButton
        link="/intercambio"
        icon={<IntercambioIcon />}
        title="Intercambio"
      />
    </>
  );
}

function ButtonsMarcadoresStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData]);

  return (
    <>
      <NavButton link="/ruleta" icon={<RuletaIcon />} title="Ruleta" />
      <NavButton link="/almacen" icon={<AlmacenIcon />} title="Almacén" />
      <NavButton link="/pokedex" icon={<PokedexIcon />} title="Pokédex" />
      <NavButton
        link="/marcadores"
        selected="selected"
        icon={<MarcadoresIcon />}
        title="Marcadores"
      />
      <NavButton
        link="/intercambio"
        icon={<IntercambioIcon />}
        title="Intercambio"
      />
    </>
  );
}

function ButtonsIntercambioStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData]);

  return (
    <>
      <NavButton link="/ruleta" icon={<RuletaIcon />} title="Ruleta" />
      <NavButton link="/almacen" icon={<AlmacenIcon />} title="Almacén" />
      <NavButton link="/pokedex" icon={<PokedexIcon />} title="Pokédex" />
      <NavButton
        link="/marcadores"
        icon={<MarcadoresIcon />}
        title="Marcadores"
      />
      <NavButton
        link="/intercambio"
        selected="selected"
        icon={<IntercambioIcon />}
        title="Intercambio"
      />
    </>
  );
}

function ButtonCancelarConexionIntercambio() {
  return (
    <Link to="/intercambio">
      <button id="botonCancelarIntercambio">Cancelar</button>
    </Link>
  );
}

export default BottomElements;
