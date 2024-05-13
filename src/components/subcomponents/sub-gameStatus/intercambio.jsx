import "./styles/intercambio.css";
import { Link } from "react-router-dom";

export default function Intercambio() {
  return (
    <>
      <div className="botonesIntercambio">
        <Link to="tipo?hasCode=no">
          <button className="intercambioBotonSinCodigo">
            <h2>No tengo código de intercambio</h2>
          </button>
        </Link>
        <Link to="tipo?hasCode=yes">
          <button className="intercambioBotonConCodigo">
            <h2>Tengo código de intercambio</h2>
          </button>
        </Link>
      </div>
    </>
  );
}
