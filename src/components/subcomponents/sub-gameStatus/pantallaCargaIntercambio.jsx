import { useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function PantallaCargaIntercambio() {
  useEffect(() => {
    const timer = setTimeout(() => alert("cargado"), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="formularioContainer">
      <Box>
        <CircularProgress size="10rem" thickness={8} />
      </Box>
    </div>
  );
}
