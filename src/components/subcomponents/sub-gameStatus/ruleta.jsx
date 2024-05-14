import React, {useState, useEffect} from 'react';
import './styles/ruleta.css';
import { GetDataByDexNum, GetImage , GetFirstType, GetSecondType, GetPrettyTypeNameSpanish} from './lib/PokemonData';
import Pokeball from "../../../images/pokeball.png";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CoinImage from "../../../images/coin.png";
import { GetFrequencyByName } from "./lib/pokemonFrequency";
import { AddNewPokemon } from './userdata/pokemonList';
import { Register } from './userdata/pokedexRegisters';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { MouseOverPopover } from './mouseOverPopOver';


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
                      console.log(prevThreePokemon);
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

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
    setEnabled("enabled");
  };

  const handleCloseConfirm = (event) => {
    event.stopPropagation();
    setOpen(false);
    setChangeTierButtonDisable("");
    setTirarButtonDisable("")
  };

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

  const ReclamarPokemon = () => Reclamar(pokemonData, UserData, setThreePokemon, setOpen, setUserData, HalfCost);

  const HandleReclamar = (event) => {
    handleCloseConfirm(event);
    ReclamarPokemon();
  }

  let shinyIndication = (<></>);
  if(pokemonData.shiny === "shiny")
  { 
    const shinyMsg = (<p>¡Felicidades! ¡Has conseguido un Pokémon Variocolor!<br/> Obtendrás una bonificación de 5000 puntos en el cálculo final <br/> de Rareza por ello</p>);
    shinyIndication = (<MouseOverPopover content={<AutoAwesomeIcon />} shown={shinyMsg} />);                                                         
  }

  return(
    
      <Modal
      open={open}
      onClose={handleClose}
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
            onClick={handleClose}
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
function Reclamar(pokemonData, UserData, setThreePokemon, setOpen, setUserData, HalfCost) 
{
  setOpen(false);
  
  Register(pokemonData.name);
  
  console.log("RECLAMAR: " + pokemonData);
  console.log("RECLAMAR: " + UserData);
  AddNewPokemon({pokemonData, UserData});

  const pokeballImage = (<img src={Pokeball} className="pokeballRotar" />);
  const notPokemon = [(pokeballImage), (pokeballImage), (pokeballImage)];
  setThreePokemon(notPokemon);

  setUserData(prevUserData => {
    prevUserData.currency += HalfCost/2;
    //prevUserData.pokemonList.push(pokemonData);
    return prevUserData
  });
} 




export default Ruleta;