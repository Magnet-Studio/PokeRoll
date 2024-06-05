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
    coinsReference
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
              coinsReference={coinsReference}
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
    setThreePokemon,
    coinsReference
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
        <div id="navButtonsRuletaStatusContainer" role="navigation" tabIndex="-1">
          <NavButton
            link="/ruleta"
            selected="selected"
            icon={<RuletaIcon/>}
            aria-label="Ruleta (actualmente te encuentras aquí)" 
            title="Ruleta"
            ariaLabel="Ruleta (actualmente te encuentras aquí)"
          />
          <NavButton link="/almacen" icon={<AlmacenIcon/>} title="Almacén"  aria-label="Almacén" ariaLabel="Almacén" />
          <NavButton link="/pokedex" icon={<PokedexIcon/>} title="Pokédex"  aria-label="Pokédex" ariaLabel="Pokédex" />
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon/>}
            title="Clasificación"
            ariaLabel="Clasificación" 
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon/>}
            title="Intercambio"
            ariaLabel="Intercambio" 
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
            coinsReference={coinsReference}
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
          <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" tabIndex="0" ariaLabel="Ruleta" />
          <NavButton
            link="/almacen"
            selected="selected"
            icon={<AlmacenIcon aria-label="Almacén" />}
            title="Almacén"
            ariaLabel="Almacén (actualmente te encuentras aquí)"
          />
          <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" tabIndex="0" ariaLabel="Pokédex"/>
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon aria-label="Clasificación" />}
            title="Clasificación"
            tabIndex="0"
            ariaLabel="Clasificación"
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon aria-label="Intercambio"  />}
            title="Intercambio"
            tabIndex="0"
            ariaLabel="Intercambio"
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
          <NavButton link="/ruleta" icon={<RuletaIcon/>} title="Ruleta"  aria-label="Ruleta" tabIndex="0" ariaLabel="Ruleta"/>
          <NavButton
            link="/almacen"
            selected="selected"
            icon={<AlmacenIcon/>}
            title="Almacén"
            tabIndex="0"
            ariaLabel="Almacén (actualmente te encuentras aquí)"
          />
          <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" tabIndex="0" ariaLabel="Pokédex"/>
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon aria-label="Clasificación" />}
            title="Clasificación"
            tabIndex="0"
            ariaLabel="Clasificación"
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon aria-label="Intercambio" />}
            title="Intercambio"
            tabIndex="0"
            ariaLabel="Intercambio"
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
        <div id="navButtonsRuletaStatusContainer" className="navButtonsCentered" >
          <NavButton link="/login" selected="selected" icon={<RuletaIcon aria-label="Ir a"  />} tabIndex="0" ariaLabel="Iniciar Sesión"/>
          <NavButton link="/login" icon={<AlmacenIcon aria-label="Almacén" />} tabIndex="0" ariaLabel="Iniciar Sesión"/>
          <NavButton link="/login" icon={<PokedexIcon aria-label="Pokédex" />} tabIndex="0" ariaLabel="Iniciar Sesión"/>
          <NavButton link="/login" icon={<MarcadoresIcon aria-label="Clasificación" />} tabIndex="0" ariaLabel="Iniciar Sesión"/>
          <NavButton link="/login" icon={<IntercambioIcon aria-label="Intercambio" />} tabIndex="0" ariaLabel="Iniciar Sesión"/>
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
          <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" tabIndex="0" ariaLabel="Ruleta"/>
          <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" tabIndex="0" ariaLabel="Almacén"/>
          <NavButton
            link="/pokedex"
            selected="selected"
            icon={<PokedexIcon aria-label="Pokédex" />}
            title="Pokédex"
            tabIndex="0"
            ariaLabel="Pokédex (actualmente te encuentras aquí)"
          />
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon aria-label="Clasificación"/>}
            title="Clasificación"
            tabIndex="0"
            ariaLabel="Clasificación"
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon aria-label="Intercambio"/>}
            title="Intercambio"
            tabIndex="0"
            ariaLabel="Intercambio"
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
          <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" tabIndex="0" ariaLabel="Ruleta" />
          <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" tabIndex="0" ariaLabel="Almacén" />
          <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" tabIndex="0" ariaLabel="Pokédex" />
          <NavButton
            link="/marcadores"
            selected="selected"
            icon={<MarcadoresIcon aria-label="Clasificación" />}
            title="Clasificación"
            tabIndex="0"
            ariaLabel="Clasificación (actualmente te encuentras aquí)"
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon aria-label="Intercambio" />}
            title="Intercambio"
            tabIndex="0"
            ariaLabel="Intercambio"
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
        <div id="navButtonsRuletaStatusContainer" className="navButtonsCentered" aria-flowto="">
          <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" tabIndex="0" ariaLabel="Ruleta"/>
          <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" tabIndex="0" ariaLabel="Almacén"/>
          <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" tabIndex="0" ariaLabel="Pokédex"/>
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon aria-label="Clasificación" />}
            title="Clasificación"
            tabIndex="0"
            ariaLabel="Clasificación"
          />
          <NavButton
            link="/intercambio"
            selected="selected"
            icon={<IntercambioIcon aria-label="Intercambio" />}
            title="Intercambio"
            tabIndex="0"
            ariaLabel="Intercambio (actualmente te encuentras aquí)"
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
      <Link  to="/intercambio">
        <button id="botonCancelarIntercambio" aria-label="Cancelar Intercambio">Cancelar</button>
      </Link>
    );
  }

  export default BottomElements;
