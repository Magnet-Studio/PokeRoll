import { useEffect } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

export default function PantallaCargaIntercambio({
  redirect,
  code,
  path,
  size,
  thickness,
  time,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      const completePath = path + code;
      if (redirect) navigate(completePath);
    }, time);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="formularioContainer">
      <Box>
        <CircularProgress size={size} thickness={thickness} />
      </Box>
    </div>
  );
}
