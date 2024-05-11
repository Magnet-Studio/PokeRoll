import "./styles/intercambio.css";
import { Link } from "react-router-dom";
import Intercambio from "./intercambio";

export default function TipoIntercambio() {
  return (
      <div className="botonesIntercambio">
        <Link to={Intercambio}>
        <button className="intercambioBotonSinCodigo">
          No tengo código de intercambio
        </button>
        </Link>
        <Link to={Intercambio}>
        <button className="intercambioBotonConCodigo">
          Sí tengo código de intercambio
        </button>
        </Link>
      </div>
  );
}