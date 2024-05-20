import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useState, useEffect  } from "react";
import "./styles/liberarButton.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PokemonCard from "../sub-gameStatus/pokemonCard";
import CoinImage from "../../../images/coin.png";
import { DeletePokemon } from "../sub-gameStatus/lib/pokemonList";
import { Link } from 'react-router-dom';


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

const coinValues = [50, 250, 750, 2000, 5000, 5000]

function LiberarButton({data, setUserData, UserData}) {

  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true);}

  const handleClose = () => setOpen(false);

  const LiberarPokemon = () => Liberar(data, setUserData);

  const monedas = Math.floor(coinValues[data.frequency-1] * (data.shiny === "shiny" ? 2 : 1) * (data?.megaevolution === true ? 1.2 : 1) * (data?.rarespecies === true ? 1.1 : 1));
  
  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [open]);

  return (
    <div id="liberarButtonContainer">
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
          <Typography id="modal-modal-description" variant="h6" component="h2">
            Liberar a <i>{data.nametag}</i> supondrá perderlo para siempre, pero recibirás <i>{monedas} monedas</i> a cambio. (No perderás su registro en la Pokédex)
          </Typography>
          <div className="containerModal">
            <PokemonCard data={data} />
          </div>
          <div className="containerModal moneyCount">
            <img className="coin" src={CoinImage} alt="coin" /> {"+" + monedas}
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
                fontSize: "calc(0.5vw + 0.9vh)" /* tamaño de la fuente */,
                width: "8vw",
                pointerEvents: "all",
                fontFamily: "vanilla-regular",
              }}
            >
              Cancelar
            </Button>
            <Link to="/almacen">
            <Button
              className="confirmarButton"
              onClick={LiberarPokemon}
              style={{
                backgroundColor: "#00DF09" /* color de fondo */,
                color: "#ffffff" /* color del texto */,
                padding: "14px 20px" /* padding */,
                border: "0.2vw solid #89ff8e" /* sin borde */,
                borderRadius: "1vw" /* bordes redondeados */,
                cursor: "pointer" /* cursor de mano al pasar por encima */,
                fontSize: "calc(0.5vw + 0.9vh)" /* tamaño de la fuente */,
                width: "8vw",
                marginLeft: "1.5vw",
                pointerEvents: "all",
                fontFamily: "vanilla-regular",
              }}
            >
              Liberar
            </Button>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export function Liberar(data, setUserData) 
{
  DeletePokemon(data.id,Math.floor(coinValues[data.frequency-1] * (data.shiny === "shiny" ? 2 : 1) * (data?.megaevolution === true ? 1.2 : 1) * (data?.rarespecies === true ? 1.1 : 1)), setUserData);
}

export function GetPrice(data) {
  return Math.floor(coinValues[data.frequency-1] * (data.shiny === "shiny" ? 2 : 1) * (data?.megaevolution === true ? 1.2 : 1) * (data?.rarespecies === true ? 1.1 : 1));
}

export default LiberarButton;
