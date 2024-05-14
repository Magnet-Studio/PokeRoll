import { useEffect } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

export default function PantallaCargaIntercambio({ redirect }) {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirect);
    }, 5000);
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
