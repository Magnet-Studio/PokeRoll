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

  const TierCosts = [10, 50, 150, 40, 10];

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
        <div id="navButtonsRuletaStatusContainer" role="navigation" tabindex="-1">
          <NavButton
            link="/ruleta"
            selected="selected"
            icon={<RuletaIcon/>}
            aria-label="Ruleta" 
            title="Ruleta"
          />
          <NavButton link="/almacen" icon={<AlmacenIcon/>} title="Almacén"  aria-label="Almacén"  />
          <NavButton link="/pokedex" icon={<PokedexIcon/>} title="Pokédex"  aria-label="Pokédex" />
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon/>}
            title="Marcadores"
            aria-label="Marcadores" 
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon/>}
            title="Intercambio"
            aria-label="Intercambio" 
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
          <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" tabindex="0" />
          <NavButton
            link="/almacen"
            selected="selected"
            icon={<AlmacenIcon aria-label="Almacén" />}
            title="Almacén"
          />
          <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" tabindex="0"/>
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon aria-label="Marcadores" />}
            title="Marcadores"
            tabindex="0"
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon aria-label="Intercambio"  />}
            title="Intercambio"
            tabindex="0"
          />
        </div>
        <LiberarButton
            data={data}
            setUserData={setUserData}
            UserData={UserData}
            tabindex="0"
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
          <NavButton link="/ruleta" icon={<RuletaIcon/>} title="Ruleta"  aria-label="Ruleta" tabindex="0" />
          <NavButton
            link="/almacen"
            selected="selected"
            icon={<AlmacenIcon/>}
            title="Almacén"
            tabindex="0"
          />
          <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" tabindex="0"/>
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon aria-label="Marcadores" />}
            title="Marcadores"
            tabindex="0"
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon aria-label="Intercambio" />}
            title="Intercambio"
            tabindex="0"
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
          <NavButton link="/login" selected="selected" icon={<RuletaIcon aria-label="Ir a"  />} tabindex="0"/>
          <NavButton link="/login" icon={<AlmacenIcon aria-label="Almacén" />} tabindex="0"/>
          <NavButton link="/login" icon={<PokedexIcon aria-label="Pokédex" />} tabindex="0"/>
          <NavButton link="/login" icon={<MarcadoresIcon aria-label="Marcadores" />} tabindex="0"/>
          <NavButton link="/login" icon={<IntercambioIcon aria-label="Intercambio" />} tabindex="0"/>
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
          <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" tabindex="0"/>
          <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" tabindex="0"/>
          <NavButton
            link="/pokedex"
            selected="selected"
            icon={<PokedexIcon aria-label="Pokédex" />}
            title="Pokédex"
            tabindex="0"
          />
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon aria-label="Marcadores"/>}
            title="Marcadores"
            tabindex="0"
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon aria-label="Intercambio"/>}
            title="Intercambio"
            tabindex="0"
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
          <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" tabindex="0"/>
          <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" tabindex="0"/>
          <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" tabindex="0"/>
          <NavButton
            link="/marcadores"
            selected="selected"
            icon={<MarcadoresIcon aria-label="Marcadores" />}
            title="Marcadores"
            tabindex="0"
          />
          <NavButton
            link="/intercambio"
            icon={<IntercambioIcon aria-label="Intercambio" />}
            title="Intercambio"
            tabindex="0"
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
          <NavButton link="/ruleta" icon={<RuletaIcon aria-label="Ruleta" />} title="Ruleta" tabindex="0"/>
          <NavButton link="/almacen" icon={<AlmacenIcon aria-label="Almacén" />} title="Almacén" tabindex="0"/>
          <NavButton link="/pokedex" icon={<PokedexIcon aria-label="Pokédex" />} title="Pokédex" tabindex="0"/>
          <NavButton
            link="/marcadores"
            icon={<MarcadoresIcon aria-label="Marcadores" />}
            title="Marcadores"
            tabindex="0"
          />
          <NavButton
            link="/intercambio"
            selected="selected"
            icon={<IntercambioIcon aria-label="Intercambio" />}
            title="Intercambio"
            tabindex="0"
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
