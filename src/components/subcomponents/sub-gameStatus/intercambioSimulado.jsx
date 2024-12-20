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

export default function IntercambioSimulado({ setUserData }) {
  const playerUserName = localStorage.username;
  const exchangeUserName = localStorage.getItem("exchangeUser");
  const exchangeGuestPokemon = localStorage.getItem("exchangePokemon");
  const [finalSelectionHost, setFinalSelectionHost] = useState();
  const [aceptarIntercambio, setAceptarIntercambio] = useState(false);
  const [eliminated, setEliminated] = useState(false);

  useEffect(() => {
    document.title = "Intercambio con " + exchangeUserName + " · PokéRoll";
  }, []);

  if (aceptarIntercambio && eliminated) {
    return (
      <PantallaCargaIntercambio
        redirect={true}
        path="/intercambio"
        size="10rem"
        thickness={8}
        time={5000}
        textoInformativo="Intercambio realizado... Volviendo al inicio..."
        code=""
      />
    );
  }

  if (aceptarIntercambio) {
    setUserData((prevUserData) => {
      const updatedUserData = { ...prevUserData };
      updatedUserData.pokemonList = updatedUserData.pokemonList.filter(
        (data) => {
          const parsedData = JSON.parse(data);
          return parseInt(parsedData.id) !== parseInt(finalSelectionHost.id);
        }
      );
      return updatedUserData;
    });
    //console.log(exchangeGuestPokemon);
    setEliminated(true);
  }

  const handleClick = () => {
    setAceptarIntercambio(true);
  };

  return (
    <div id="conexionIntercambioContainer">
      <ShowHostPlayer
        host={playerUserName}
        finalSelectionHost={finalSelectionHost}
        setFinalSelectionHost={setFinalSelectionHost}
        handleClick={handleClick}
      />
      <ShowGuestPlayer
        guest={exchangeUserName}
        finalSelectionGuest={exchangeGuestPokemon}
      />
    </div>
  );
}

function ShowHostPlayer({
  host,
  finalSelectionHost,
  setFinalSelectionHost,
  handleClick,
}) {
  return (
    <div id="intercambioHostContainer">
      <h2>{host}</h2>
      <PokemonIntercambio
        player="host"
        finalSelection={finalSelectionHost}
        setFinalSelection={setFinalSelectionHost}
      />
      <button
        onClick={handleClick}
        style={
          !finalSelectionHost ? { pointerEvents: "none", opacity: "50%" } : {}
        }
        id="botonAceptarIntercambio"
        tabIndex={!finalSelectionHost ? "-1" : "0"}
        aria-label="Botón aceptar intercambio"
      >
        Aceptar
      </button>
    </div>
  );
}

function ShowGuestPlayer({ guest, finalSelectionGuest }) {
  return (
    <div id="intercambioGuestContainer">
      <h2>{guest}</h2>
      <PokemonIntercambio player="guest" finalSelection={finalSelectionGuest} />
      <button
        id="botonAceptarIntercambio"
        style={
          finalSelectionGuest ? { pointerEvents: "none", opacity: "50%" } : {}
        }
        tabIndex="-1"
      >
        Aceptado
      </button>
    </div>
  );
}

function PokemonIntercambio({ player, finalSelection, setFinalSelection }) {
  const [selectPokemonButton, setSelectPokemonButton] = useState(false);

  const handleClick = () => {
    setSelectPokemonButton(true);
  };

  return (
    <div id="pokemonIntercambioInfoContainer">
      {player === "host" ? (
        <>
          {finalSelection !== undefined ? (
            <div>
              <ShowPokemonIntercambio
                player={player}
                finalSelection={finalSelection}
              />
            </div>
          ) : (
            <div className="entryBox">
              <div onClick={handleClick} id="exchangePokemonContainer">
                <button
                  style={{ background: "transparent", border: "transparent" }}
                  tabIndex="0"
                  aria-label="Botón para seleccionar un pokemon para intercambiar"
                >
                  <AddCircleIcon
                    htmlColor="white"
                    sx={{ fontSize: "5vw", width: "8vw" }}
                  />
                </button>
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
            <div className="arrowSliding delay3">
              <div className="arrow"></div>
            </div>
          </div>
          {finalSelection ? (
            <div style={{ width: "10vw" }}>
              <ShowPokemonIntercambio
                player={player}
                finalSelection={finalSelection}
              />
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

function ShowPokemonIntercambio({ player, finalSelection }) {
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

  let gmaxData="";
    let gmaxDesc="";
    if (finalSelection?.gigantamax !== undefined) {
        if (finalSelection.gigantamax === true) {
          gmaxData = "gmax"
          gmaxDesc = "Especie Gigamax"
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
      tabIndex="0"
      aria-label={
        player === "host"
          ? "Este es el pokemon que vas a intercambiar: " +
            "Número " +
            dexNum +
            ": " +
            tipos +
            " : " +
            finalSelection.nametag +
            ":" +
            shinyDesc +
            ":" +
            megaDesc +
            ":" +
            gmaxDesc +
            ":" +
            rareDesc +
            ":" +
            eventDesc
          : "Este es el pokemon que vas a recibir: " +
            "Número " +
            dexNum +
            ": " +
            tipos +
            " : " +
            finalSelection.nametag +
            ":" +
            shinyDesc +
            ":" +
            megaDesc +
            ":" +
            gmaxDesc +
            ":" +
            rareDesc +
            ":" +
            eventDesc
      }
      className={
        "entryBox " +
        firstType +
        " " +
        megaData +
        " " +
        gmaxData +
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
