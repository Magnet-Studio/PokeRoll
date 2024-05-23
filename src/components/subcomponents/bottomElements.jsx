import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import NavButton from "./sub-bottomElements/NavButton";
import "./styles/bottomElements.css";
import { ReactComponent as AlmacenIcon } from '../../images/almacen.svg';
import IntercambioIcon from "@mui/icons-material/Autorenew";
import MarcadoresIcon from "@mui/icons-material/EmojiEvents";
import { ReactComponent as PokedexIcon } from '../../images/pokedex.svg';
import { ReactComponent as RuletaIcon } from '../../images/ruleta.svg';
import { TirarButton, ChangeTierButtons } from "./sub-bottomElements/ruletaElements";
import { useLocation } from "react-router-dom";
import { GetPokemonByID } from "./sub-gameStatus/lib/pokemonList";
import LiberarButton from "./sub-bottomElements/liberarButton";

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
        element={<ButtonCancelarConexionIntercambio UserData={UserData} />}
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
  setThreePokemon
}) {
  const TierCost = TierCosts[TierRuleta - 1];
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData, navigate]);

  return (
    <>
      <div id="navButtonsRuletaStatusContainer" role="navigation" aria-label="Botones de navegación para Ruleta">
        <NavButton
          link="/ruleta"
          selected="selected"
          icon={<RuletaIcon aria-label="Ruleta" />}
          title="Ruleta"
        />
        <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" />
        <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" />
        <NavButton
          link="/marcadores"
          icon={<MarcadoresIcon aria-label="Marcadores" />}
          title="Marcadores"
        />
        <NavButton
          link="/intercambio"
          icon={<IntercambioIcon aria-label="Intercambio" />}
          title="Intercambio"
        />
      </div>

      <div id="ruletaSpecialButtonsContainer" aria-live="polite">
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
  }, [UserData, navigate]);

  return (
    <>
    <div id="navButtonsRuletaStatusContainer" className="navButtonsCentered">
        <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" />
        <NavButton
          link="/almacen"
          selected="selected"
          icon={<AlmacenIcon aria-label="Almacén" />}
          title="Almacén"
        />
        <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" />
        <NavButton
          link="/marcadores"
          icon={<MarcadoresIcon aria-label="Marcadores" />}
          title="Marcadores"
        />
        <NavButton
          link="/intercambio"
          icon={<IntercambioIcon aria-label="Intercambio" />}
          title="Intercambio"
        />
      </div>
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
  }, [UserData, navigate]);

  return (
    <>
      <div id="navButtonsRuletaStatusContainer" className="navButtonsCentered">
        <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" />
        <NavButton
          link="/almacen"
          selected="selected"
          icon={<AlmacenIcon aria-label="Almacén" />}
          title="Almacén"
        />
        <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" />
        <NavButton
          link="/marcadores"
          icon={<MarcadoresIcon aria-label="Marcadores" />}
          title="Marcadores"
        />
        <NavButton
          link="/intercambio"
          icon={<IntercambioIcon aria-label="Intercambio" />}
          title="Intercambio"
        />
      </div>
    </>
  );
}

function ButtonsLoginStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name !== "Iniciar sesión") {
      navigate("/ruleta");
    }
  }, [UserData, navigate]);

  return (
    <>
      <div id="navButtonsRuletaStatusContainer" className="navButtonsCentered">
        <NavButton link="/login" selected="selected" icon={<RuletaIcon aria-label="Login Ruleta" />} />
        <NavButton link="/login" icon={<AlmacenIcon aria-label="Login Almacén" />} />
        <NavButton link="/login" icon={<PokedexIcon aria-label="Login Pokédex" />} />
        <NavButton link="/login" icon={<MarcadoresIcon aria-label="Login Marcadores" />} />
        <NavButton link="/login" icon={<IntercambioIcon aria-label="Login Intercambio" />} />
      </div>
    </>
  );
}

function ButtonsPokedexStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData, navigate]);

  return (
    <>
      <div id="navButtonsRuletaStatusContainer" className="navButtonsCentered">
        <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" />
        <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" />
        <NavButton
          link="/pokedex"
          selected="selected"
          icon={<PokedexIcon aria-label="Pokédex" />}
          title="Pokédex"
        />
        <NavButton
          link="/marcadores"
          icon={<MarcadoresIcon aria-label="Marcadores" />}
          title="Marcadores"
        />
        <NavButton
          link="/intercambio"
          icon={<IntercambioIcon aria-label="Intercambio" />}
          title="Intercambio"
        />
      </div>
    </>
  );
}

function ButtonsMarcadoresStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData, navigate]);

  return (
    <>
      <div id="navButtonsRuletaStatusContainer" className="navButtonsCentered">
        <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" />
        <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" />
        <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" />
        <NavButton
          link="/marcadores"
          selected="selected"
          icon={<MarcadoresIcon aria-label="Marcadores" />}
          title="Marcadores"
        />
        <NavButton
          link="/intercambio"
          icon={<IntercambioIcon aria-label="Intercambio" />}
          title="Intercambio"
        />
      </div>
    </>
  );
}

function ButtonsIntercambioStatus({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData, navigate]);

  return (
    <>
      <div id="navButtonsRuletaStatusContainer" className="navButtonsCentered">
        <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" />
        <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" />
        <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" />
        <NavButton
          link="/marcadores"
          icon={<MarcadoresIcon aria-label="Marcadores" />}
          title="Marcadores"
        />
        <NavButton
          link="/intercambio"
          selected="selected"
          icon={<IntercambioIcon aria-label="Intercambio" />}
          title="Intercambio"
        />
      </div>
    </>
  );
}

function ButtonCancelarConexionIntercambio({ UserData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (UserData.name === "Iniciar sesión") {
      navigate("/");
    }
  }, [UserData, navigate]);

  return (
    <Link to="/intercambio">
      <button id="botonCancelarIntercambio" aria-label="Cancelar Intercambio">Cancelar</button>
    </Link>
  );
}

export default BottomElements;
