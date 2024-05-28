import React, {useState, useEffect} from 'react';
import './styles/ruleta.css';
import { GetDataByDexNum, GetImage , GetFirstType, GetSecondType, GetPrettyTypeNameSpanish, GetVariantImage} from './lib/PokemonData';
import Pokeball from "../../../images/pokeball.png";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CoinImage from "../../../images/coin.png";
import { GetFrequencyByName } from "./lib/pokemonFrequency";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { MouseOverPopover } from './mouseOverPopOver';
import { AddLastExtraDetails, AddLastExtraDetailsEvent } from './lib/pokemonList';
import {ReactComponent as SpaIcon} from '../../../images/megaIcon.svg';
import CheckIcon from '@mui/icons-material/Check';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Confetti from 'react-confetti';

const pokeballImage = (<img src={Pokeball} className="pokeballRotar" alt="Pokéball"/>);

function Ruleta({threePokemon, tirarButtonDisable, TierRuleta, setThreePokemon, UserData, setTirarButtonDisable, setChangeTierButtonDisable, setUserData})
{   
    const notPokemon = [(pokeballImage), (pokeballImage), (pokeballImage)];
    const [threePokemonImages, setThreePokemonImages] = useState(notPokemon);
    useEffect(() => {
        document.title = "PokéROLL (Ruleta)"
      }, [])
    useEffect(() => 
    {
        const fetchDataAndUpdateState = async () => 
        {
            let images = [];

            for(let i=0; i<3; i++)
            {
                const name = threePokemon[i].name;
                let data = null;
                if(name !== undefined)
                {
                  data = await GetDataByDexNum(name);
                }
                images[i] = threePokemon[i]?.variant === undefined ? GetImage(data, (threePokemon[i].shiny === "shiny")) : GetVariantImage(threePokemon[i].variant.name, (threePokemon[i].shiny === "shiny"));
                
                if(images[i].props.children.type !== "img")
                {
                    images[i] = pokeballImage;
                }
                else
                {
                  setThreePokemon(prevThreePokemon => 
                    { 
                      if (threePokemon[i]?.variant === undefined) {
                        prevThreePokemon[i].type1 = GetFirstType(data);
                        prevThreePokemon[i].type2 = GetSecondType(data);
                      } else {
                        if (threePokemon[i].variant?.types === undefined) {
                          prevThreePokemon[i].type1 = GetFirstType(data);
                          prevThreePokemon[i].type2 = GetSecondType(data);
                        } else {
                          prevThreePokemon[i].type1 = threePokemon[i].variant.types[0];
                          prevThreePokemon[i].type2 = threePokemon[i].variant.types[1];
                        }
                        
                      }
                      return prevThreePokemon;
                    });
                }
            }
            
            setThreePokemonImages(images);
        };
        
        fetchDataAndUpdateState();
    // eslint-disable-next-line
    }, [threePokemon]);

    let shouldShowConfetti = false;
    let colors = [];

    for (let i = 0; i < 3; i++) {
      if (threePokemon[i].shiny === "shiny") {
        shouldShowConfetti = true;
        colors = colors.concat(['#ffff00', '#ffff99', '#cccc00']);
      }
      if (threePokemon[i]?.megaevolution === true) {
        shouldShowConfetti = true;
        colors = colors.concat(['#ff0066', '#ff0000', '#ff6699']);
      }
      if (threePokemon[i]?.rarespecies === true) {
        shouldShowConfetti = true;
        colors = colors.concat(['#6699ff', '#0099ff', '#9966ff']);
      }
    }

    colors = [...new Set(colors)];

    return (
        <>
            {shouldShowConfetti && <Confetti width="" height="" colors={colors} numberOfPieces={50} friction={0.97}/>}
            <div className='externalArrowContainer'></div>
            <div className="boxes">
                <RuletaBox setThreePokemon={setThreePokemon} UserData={UserData} pokemonImage={threePokemonImages[0]} pokemonData={threePokemon[0]} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} setUserData={setUserData}/>
                <RuletaBox setThreePokemon={setThreePokemon} UserData={UserData} pokemonImage={threePokemonImages[1]} pokemonData={threePokemon[1]} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} setUserData={setUserData}/>
                <RuletaBox setThreePokemon={setThreePokemon} UserData={UserData} pokemonImage={threePokemonImages[2]} pokemonData={threePokemon[2]} tirarButtonDisable={tirarButtonDisable} TierRuleta={TierRuleta} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} setUserData={setUserData}/>
            </div>
            <div className='externalArrowContainer'></div>
        </>
    );
}

const TierCosts = [100, 500, 1500, 4000, 10000];

function RuletaBox({ setThreePokemon, pokemonImage, tirarButtonDisable, TierRuleta, pokemonData, UserData, setTirarButtonDisable, setChangeTierButtonDisable, setUserData }) {
  
    const [enabled, setEnabled] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (tirarButtonDisable === "disabled" && loaded) {
            setEnabled("enabled");
        } else {
            setEnabled("");
        }
    }, [tirarButtonDisable, loaded]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setEnabled("");
    };

    const nombresRarezas = ['Común', 'Infrecuente', 'Peculiar', 'Épico', 'Legendario', 'Singular'];
    const coloresRareza = ['rgb(190, 190, 190)', 'rgb(145, 255, 184)', 'rgb(142, 198, 255)', 'rgb(216, 139, 255)', 'rgb(255, 223, 39)', 'rgb(255, 100, 100)'];
    const HalfCost = (TierCosts[TierRuleta - 1]) / 2;

    let RegisterCheck = false;
    if (UserData?.registers !== undefined) {
        if (UserData.registers.includes(pokemonData.name)) {
            RegisterCheck = true;
        }
    }

    useEffect(() => {
        if(pokemonData.type1 !== undefined)
        {
            setLoaded(true);
        }
        else 
        {
            setLoaded(false);
        }
    // eslint-disable-next-line
    }, [pokemonImage]);

    return (
        <div 
            className={"ruletaBox " + enabled} 
            onClick={handleOpen} 
            onKeyDown={(e) => { if (e.key === 'Enter') handleOpen(); }} 
            tabIndex={enabled === "enabled" ? "0" : "-1"} 
            role={enabled === "enabled" ? "button" : ""}
            aria-hidden={enabled === "enabled" ? "false" : "true"}
            aria-label={enabled === "enabled" ? `Pokémon ${pokemonData.speciesname} , Rareza ${nombresRarezas[GetFrequencyByName(pokemonData.speciesname) - 1]}:${(RegisterCheck == true ? "Ya registrado" : "No registrado")}${(pokemonData.shiny === "shiny" ? ": Variocolor" : "")}${(pokemonData.rarespecies === true ? ": Especie rara" : "")}${(pokemonData.megaevolution === true ? ": Megaevolución" : "")}` : ""}
            onBlur={(e) => e.currentTarget.blur()}
        >
            <div className='RegistradoCheck'>
                {RegisterCheck ? <CheckIcon style={{ fontSize: '30px' }} /> : <></>}
            </div>
            <div className='RarezaBox'>
                <p className='RarezaText' style={{ color: coloresRareza[GetFrequencyByName(pokemonData.speciesname) - 1] }}>
                    {nombresRarezas[GetFrequencyByName(pokemonData.speciesname) - 1]}
                </p>
            </div>
            {pokemonImage}
    
            <ModalConfirmar setThreePokemon={setThreePokemon} UserData={UserData} open={open} setOpen={setOpen} HalfCost={HalfCost} pokemonImage={pokemonImage} pokemonData={pokemonData} setEnabled={setEnabled} setTirarButtonDisable={setTirarButtonDisable} setChangeTierButtonDisable={setChangeTierButtonDisable} setUserData={setUserData} />
        </div>
    );
}

function ModalConfirmar({ setThreePokemon, pokemonData, setOpen, open, UserData, HalfCost, pokemonImage, setEnabled, setTirarButtonDisable, setChangeTierButtonDisable, setUserData }) {
    useEffect(() => {
        if (open) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [open]);

    const HandleClose = (event) => {
        event.stopPropagation();
        setOpen(false);
        setEnabled("enabled");
    };

    const HandleReclamar = (event) => {
        event.stopPropagation();
        Reclamar(pokemonData, UserData, setThreePokemon, setUserData, HalfCost);
        setChangeTierButtonDisable("");
        setTirarButtonDisable("");
        setEnabled("enabled");
        setOpen(false);
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

    let firstTypeContainer = (<div className={"pokemonType " + pokemonData.type1} aria-description={' del tipo '}><text aria-label=''>{GetPrettyTypeNameSpanish(pokemonData.type1)}</text></div>);
    let secondTypeContainer = (<></>);
    if (pokemonData.type2 !== null) {
        secondTypeContainer = (<div className={"pokemonType " + pokemonData.type2} aria-description={' y '}><text aria-label="">{GetPrettyTypeNameSpanish(pokemonData.type2)}</text></div>);
    }

    const nombresRarezas = ['Común', 'Infrecuente', 'Peculiar', 'Épico', 'Legendario', 'Singular'];
    const frequency = GetFrequencyByName(pokemonData.speciesname);
    const nombreRareza = nombresRarezas[frequency - 1];

    let shinyIndication = (<></>);
    let megaIndication = (<></>);
    let rareIndication = (<></>);
    if (pokemonData.shiny === "shiny") {
        const shinyMsg = (<span>¡Felicidades! ¡Has conseguido un Pokémon Variocolor!<br /> Obtendrás una bonificación de 5000 puntos en el cálculo final <br /> de Rareza por ello</span>);
        shinyIndication = (<MouseOverPopover className="mop" content={<AutoAwesomeIcon className="shinyIcon" />} shown={shinyMsg} />);
    }

    let megaWord = "una Megaevolución";
    if (pokemonData.name === 382 || pokemonData.name === 383) {
        megaWord = "una Regresión Primigenia";
    } else if (pokemonData.name === 800) {
        megaWord = "a Ultra Necrozma";
    }

    if (pokemonData?.megaevolution !== undefined) {
        if (pokemonData.megaevolution === true) {
            const megaMsg = (<span>¡Felicidades! ¡Has conseguido {megaWord}!<br /> Obtendrás una bonificación de 1500 puntos en el cálculo final <br /> de Rareza por ello</span>);
            megaIndication = (<MouseOverPopover className="mop" content={<SpaIcon className="megaIcon" />} shown={megaMsg} />);
        }
    }

    if (pokemonData?.rarespecies !== undefined) {
        if (pokemonData.rarespecies === true) {
            const rareMsg = (<span>¡Felicidades! ¡Has conseguido una especie rara!<br /> Obtendrás una bonificación de 1000 puntos en el cálculo final <br /> de Rareza por ello</span>);
            rareIndication = (<MouseOverPopover className="mop" content={<MilitaryTechIcon className="rareIcon" />} shown={rareMsg} />);
        }
    }

    let unregisterMessage = <></>;
    if (UserData?.registers !== undefined) {
        if (!UserData.registers.includes(pokemonData.name)) {
            unregisterMessage = <p className='unregisterMessage'>¡No registrado!</p>;
        } else {
            unregisterMessage = <p className='registerMessage'>¡Ya registrado!</p>;
        }
    }

    return (
        <>
            <Modal
                open={open}
                onClose={HandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                id='reclamarButtonContainer'
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title">
                        ¿Quieres reclamar este Pokémon?
                    </Typography>

                    <Typography id="modal-modal-description" style={{ fontFamily: "vanilla-regular", margin: "0", textAlign: "center" }}>
                        El Pokémon elegido será guardado en tu Almacén. ¡Recibirás además la mitad de las monedas que gastaste en la tirada!
                    </Typography>

                    <div className="containerModal">
                        {pokemonImage}
                        <div>
                            <div className='inlineContainer' style={{ color: "black" }}>
                                <p className='nombrePokemonReclamar' aria-label={pokemonData.speciesname}>{pokemonData.speciesname}</p>
                                {shinyIndication}
                                {megaIndication}
                                {rareIndication}
                            </div>
                            <div id="tiposPokemon">
                                {firstTypeContainer}
                                {secondTypeContainer}
                            </div>
                            <p className="rareza" style={{ color: 'black' }}>Rareza: <span className={"rareza" + frequency}>{(nombreRareza === undefined ? "Cargando..." : nombreRareza + " ")}</span></p>
                        </div>
                    </div>
                    {unregisterMessage}
                    <div className="containerModal moneyCount">
                        <img className="coin" src={CoinImage} alt="coin" aria-hidden="true" tabindex="-1"/> {"+" + HalfCost}
                    </div>

                    <div className="containerModal">
                        <Button
                            className="cerrarButton"
                            onClick={HandleClose}
                            style={{
                                backgroundColor: "#fb6c6c",
                                color: "white",
                                padding: "14px 20px",
                                border: "0.2vw solid #9f4949",
                                borderRadius: "1vw",
                                cursor: "pointer",
                                fontSize: "calc(0.3vw + 0.9vh)",
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
                                backgroundColor: "#00DF09",
                                color: "#ffffff",
                                padding: "14px 20px",
                                border: "0.2vw solid #89ff8e",
                                borderRadius: "1vw",
                                cursor: "pointer",
                                fontSize: "calc(0.3vw + 0.9vh)",
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
        </>
    );
}

function Reclamar(pokemonData, UserData, setThreePokemon, setUserData, HalfCost) {    
    const notPokemon = [{}, {}, {}];
    setThreePokemon(notPokemon);

    AddLastExtraDetails(pokemonData, UserData); 

    setUserData(prevUserData => {
        const updatedUserData = { ...prevUserData };
        updatedUserData.currency += HalfCost;
        updatedUserData.pokemonList = [...updatedUserData.pokemonList, JSON.stringify(pokemonData)];
        if(!updatedUserData.registers.includes(pokemonData.name)) updatedUserData.registers = [...updatedUserData.registers, pokemonData.name];
        
        if (pokemonData.shiny === "shiny") {
            if (updatedUserData?.shinycount === undefined) {
                updatedUserData.shinycount = 1;
            } else {
                updatedUserData.shinycount = parseInt(updatedUserData.shinycount) + 1;
            }
        }

        if (pokemonData?.megaevolution === true) {
            if (updatedUserData?.megacount === undefined) {
                updatedUserData.megacount = 1;
            } else {
                updatedUserData.megacount = parseInt(updatedUserData.megacount) + 1;
            }
        }

        if (pokemonData?.rarespecies === true) {
            if (updatedUserData?.rarecount === undefined) {
                updatedUserData.rarecount = 1;
            } else {
                updatedUserData.rarecount = parseInt(updatedUserData.rarecount) + 1;
            }
        } 
        return updatedUserData;
    });
}

export function ReclamarEvent(pokemonData, UserData, setUserData, event) {
    AddLastExtraDetailsEvent(pokemonData, UserData); 
    console.log(pokemonData);
    setUserData(prevUserData => {
        console.log(prevUserData.pokemonList)
        const updatedUserData = { ...prevUserData };
        updatedUserData.pokemonList = [...updatedUserData.pokemonList, JSON.stringify(pokemonData)];
        console.log(updatedUserData.pokemonList)
        if(!updatedUserData.registers.includes(pokemonData.name)) updatedUserData.registers = [...updatedUserData.registers, pokemonData.name];
        
        if (pokemonData.shiny === "shiny") {
            if (updatedUserData?.shinycount === undefined) {
                updatedUserData.shinycount = 1;
            } else {
                updatedUserData.shinycount = parseInt(updatedUserData.shinycount) + 1;
            }
        }

        if (pokemonData?.megaevolution === true) {
            if (updatedUserData?.megacount === undefined) {
                updatedUserData.megacount = 1;
            } else {
                updatedUserData.megacount = parseInt(updatedUserData.megacount) + 1;
            }
        }

        if (pokemonData?.rarespecies === true) {
            if (updatedUserData?.rarecount === undefined) {
                updatedUserData.rarecount = 1;
            } else {
                updatedUserData.rarecount = parseInt(updatedUserData.rarecount) + 1;
            }
        } 
        console.log(updatedUserData);
        return updatedUserData;
    });
    
    localStorage.setItem(event, true);

    
}

export default Ruleta;
