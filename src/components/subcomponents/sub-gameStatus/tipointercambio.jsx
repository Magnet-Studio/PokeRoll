import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import "./styles/intercambio.css";
import "../../styles/panel.css";
import ForwardIcon from "@mui/icons-material/Forward";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { Link } from "react-router-dom";
import PantallaCargaIntercambio from "./pantallaCargaIntercambio";

export default function TipoIntercambio() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("hasCode");

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
    <PantallaCargaIntercambio />;
    setLoading(false);
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
        <Link to="/intercambio">
          <span className="backArrowIntercambio">
            <ForwardIcon fontSize="small" />
          </span>
        </Link>
      </div>
      <div className="formularioContainer">
        <div className="formulario">
          <TextoInformativo text="Introduce el código de intercambio" />
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => {
      clearTimeout(timer);
      <Navigate to="/ruleta" />;
    };
  }, []);

  if (loading) {
    return <PantallaCargaIntercambio />;
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
        setIsCopied(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="backButtonIntercambio">
        <Link to="/intercambio">
          <span className="backArrowIntercambio">
            <ForwardIcon fontSize="small" />
          </span>
        </Link>
      </div>
      <div className="formularioContainer">
        <div className="formulario">
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
      <h1 id="intercambioCodeDisplayed" style={{ color: "white" }}>
        {code}
      </h1>
      <button id="buttonCopyClipboard" onClick={handleCopyClick}>
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
    ></input>
  );
}

function BotonIntercambio({ text, click }) {
  return (
    <button onClick={click} className="intercambioBoton">
      <h2>{text}</h2>
    </button>
  );
}
