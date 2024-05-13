import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/intercambio.css";
import "../../styles/panel.css";

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

  return (
    <>
      <div className="formularioContainer">
        <form className="formulario" onSubmit={handleSubmit}>
          <TextoInformativo text="Este es tu código de intercambio, compártelo con tus amigos para intercambiar pokemons" />
          <BotonIntercambio />
        </form>
      </div>
    </>
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

function BotonIntercambio() {
  return (
    <button className="intercambioBoton">
      <h2>Buscar</h2>
    </button>
  );
}
