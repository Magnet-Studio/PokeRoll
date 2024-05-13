import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/intercambio.css";
import "../../styles/panel.css";
import ForwardIcon from "@mui/icons-material/Forward";
import { Link } from "react-router-dom";

export default function TipoIntercambio() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  if (code === "yes") {
    return <IntercambioConCodigo />;
  } else {
    return <IntercambioSinCodigo />;
  }
}

function IntercambioConCodigo() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Code: ${inputValue}`);
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
        <form className="formulario" onSubmit={handleSubmit}>
          <TextoInformativo text="Introduce el código de intercambio" />
          <InputCodigoIntercambio
            handleChange={handleChange}
            input={inputValue}
          />
          <BotonIntercambio />
        </form>
      </div>
    </>
  );
}

function IntercambioSinCodigo() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Esperando a amigo`);
  };

  const generateRandomCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const codeLength = 8; // Puedes ajustar la longitud del código según tus necesidades
    let randomCode = "";

    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters[randomIndex];
    }

    // Aquí puedes ajustar el formato según tus necesidades
    const formattedCode = `${randomCode.slice(0, 4)}-${randomCode.slice(4)}`;

    return formattedCode;
  };

  const userGeneratedCode = generateRandomCode();

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
        <form className="formulario" onSubmit={handleSubmit}>
          <TextoInformativo text="Este es tu código de intercambio, compártelo con tus amigos para intercambiar pokemons" />
          <CodigoIntercambio code={userGeneratedCode} />
          <BotonIntercambio />
        </form>
      </div>
    </>
  );
}

function CodigoIntercambio({ code }) {
  return <h1 color="white">{code}</h1>;
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

function BotonIntercambio() {
  return (
    <button className="intercambioBoton">
      <h2>Buscar</h2>
    </button>
  );
}
