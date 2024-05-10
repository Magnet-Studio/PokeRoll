import React, { useState } from "react";
import "./styles/intercambio.css";
import "../../styles/panel.css";

export default function Intercambio() {
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
      <div id="gamestatePanelContainer">
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <TextoInformativo />
            </tr>
            <tr>
              <InputCodigoIntercambio
                handleChange={handleChange}
                input={inputValue}
              />
            </tr>
            <tr>
              <BotonIntercambio />
            </tr>
          </table>
        </form>
      </div>
    </>
  );
}

function TextoInformativo() {
  return (
    <h1 className="intercambioTextoInicio">
      Introduce el código de intercambio
    </h1>
  );
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
