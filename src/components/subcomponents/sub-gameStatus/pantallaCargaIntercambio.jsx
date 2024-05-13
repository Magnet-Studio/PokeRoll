import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function PantallaCargaIntercambio() {
  return (
    <div className="formularioContainer">
      <Box>
        <CircularProgress size="10rem" thickness={8} />
      </Box>
    </div>
  );
}
