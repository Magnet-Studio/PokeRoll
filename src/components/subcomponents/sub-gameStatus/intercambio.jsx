import "./styles/intercambio.css";
import { Link } from "react-router-dom";

export default function Intercambio() {
  return (
    <>
      
      <div className="botonesIntercambio">
        <Link to="tipo?code=no">
          <button className="intercambioBotonSinCodigo">
            <h2>No tengo código de intercambio</h2>
          </button>
        </Link>
        <Link to="tipo?code=yes">
          <button className="intercambioBotonConCodigo">
            <h2>Tengo código de intercambio</h2>
          </button>
        </Link>
      </div>
    </>
  );
}
