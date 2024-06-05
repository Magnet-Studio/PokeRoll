import { useEffect } from "react";
import "./styles/intercambio.css";
import { Link } from "react-router-dom";

export default function Intercambio({ UserData }) {
  useEffect(() => {
    document.title = "PokéROLL (Intercambio)";
  }, []);

  const almacenPokemonLength = [...UserData.pokemonList].length;
  const noIntercambioMessage =
    almacenPokemonLength === 1 ? (
      <div
        className="mensajeNoIntercambioPokemon"
        tabIndex="0"
        aria-label="No tienes pokemon para intercambiar"
      >
        <p>No tienes pokemon para intercambiar</p>
      </div>
    ) : (
      <></>
    );
  const linkClass = almacenPokemonLength === 1 ? "disabled" : "enabled";
  return (
    <>
      {noIntercambioMessage}
      <div className="botonesIntercambio">
        <Link
          to="tipo?hasCode=no"
          className={linkClass + " intercambioBotonSinCodigo"}
          tabIndex={linkClass === "disabled" ? "-1" : "0"}
          aria-label={
            linkClass === "enabled" ? "Botón para intercambiar sin código" : ""
          }
        >
          <h2>No tengo código de intercambio</h2>
        </Link>
        <Link
          to="tipo?hasCode=yes"
          className={linkClass + " intercambioBotonConCodigo"}
          tabIndex={linkClass === "disabled" ? "-1" : "0"}
          aria-label={
            linkClass === "enabled" ? "Botón para intercambiar con código" : ""
          }
        >
          <h2>Tengo código de intercambio</h2>
        </Link>
      </div>
    </>
  );
}
