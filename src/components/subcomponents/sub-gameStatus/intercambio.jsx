import { useEffect } from "react";
import "./styles/intercambio.css";
import { Link } from "react-router-dom";

export default function Intercambio({ UserData }) {
  useEffect(() => {
    document.title = "PokéROLL (Intercambio)"
  }, [])

  const almacenPokemonLength = [...UserData.pokemonList].length;
  const noIntercambioMessage = (almacenPokemonLength === 1) ? 
    <div className="mensajeNoIntercambioPokemon">
      <p>No tienes pokemon para intercambiar</p>
    </div>
    :
    <></>;
  return (
    <>
      {noIntercambioMessage}
      <div className="botonesIntercambio">
        <Link to="tipo?hasCode=no" className={almacenPokemonLength === 1 ? "inactiveLink" : ""}>
          <button className={"intercambioBotonSinCodigo " + (almacenPokemonLength === 1 ? "disabled" : "enabled")}>
            <h2>No tengo código de intercambio</h2>
          </button>
        </Link>
        <Link to="tipo?hasCode=yes" className={almacenPokemonLength === 1 ? "inactiveLink" : ""}>
          <button className={"intercambioBotonConCodigo " + (almacenPokemonLength === 1 ? "disabled" : "enabled")}>
            <h2>Tengo código de intercambio</h2>
          </button>
        </Link>
      </div>
    </>
  );
}
