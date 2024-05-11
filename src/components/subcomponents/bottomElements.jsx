/**
 * Contenidos del panel que tiene las diferentes posibilidades
 * de los elementos que hay abajo: botones de navegación, pokeball, botón de Tirar
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavButton from "./sub-bottomElements/NavButton";
import "./styles/bottomElements.css";
import AlmacenIcon from "@mui/icons-material/Inventory2";
import IntercambioIcon from "@mui/icons-material/Autorenew";
import MarcadoresIcon from "@mui/icons-material/EmojiEvents";
import PokedexIcon from "@mui/icons-material/Apps";
import RuletaIcon from "@mui/icons-material/Money";
import { Pokeball, TirarButton } from "./sub-bottomElements/ruletaElements";
import { useLocation } from "react-router-dom";
import { GetPokemonByID } from "./sub-gameStatus/userdata/pokemonList";
import LiberarButton from "./sub-bottomElements/liberarButton";

/**
 * Rutas de todas las posibilidades del elemento inferior (botones de navegación / pokéball / botón de tirada)
 */
function BottomElements({UserData, SetUserData}) {
  const location = useLocation();
  let pokenametag = "";
  let pokemon;
  if (location.pathname === "/almacen/ver-pokemon") {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    pokemon = GetPokemonByID(id);

    pokenametag = id;
  }

  return (
    <Routes>
      <Route path="/ruleta" element={<ButtonsRuletaStatus />} />

      <Route path="/almacen/" element={<ButtonsAlmacenStatus />} />

      <Route
        path="/almacen/ver-pokemon"
        element={<ButtonsVerPokemonAlmacenStatus data={pokemon} UserData={UserData} SetUserData={SetUserData} />}
      />

      <Route path="/pokedex/*" element={<ButtonsPokedexStatus />} />

      <Route path="/marcadores/*" element={<ButtonsMarcadoresStatus />} />

      <Route path="/tipointercambio" element={<ButtonsIntercambioStatus />} />

      <Route path="/intercambio" element={<ButtonsIntercambioStatus />} />

      <Route path="*" element={<></>} />
    </Routes>
  );
}

function ButtonsRuletaStatus() {
  return (
    <>
      <NavButton
        link="/ruleta"
        selected="selected"
        icon={<RuletaIcon />}
        title="Ruleta"
      />
      <NavButton link="/almacen" icon={<AlmacenIcon />} title="Almacén" />
      <NavButton link="/pokedex" icon={<PokedexIcon />} title="Pokédex" />
      <Pokeball />
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
      <TirarButton cost={100} />
    </>
  );
}

function ButtonsVerPokemonAlmacenStatus({ data, UserData, SetUserData }) {
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
      <LiberarButton data={data} UserData={UserData} SetUserData={SetUserData}/>
    </>
  );
}

function ButtonsAlmacenStatus() {
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

function ButtonsPokedexStatus() {
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

function ButtonsMarcadoresStatus() {
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

function ButtonsIntercambioStatus() {
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

export default BottomElements;
