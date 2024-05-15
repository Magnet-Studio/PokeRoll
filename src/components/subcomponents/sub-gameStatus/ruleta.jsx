import React, {useState, useEffect, useRef} from 'react';
import './styles/ruleta.css';
import { GetDataByDexNum, GetImage , GetFirstType, GetSecondType, GetPrettyTypeNameSpanish} from './lib/PokemonData';
import Pokeball from "../../../images/pokeball.png";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CoinImage from "../../../images/coin.png";
import { GetFrequencyByName } from "./lib/pokemonFrequency";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { MouseOverPopover } from './mouseOverPopOver';
import { AddLastExtraDetails } from './lib/pokemonList';


function Ruleta({threePokemon, tirarButtonDisable, TierRuleta, setThreePokemon, UserData, setTirarButtonDisable, setChangeTierButtonDisable, setUserData})
{   
    const pokeballImage = (<img src={Pokeball} className="pokeballRotar" />);
    const notPokemon = [(pokeballImage), (pokeballImage), (pokeballImage)];
    const [threePokemonImages, setThreePokemonImages] = useState(notPokemon);
    
    useEffect(() => 
    {
        const fetchDataAndUpdateState = async () => 
        {
            let images = [];

            for(let i=0; i<3; i++)
            {
                const name = threePokemon[i].name;
                let data = null;
                if(name != undefined)
                {
                  data = await GetDataByDexNum(name);
                }
                images[i] = GetImage(data, threePokemon[i].shiny === 'shiny');
                
                // images[i] === <></>;
                if(images[i].props.children.type !== "img")
                {
                    images[i] = pokeballImage;
                }
                else
                {
                  setThreePokemon(prevThreePokemon => 
                    { 
                      prevThreePokemon[i].type1 = GetFirstType(data);
                      prevThreePokemon[i].type2 = GetSecondType(data);
                      return prevThreePokemon;
                    });
                }
            }
            
            setThreePokemonImages(images);
        };
        
        
        fetchDataAndUpdateState();
        
    
    }, [threePokemon]);

    const [enabled, setEnabled] = useState("");

    return (
        <>
            <div className='externalArrowContainer'>
                
            </div>
        
            <div className="boxes">
                <RuletaBox setThreePokemon={setThreePokemon} UserData={UserData} pokemonImage={threePokemonImages[0]} pokemonData={threePokemon[0]} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} enabled={enabled} setEnabled={setEnabled} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} setUserData={setUserData}/>
                <RuletaBox setThreePokemon={setThreePokemon} UserData={UserData} pokemonImage={threePokemonImages[1]} pokemonData={threePokemon[1]} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} enabled={enabled} setEnabled={setEnabled} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} setUserData={setUserData}/>
                <RuletaBox setThreePokemon={setThreePokemon} UserData={UserData} pokemonImage={threePokemonImages[2]} pokemonData={threePokemon[2]} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} enabled={enabled} setEnabled={setEnabled} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} setUserData={setUserData}/>
            </div>

            <div className='externalArrowContainer'>
                
            </div>
            
        </>
       
    );
}

const TierCosts = [100, 500, 1500, 4000, 10000];

function RuletaBox({setThreePokemon, pokemonImage, tirarButtonDisable, TierRuleta, pokemonData, enabled, setEnabled, UserData, setTirarButtonDisable, setChangeTierButtonDisable, setUserData})
{
    

    useEffect(() =>
    {
        if(tirarButtonDisable !== "disabled")
        {
            setEnabled("");
        }
        else
        {
            setEnabled("enabled");
        }
    }, [tirarButtonDisable]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true); 
      setEnabled("");
    };

    const HalfCost = (TierCosts[TierRuleta - 1]) / 2;
    
    return (
        <div className={"ruletaBox " + enabled} onClick={handleOpen}  >
            {pokemonImage}
            
            <ModalConfirmar setThreePokemon={setThreePokemon} UserData={UserData} open={open} setOpen={setOpen} HalfCost={HalfCost} pokemonImage={pokemonImage} pokemonData={pokemonData} setEnabled={setEnabled} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} setUserData={setUserData}/>
            
        </div>
    );
}


function ModalConfirmar({setThreePokemon, pokemonData, setOpen, open, UserData, HalfCost, pokemonImage, setEnabled, setTirarButtonDisable, setChangeTierButtonDisable, setUserData})
{
  const hasReclaimedRef = useRef(false);

  const HandleClose = (event) => {
    event.stopPropagation();

    setOpen(false);
    setEnabled("enabled");

    hasReclaimedRef.current = false;
  };

  const HandleReclamar = (event) => {
    if (!hasReclaimedRef.current) 
    {
      event.stopPropagation();

      Reclamar(pokemonData, UserData, setThreePokemon, setUserData, HalfCost);

      setChangeTierButtonDisable("");
      setTirarButtonDisable("");

      hasReclaimedRef.current = true;
      
      setOpen(false);
    }
  }

 

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
    
  let firstTypeContainer = (<div className={"pokemonType " + pokemonData.type1}>{GetPrettyTypeNameSpanish(pokemonData.type1)}</div>)

  let secondTypeContainer = (<></>); 
  if(pokemonData.type2 !== null)
  {
    secondTypeContainer = (<div className={"pokemonType " + pokemonData.type2}>{GetPrettyTypeNameSpanish(pokemonData.type2)}</div>);
  } 

  const nombresRarezas = ['Común', 'Infrecuente', 'Peculiar', 'Épico', 'Legendario', 'Singular'];
  const frequency = GetFrequencyByName(pokemonData.speciesname);
  const nombreRareza = nombresRarezas[frequency-1];

  let shinyIndication = (<></>);
  if(pokemonData.shiny === "shiny")
  { 
    const shinyMsg = (<p>¡Felicidades! ¡Has conseguido un Pokémon Variocolor!<br/> Obtendrás una bonificación de 5000 puntos en el cálculo final <br/> de Rareza por ello</p>);
    shinyIndication = (<MouseOverPopover content={<AutoAwesomeIcon />} shown={shinyMsg} />);                                                         
  }

  return (
    
      <Modal
      open={open}
      onClose={HandleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      id='reclamarButtonContainer'
      >

      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          ¿Quieres reclamar este Pokémon?
        </Typography>

        <Typography id="modal-modal-description" variant="h6" component="h2" style={{fontFamily: "vanilla-regular", margin: "0", textAlign: "center"}}>
          El Pokémon elegido será guardado en tu Almacén. ¡Recibirás además la mitad de las monedas que gastaste en la tirada!
        </Typography>

        <div className="containerModal">
          {pokemonImage}
          <div>
            <p style={{color: "black"}}>
              {pokemonData.speciesname}
              {shinyIndication}
            </p>
            <div id="tiposPokemon">
                {firstTypeContainer}
                {secondTypeContainer}
            </div>
            <p className="rareza" style={{color: 'black'}}>Rareza: <span className={"rareza" + frequency}>{(nombreRareza === undefined ? "Cargando..." : nombreRareza + " " )}</span></p>
          </div>
        </div>

        <div className="containerModal moneyCount">
          <img className="coin" src={CoinImage} alt="coin" /> {"+" + HalfCost}
        </div>
        
        <div className="containerModal">
          <Button
            className="cerrarButton"
            onClick={HandleClose}
            style={{
              backgroundColor: "#fb6c6c" /* color de fondo */,
              color: "white" /* color del texto */,
              padding: "14px 20px" /* padding */,
              border: "0.2vw solid #9f4949" /* sin borde */,
              borderRadius: "1vw" /* bordes redondeados */,
              cursor: "pointer" /* cursor de mano al pasar por encima */,
              fontSize: "calc(0.3vw + 0.9vh)" /* tamaño de la fuente */,
              width: "8vw",
              pointerEvents: "all",
              fontFamily: "vanilla-regular",
            }}
          >
            Cancelar
          </Button>
          
          <Button
            className="confirmarButton"
            onClick={HandleReclamar}
            style={{
              backgroundColor: "#00DF09" /* color de fondo */,
              color: "#ffffff" /* color del texto */,
              padding: "14px 20px" /* padding */,
              border: "0.2vw solid #89ff8e" /* sin borde */,
              borderRadius: "1vw" /* bordes redondeados */,
              cursor: "pointer" /* cursor de mano al pasar por encima */,
              fontSize: "calc(0.3vw + 0.9vh)" /* tamaño de la fuente */,
              width: "8vw",
              marginLeft: "1.5vw",
              pointerEvents: "all",
              fontFamily: "vanilla-regular",
            }}
          >
            Reclamar
          </Button>
          
        </div>
      </Box>
    </Modal>
  
  );
}

/**
 * Reclama tu pokémon
 */
function Reclamar(pokemonData, UserData, setThreePokemon, setUserData, HalfCost) 
{
  // Cambia las imagenes por otra vez pokeballs
  const pokeballImage = (<img src={Pokeball} className="pokeballRotar" />);
  const notPokemon = [(pokeballImage), (pokeballImage), (pokeballImage)];
  setThreePokemon(notPokemon);

  // Añadimos fecha, username e id
  AddLastExtraDetails(pokemonData, UserData); 

  // Añade el pokémon al data y el dinero 
  setUserData(prevUserData => {
    const updatedUserData = { ...prevUserData };
    updatedUserData.currency += HalfCost;
    updatedUserData.pokemonList = [...updatedUserData.pokemonList, JSON.stringify(pokemonData)];
    if(!updatedUserData.registers.includes(pokemonData.name)) updatedUserData.registers = [...updatedUserData.registers, pokemonData.name];
    return updatedUserData;
  });
} 




export default Ruleta;