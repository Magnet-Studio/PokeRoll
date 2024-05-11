import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useState } from "react";
import "./styles/liberarButton.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PokemonCard from "../sub-gameStatus/pokemonCard";
import CoinImage from "../../../images/coin.png";

/*

        <div className="botonLiberar">
            <CurrencyExchangeIcon />
        </div>
*/

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "2vw",
};

function LiberarButton({ data, selection, t }) {
  let selected = "selected";
  if (selection !== "selected") {
    selected = "";
  }

  let title = "";
  if (t !== "") {
    title = t;
  }

  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <div
          className={"liberarButton " + (isHovered ? "mouseleave" : "")}
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
        >
          <CurrencyExchangeIcon />
          <p className="liberarButtonTitle">Liberar</p>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Quieres liberar a este Pokémon?
          </Typography>
          <div className="containerModal">
            <PokemonCard data={data} />
          </div>
          <div className="containerModal moneyCount">
            <img className="coin" src={CoinImage} alt="coin" /> +33
          </div>
          <div className="containerModal">
            <Button
              className="cerrarButton"
              onClick={handleClose}
              style={{
                backgroundColor: "#fb6c6c" /* color de fondo */,
                color: "white" /* color del texto */,
                padding: "14px 20px" /* padding */,
                border: "0.2vw solid #9f4949" /* sin borde */,
                borderRadius: "1vw" /* bordes redondeados */,
                cursor: "pointer" /* cursor de mano al pasar por encima */,
                fontSize: "16px" /* tamaño de la fuente */,
                width: "8vw",
                pointerEvents: "all",
                fontFamily: "vanilla-regular",
              }}
            >
              Cancelar
            </Button>
            <Button
              className="confirmarButton"
              onClick={handleClose}
              style={{
                backgroundColor: "#00DF09" /* color de fondo */,
                color: "#ffffff" /* color del texto */,
                padding: "14px 20px" /* padding */,
                border: "0.2vw solid #89ff8e" /* sin borde */,
                borderRadius: "1vw" /* bordes redondeados */,
                cursor: "pointer" /* cursor de mano al pasar por encima */,
                fontSize: "16px" /* tamaño de la fuente */,
                width: "8vw",
                marginLeft: "1.5vw",
                pointerEvents: "all",
                fontFamily: "vanilla-regular",
              }}
            >
              Liberar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default LiberarButton;
