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
  textoInformativo,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Buscando intercambio... · PokéRoll";
    const timer = setTimeout(() => {
      const completePath = path + code;
      if (redirect) navigate(completePath);
    }, time);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="formularioContainer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CircularProgress size={size} thickness={thickness} />
        {redirect ? (
          <>
            <p id="textFromCircularProgress">{textoInformativo}</p>
          </>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
}
