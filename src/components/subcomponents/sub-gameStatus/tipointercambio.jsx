import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/intercambio.css";
import "../../styles/panel.css";
import ForwardIcon from "@mui/icons-material/Forward";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { Link } from "react-router-dom";
import PantallaCargaIntercambio from "./pantallaCargaIntercambio";
import { PlayerList } from "./userdata/rankingList";
import { GetPokemonArrayByFrequency } from "./lib/pokemonFrequency";
import { GetDataByDexNum } from "./lib/PokemonData";

export default function TipoIntercambio() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("hasCode");
  const [GuestSelection, setGuestSelection] = useState();

  useEffect(() => {
    const GetOneRandomPokemonData = async () => {
      const pokemonArray = GetPokemonArrayByFrequency(
        Math.floor(Math.random() * (5 - 1 + 1)) + 1
      );
      const array =
        pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
      const pokemon = await GetDataByDexNum(array.dexNum);
      setGuestSelection(pokemon);
    };
    GetOneRandomPokemonData();
  }, []);

  const exchangePlayerIndex = Math.floor(Math.random() * PlayerList.length);
  const exchangeUserName = PlayerList[exchangePlayerIndex].playername;
  localStorage.setItem("exchangeUser", exchangeUserName);
  localStorage.setItem("exchangePokemon", GuestSelection);

  if (code === "yes") {
    return <IntercambioConCodigo />;
  } else {
    const generatedCode = GenerateRandomCode();
    return <IntercambioSinCodigo code={generatedCode} />;
  }
}

function IntercambioConCodigo() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <PantallaCargaIntercambio
        redirect={true}
        path="/intercambio/conexion?code="
        code={inputValue}
        size="10rem"
        thickness={8}
        time={5000}
      />
    );
  }

  const handleClick = () => {
    setLoading(true);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="backButtonIntercambio">
        <Link to="/intercambio" aria-label="Volver al intercambio" tabIndex="0">
          <span className="backArrowIntercambio">
            <ForwardIcon fontSize="small" />
          </span>
        </Link>
      </div>
      <div className="formularioContainer">
        <div className="formulario">
          <TextoInformativo
            text="Introduce el código de intercambio"
            tabIndex="0"
          />
          <InputCodigoIntercambio
            handleChange={handleChange}
            input={inputValue}
          />
          <BotonIntercambio text="Buscar" click={handleClick} />
        </div>
      </div>
    </>
  );
}

function IntercambioSinCodigo({ code }) {
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <PantallaCargaIntercambio
        redirect={true}
        path="/intercambio/conexion?code="
        code={code}
        size="10rem"
        thickness={8}
        time={5000}
      />
    );
  }

  const handleClick = () => {
    setLoading(true);
  };

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(code)
      .then(() => {
        setIsCopied(!isCopied);
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  return (
    <>
      <div className="backButtonIntercambio">
        <Link to="/intercambio" aria-label="Volver al intercambio" tabIndex="0">
          <span className="backArrowIntercambio">
            <ForwardIcon fontSize="small" />
          </span>
        </Link>
      </div>
      <div className="formularioContainer">
        <div
          className="formulario"
          tabIndex="0"
          aria-description="Estas en el menú de intercambio sin código"
        >
          <TextoInformativo text="Este es tu código de intercambio, compártelo con tus amigos para intercambiar pokemons" />
          <CodigoIntercambio
            code={code}
            isCopied={isCopied}
            handleCopyClick={handleCopyClick}
          />
          <BotonIntercambio text="Iniciar" click={handleClick} />
        </div>
      </div>
    </>
  );
}

function GenerateRandomCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const codeLength = 8;
  let randomCode = "";

  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomCode += characters[randomIndex];
  }

  // Aquí puedes ajustar el formato según tus necesidades
  const formattedCode = `${randomCode.slice(
    0,
    codeLength / 2
  )}-${randomCode.slice(codeLength / 2)}`;

  return formattedCode;
}

function CodigoIntercambio({ code, isCopied, handleCopyClick }) {
  return (
    <div id="codeAndButtonContainer">
      <h1
        id="intercambioCodeDisplayed"
        aria-description={"Este es tu código de intercambio: " + code}
        style={{ color: "white" }}
      >
        {code}
      </h1>
      <button
        id="buttonCopyClipboard"
        onClick={handleCopyClick}
        aria-label={isCopied ? "copied" : "copy code"}
      >
        {isCopied ? (
          <DoneOutlinedIcon htmlColor="green" fontSize="large" />
        ) : (
          <ContentCopyOutlinedIcon htmlColor="white" fontSize="large" />
        )}
      </button>
    </div>
  );
}

function TextoInformativo({ text }) {
  return <h1 className="intercambioTextoInicio">{text}</h1>;
}

function InputCodigoIntercambio({ input, handleChange }) {
  return (
    <input
      type="text"
      value={input}
      onChange={handleChange}
      className="intercambioInputCodigo"
      tabIndex="0"
      aria-label="Introduce el código de intercambio"
    ></input>
  );
}

function BotonIntercambio({ text, click }) {
  return (
    <button
      onClick={click}
      aria-label="Iniciar Intercambio"
      className="intercambioBoton"
    >
      <h2 id="textoBotonIntercambio">{text}</h2>
    </button>
  );
}
