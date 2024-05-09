import "./styles/intercambio.css";
import "../../styles/panel.css";

export default function Intercambio() {
  return (
    <>
      <div id="gamestatePanelContainer">
        <table>
          <tbody className="primerVistaInicioIntercambioBody">
            <tr>
              <TextoInformativo />
            </tr>
            <tr>
              <InputCodigoIntercambio />
            </tr>
            <tr>
              <BotonIntercambio />
            </tr>
          </tbody>
        </table>
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

function InputCodigoIntercambio() {
  return <input className="intercambioInputCodigo"></input>;
}

function BotonIntercambio() {
  return <button className="intercambioBoton">Buscar</button>;
}
