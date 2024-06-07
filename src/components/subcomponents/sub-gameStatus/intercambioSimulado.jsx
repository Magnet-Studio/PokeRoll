import "./styles/intercambio.css";
import "./styles/almacen.css";
import PantallaCargaIntercambio from "./pantallaCargaIntercambio";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import ModalSelectPokemon from "./selectPokemonIntercambio";
import { GetSpeciesDataByName, GetSpanishName } from "./lib/PokemonSpeciesData";
import {
  GetDataByName,
  GetPrettyTypeNameSpanish,
  GetImage,
  GetDexNum,
  GetVariantImage,
} from "./lib/PokemonData";

export default function IntercambioSimulado() {
  const playerUserName = localStorage.username;
  const exchangeUserName = localStorage.getItem("exchangeUser");
  const [finalSelectionHost, setFinalSelectionHost] = useState();
  const [finalSelectionGuest, setFinalSelectionGuest] = useState();

  useEffect(() => {
    document.title = "PokéROLL (Intercambio con " + exchangeUserName + ")";
  }, []);

  return (
    <div id="conexionIntercambioContainer">
      <ShowHostPlayer
        host={playerUserName}
        finalSelectionHost={finalSelectionHost}
        setFinalSelectionHost={setFinalSelectionHost}
      />
      <ShowGuestPlayer
        guest={exchangeUserName}
        finalSelectionGuest={finalSelectionGuest}
      />
    </div>
  );
}

function ShowHostPlayer({ host, finalSelectionHost, setFinalSelectionHost }) {
  return (
    <div id="intercambioHostContainer">
      <h2>{host}</h2>
      <PokemonIntercambio
        player="host"
        finalSelection={finalSelectionHost}
        setFinalSelection={setFinalSelectionHost}
      />
      <button id="botonAceptarIntercambio">Aceptar</button>
    </div>
  );
}

function ShowGuestPlayer({ guest, finalSelectionGuest }) {
  return (
    <div id="intercambioGuestContainer">
      <h2>{guest}</h2>
      <PokemonIntercambio player="guest" finalSelection={finalSelectionGuest} />
      <button id="botonAceptarIntercambio">Aceptado</button>
    </div>
  );
}

function PokemonIntercambio({ player, finalSelection, setFinalSelection }) {
  const [selectPokemonButton, setSelectPokemonButton] = useState(false);

  const handleClick = () => {
    setSelectPokemonButton(true);
  };

  console.log(finalSelection);

  return (
    <div id="pokemonIntercambioInfoContainer">
      {player === "host" ? (
        <>
          {finalSelection !== undefined ? (
            <div style={{ width: "10vw" }}>
              <ShowPokemonIntercambio finalSelection={finalSelection} />
            </div>
          ) : (
            <div className="entryBox">
              <div onClick={handleClick} id="exchangePokemonContainer">
                <AddCircleIcon
                  htmlColor="white"
                  sx={{ fontSize: "5vw", width: "8vw" }}
                />
              </div>
            </div>
          )}
          <div id="arrowAnimHost">
            <div className="arrowSlidingHost">
              <div className="arrowHost"></div>
            </div>
            <div className="arrowSlidingHost delay1">
              <div className="arrowHost"></div>
            </div>
            <div className="arrowSlidingHost delay2">
              <div className="arrowHost"></div>
            </div>
            <div className="arrowSlidingHost delay3">
              <div className="arrowHost"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="arrowAnim">
            <div className="arrowSliding">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
              <div className="arrow"></div>
            </div>
            <div class="arrowSliding delay3">
              <div className="arrow"></div>
            </div>
          </div>
          {finalSelection !== undefined ? (
            <div style={{ width: "10vw" }}>
              <ShowPokemonIntercambio finalSelection={finalSelection} />
            </div>
          ) : (
            <div className="entryBox" style={{ width: "10vw" }}>
              <PantallaCargaIntercambio
                redirect={false}
                size="5vw"
                thickness={5}
              />
            </div>
          )}
        </>
      )}
      <ModalSelectPokemon
        selectPokemon={selectPokemonButton}
        setSelectPokemon={setSelectPokemonButton}
        setFinalSelection={setFinalSelection}
      />
    </div>
  );
}

function ShowPokemonIntercambio({ finalSelection }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      const dataNormal = await GetDataByName(finalSelection.name);
      const dataSpecies = await GetSpeciesDataByName(finalSelection.name);
      setPokemonData(dataNormal);
      setPokemonSpeciesData(dataSpecies);
    };

    fetchDataAndUpdateState();
  }, [finalSelection.name]);

  let pokemon,
    firstType = "";

  const name =
    finalSelection.nametag === null
      ? GetSpanishName(pokemonSpeciesData)
      : finalSelection.nametag;
  firstType = finalSelection.type1;
  const secondType = finalSelection.type2;
  const dexNum = GetDexNum(pokemonData);

  let secondTypeContainer = <></>;
  if (secondType !== null) {
    secondTypeContainer = (
      <div className="pokemonType">{GetPrettyTypeNameSpanish(secondType)}</div>
    );
  }

  pokemon = (
    <>
      {finalSelection?.variant === undefined
        ? GetImage(pokemonData, finalSelection.shiny === "shiny")
        : GetVariantImage(
            finalSelection.variant.name,
            finalSelection.shiny === "shiny"
          )}
      <div className="types">
        <div className="pokemonType">{GetPrettyTypeNameSpanish(firstType)}</div>
        {secondTypeContainer}
      </div>
      <p className="pokemonName">{name}</p>
    </>
  );

  let megaData = "";
  let megaDesc = "";
  if (finalSelection?.megaevolution !== undefined) {
    if (finalSelection.megaevolution === true) {
      megaData = "mega";
      megaDesc = "Megaevolución";
    }
  }

  let rareData = "";
  let rareDesc = "";
  if (finalSelection?.rarespecies !== undefined) {
    if (finalSelection.rarespecies === true) {
      rareData = "rare";
      rareDesc = "Especie rara";
    }
  }

  let event = "";
  if (finalSelection?.event !== undefined) {
    if (finalSelection.event === true) {
      event = "event";
    }
  }

  let shinyDesc = "";
  if (finalSelection.shiny === "shiny") {
    shinyDesc = "Variocolor";
  }

  let eventDesc = "";
  if (finalSelection.event === true) {
    eventDesc = "De evento";
  }

  let tipos = "Del tipo " + GetPrettyTypeNameSpanish(firstType);
  if (secondType !== null) {
    tipos = tipos + " y " + GetPrettyTypeNameSpanish(secondType);
  }

  // Si los datos aún se están cargando, muestra CircularProgress dentro de la tarjeta
  const content =
    pokemonData === null || pokemonSpeciesData === null ? (
      <div className="loadingPokemon">
        <PantallaCargaIntercambio redirect={false} size="5vw" thickness={5} />
      </div>
    ) : (
      pokemon
    );

  return (
    <div
      className={
        "entryBox " +
        firstType +
        " " +
        megaData +
        " " +
        rareData +
        " " +
        finalSelection.shiny +
        " " +
        event
      }
      key={finalSelection.id}
    >
      <p className="dexNumber">Nº {dexNum}</p>
      {content}
    </div>
  );
}
