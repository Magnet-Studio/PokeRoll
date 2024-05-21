import "./styles/intercambio.css";
import PantallaCargaIntercambio from "./pantallaCargaIntercambio";

export default function IntercambioSimulado({ userToExchange }) {
  const playerUserName = localStorage.username;
  return (
    <div id="conexionIntercambioContainer">
      <ShowHostPlayer host={playerUserName} />
      <ShowGuestPlayer guest={userToExchange} />
    </div>
  );
}

function ShowHostPlayer({ host }) {
  return (
    <div id="intercambioHostContainer">
      <h2>{host}</h2>
      <PokemonIntercambio player="host" />
      <button id="botonAceptarIntercambio">Aceptar</button>
    </div>
  );
}

function PokemonIntercambio({ player }) {
  return (
    <div id="pokemonIntercambioInfoContainer">
      {player === "host" ? (
        <>
          <div className="entryBox">
            <div className="unknownMessageContainer">
              <p className="unknownMessage">+</p>
            </div>
          </div>
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
          <div className="entryBox">
            <PantallaCargaIntercambio
              redirect={false}
              size="5vw"
              thickness={5}
            />
          </div>
        </>
      )}
    </div>
  );
}

function ShowGuestPlayer({ guest }) {
  return (
    <div id="intercambioGuestContainer">
      <h2>{guest}</h2>
      <PokemonIntercambio player="guest" />
      <button id="botonAceptarIntercambio">Aceptar</button>
    </div>
  );
}
