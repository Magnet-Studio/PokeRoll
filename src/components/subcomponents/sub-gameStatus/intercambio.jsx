import "./styles/intercambio.css";
import { Link } from "react-router-dom";

export default function Intercambio() {
  return (
    <div className="botonesIntercambio">
      <Link to="/tipointercambio">
        <button className="intercambioBotonSinCodigo">
          No tengo código de intercambio
        </button>
      </Link>
      <Link to="/tipointercambio">
        <button className="intercambioBotonConCodigo">
          Sí tengo código de intercambio
        </button>
      </Link>
    </div>
  );
}
