import React, { useState , useEffect, useRef } from "react";
import './styles/almacen.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { GetSpeciesDataByName, GetSpanishName} from './lib/PokemonSpeciesData';
import { GetDataByName, GetPrettyTypeNameSpanish, GetImage, GetDexNum, GetVariantImage} from './lib/PokemonData';
import { Link, useNavigate } from "react-router-dom";
import { GetRarezaPoints } from "./lib/pokemonRarity";
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@mui/material";
import { GetPrice, Liberar } from '../sub-bottomElements/liberarButton';
import { GetPokemonByID } from "./lib/pokemonList";
import { MouseOverPopover } from "../sub-gameStatus/mouseOverPopOver";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CoinImage from "../../../images/coin.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

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



  function Almacen({ UserData, setUserData }) 
  {
    const [selectedValue, setSelectedValue] = useState('0');
    const [selectedFrequency, setSelectedFrequency] = useState('0');
    const [selectedType, setSelectedType] = useState('0');
    const [Name, setName] = useState('');
    const [borradoMultiple, setBorradoMultiple] = useState(false);
    const [selectedBorrado, setSelectedBorrado] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setSelectedValue(sessionStorage.getItem('selectedValue') || '0');
        setSelectedFrequency(sessionStorage.getItem('selectedFrequency') || '0');
        setSelectedType(sessionStorage.getItem('selectedType') || '0');
        setName(sessionStorage.getItem('Name') || '');
        document.title = "PokéROLL (Almacén)"
    }, []);

    /*
    useEffect(() => {
    }, [selectedBorrado]);
    */
   
    useEffect(() => {
        if (open) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [open]);

    const toggleBorradoMultiple = () => {
        setBorradoMultiple(!borradoMultiple);
        setSelectedBorrado([]);
    };
    
    const navigate = useNavigate();

    const liberarMultiple = () => {
        selectedBorrado.forEach(pokemon => {
            Liberar(pokemon, setUserData);
        });
        setOpen(false);
        setSelectedBorrado([]);
        toggleBorradoMultiple();
        navigate("/almacen")
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let coins = 0;
    let warning = null;
    const maxDisplayCount = 5; // Máximo número de Pokémon a mostrar directamente

    let list = selectedBorrado.map((pokemon, index) => {
        coins += GetPrice(pokemon);
        let tag = "";

        if (pokemon.shiny === 'shiny' || pokemon?.rarespecies === true || pokemon.megaevolution === true) {
            warning = <>¡CUIDADO! Hay Pokémon especiales en la selección.</>;
            if (pokemon.rarespecies === true) {
                tag = "rareSpeciesFound";
            } else if (pokemon.megaevolution === true) {
                tag = "megaFound";
            } else {
                tag = "shinyFound";
            }
        }

        let name = pokemon.nametag;
        return <p key={index} className={"pokemonNameLiberar " + tag}>{name}</p>;
    });

    // Filtrar los primeros 5 Pokémon para mostrar y contar el resto
    let displayedList = list.slice(0, maxDisplayCount);
    let remainingCount = list.length - maxDisplayCount;

    const Lista = (
        <div>
            {displayedList}
            {remainingCount > 0 && <p className="pokemonNameLiberar">...Y {remainingCount} Pokémon más</p>}
        </div>
    );

    const infoMultipleBorrado = (<span>
        Con la herramienta de liberar múltiple puedes liberar<br/>
        varios Pokémon de tu almacen a la vez.<br/>
        Selecciona los Pokémon que quieras liberar y pulsa confirmar<br/>
        para venderlos todos a la vez. ¡Ten cuidado seleccionando!
    </span>);

    const multipleBorradoPopover = (<MouseOverPopover content={<InfoOutlinedIcon />} shown={infoMultipleBorrado} />);

    const borradoMultipleReference = useRef(null);

    return (
        <>
            <div id="almacenBigBox" tabIndex={-1}>
                <div id="filtros">
                    <FiltrosAlmacen selectedValue={selectedValue} 
                                    setSelectedValue={setSelectedValue} 
                                    selectedFrequency={selectedFrequency}
                                    setSelectedFrequency={setSelectedFrequency}
                                    selectedType={selectedType}
                                    setSelectedType={setSelectedType}
                                    Name={Name}
                                    setName={setName}
                                    borradoMultipleReference={borradoMultipleReference} />
                </div>

                <div id="pokemon-cards-container">
                    <CompletePokemonList selectedBorrado={selectedBorrado} setSelectedBorrado={setSelectedBorrado} borradoMultiple={borradoMultiple} selectedValue={selectedValue} selectedFrequency={selectedFrequency} selectedType={selectedType} Name={Name} UserData={UserData}/>
                </div>

                <div className="borradoMultipleContainer">
                    {borradoMultiple ? (
                        <>
                            {multipleBorradoPopover}
                            <Button tabIndex={0} aria-label="Cancelar borrado múltiple" id="borradoMultipleCancel" onClick={toggleBorradoMultiple}><CloseIcon style={{ fontSize: '40px' }} /></Button>
                            <Button tabIndex={0} aria-label="Confirmar selección de borrado múltiple"
                                id="borradoMultipleConfirm" 
                                onClick={selectedBorrado.length > 0 ? handleOpen : null}
                                className={selectedBorrado.length > 0 ? "" : "borradoMultipleConfirmDisabled"}
                                >
                                <CheckIcon style={{ fontSize: '40px' }} />
                            </Button>
                        </>
                    ) : (
                        <>
                             {multipleBorradoPopover}
                            <Button tabIndex={0} ref={borradoMultipleReference} aria-label="Borrar múltiples Pokémon" id="borradoMultipleButton" onClick={toggleBorradoMultiple}><PublishedWithChangesIcon style={{ fontSize: '40px' }} /></Button>
                        </>
                    )}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title">
                                ¿Quieres liberar a los Pokémon seleccionados?
                            </Typography>
                            <Typography id="modal-modal-description">
                                Estás a punto de liberar {selectedBorrado.length} Pokémon. Entre ellos se encuentran... 
                            </Typography>
                            <div className="containerModal">
                                {Lista}
                            </div>
                            <br/>
                            <div aria-description=":    " className="containerModal warningMessage">
                                {warning}
                            </div>

                            <div className="containerModal moneyCount">
                                <img aria-hidden="true" className="coin" src={CoinImage} alt="Moneda" /> <p aria-description="Obtendrás de vuelta ">{"+" + coins}</p><p aria-label=" monedas:"></p>
                            </div>
                            <div className="containerModal">
                                    <Button
                                        className="cerrarButton"
                                        onClick={handleClose}
                                        style={{
                                            backgroundColor: "#8A0000" /* color de fondo */,
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
                                    <Button
                                        className="confirmarButton"
                                        onClick={liberarMultiple}
                                        style={{
                                            backgroundColor: "#006400" /* color de fondo */,
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
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    );
}

function FiltrosAlmacen( {selectedValue, setSelectedValue, selectedFrequency, setSelectedFrequency, selectedType, setSelectedType, Name, setName, borradoMultipleReference} ) 
{
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        sessionStorage.setItem('selectedValue', event.target.value);
    };
    const handleSelectTier = (event) => {
        setSelectedFrequency(event.target.value);
        sessionStorage.setItem('selectedFrequency', event.target.value);
    };
    const handleSelectType = (event) => {
        setSelectedType(event.target.value);
        sessionStorage.setItem('selectedType', event.target.value);
    };
    const handleName = (event) => {
        setName(event.target.value);
        sessionStorage.setItem('Name', event.target.value);
    };

    const skipAllListHandler = (event) => {
        if(event.key === 'Enter')
        {
            event.preventDefault();
            if(borradoMultipleReference)
            {
                borradoMultipleReference.current.focus();
            }
        }
    }

    return(
        <>
            <div className="filterAlmacenIcon">
                <FilterAltIcon />
            </div>
            <div className="filterAlmacen">
                <label className="filterLabel" htmlFor="ordenacion">Ordenación</label>
                <select tabIndex="0" className="inputElem" name="generalFilter" id="ordenacion" value={selectedValue} onChange={handleSelectChange}>
                    <option value="0">Más reciente</option>
                    <option value="5">Más antiguos</option>
                    <option value="1">Pokémon con más valor</option>
                    <option value="6">Mejores estadísticas</option>
                    <option value="2">Número de Pokédex</option>
                    <option value="3">Rareza más alta</option>
                    <option value="4">Variocolores primero</option>
                    <option value="7">Megaevoluciones primero</option>
                    <option value="8">Especies raras primero</option>
                </select>
            </div>
            
            <div className="filterAlmacen">
                <label className="filterLabel" htmlFor="tier">Filtrar rareza</label>
                <select tabIndex="0" className="inputElemSmall" name="tier" id="tier" value={selectedFrequency} onChange={handleSelectTier}>
                    <option value="0">No filtrar</option>
                    <option value="1">Común</option>
                    <option value="2">Infrecuente</option>
                    <option value="3">Peculiar</option>
                    <option value="4">Épico</option>
                    <option value="5">Legendario</option>
                    <option value="6">Singular</option>
                </select>
            </div>
            <div className="filterAlmacen">
                <label className="filterLabel" htmlFor="filtroTipo">Filtrar tipo</label>
                <select tabIndex="0" className="inputElemSmall" name="type" id="filtroTipo" value={selectedType} onChange={handleSelectType}>
                    <option value="0">No filtrar</option>
                    <option value="steel">Acero</option>
                    <option value="water">Agua</option>
                    <option value="bug">Bicho</option>
                    <option value="dragon">Dragón</option>
                    <option value="electric">Eléctrico</option>
                    <option value="ghost">Fantasma</option>
                    <option value="fire">Fuego</option>
                    <option value="fairy">Hada</option>
                    <option value="ice">Hielo</option>
                    <option value="fighting">Lucha</option>
                    <option value="normal">Normal</option>
                    <option value="grass">Planta</option>
                    <option value="psychic">Psíquico</option>
                    <option value="rock">Roca</option>
                    <option value="dark">Siniestro</option>
                    <option value="ground">Tierra</option>
                    <option value="poison">Veneno</option>
                    <option value="flying">Volador</option>
                </select>
            </div>

            

            <div className="filterAlmacen">  
                <label htmlFor="filtroNombre">Filtrar por nombre</label>
                <input tabIndex="0" className="inputElem" id="filtroNombre" placeholder="Escriba un nombre aquí..." value={Name} onChange={handleName}/>
            </div>
            
            <div className="skipAllList" onKeyDown={skipAllListHandler} tabIndex="0">Saltar lista de pokémon</div>
        </>
    )
}

export const sumIVs = (ivs) => {
    return ivs.hp + ivs.atq + ivs.def + ivs.spatq + ivs.spdef + ivs.spe;
}

function CompletePokemonList({selectedBorrado, setSelectedBorrado, borradoMultiple, selectedValue, selectedFrequency, selectedType, selectedSpecial, selectedShiny, Name, UserData}) 
{
    const rawList = [...UserData.pokemonList];
    let sortedList = []; 

    // Vuelve JSON la lista
    rawList.forEach((pokemon, index) => {
        sortedList[index] = JSON.parse(pokemon);
    });

    sortedList.shift(); // Quita el {} inicial

    // Select de ordenacion
    switch (selectedValue) {
        case '0':
            sortedList.sort((a, b) => b.id - a.id)
            break;
        case '1':
            sortedList.sort((a, b) => {
                let rarezaA = GetRarezaPoints(a.iv, a.shiny, parseInt(a.frequency), (a?.megaevolution !== undefined ? a.megaevolution : false), (a?.rarespecies !== undefined ? a.rarespecies : false));
                let rarezaB = GetRarezaPoints(b.iv, b.shiny, parseInt(b.frequency), (b?.megaevolution !== undefined ? b.megaevolution : false), (b?.rarespecies !== undefined ? b.rarespecies : false));
                
                return (rarezaB - rarezaA);
            });
            break;
        case '2':
            sortedList.sort((a,b) => {
                let rarezaA = GetRarezaPoints(a.iv, a.shiny, parseInt(a.frequency), (a?.megaevolution !== undefined ? a.megaevolution : false), (a?.rarespecies !== undefined ? a.rarespecies : false));
                let rarezaB = GetRarezaPoints(b.iv, b.shiny, parseInt(b.frequency), (b?.megaevolution !== undefined ? b.megaevolution : false), (b?.rarespecies !== undefined ? b.rarespecies : false));
                if (a.name === b.name) {
                    return (rarezaB - rarezaA);
                } else {
                    return parseInt(a.name) - parseInt(b.name);
                }
            })
            break;
        case '3':
            sortedList.sort((a, b) => {
                return parseInt(b.frequency) - parseInt(a.frequency)
            })
            break;
        case '4':
            sortedList.sort((a, b) => {
                let rarezaA = GetRarezaPoints(a.iv, a.shiny, parseInt(a.frequency), (a?.megaevolution !== undefined ? a.megaevolution : false), (a?.rarespecies !== undefined ? a.rarespecies : false));
                let rarezaB = GetRarezaPoints(b.iv, b.shiny, parseInt(b.frequency), (b?.megaevolution !== undefined ? b.megaevolution : false), (b?.rarespecies !== undefined ? b.rarespecies : false));
                
                if (a.shiny === "shiny" && b.shiny !== "shiny") {
                    return -1; // a viene antes que b
                } else if (a.shiny !== "shiny" && b.shiny === "shiny") {
                    return 1; // b viene antes que a
                } else {
                    return (rarezaB - rarezaA); // ordena por rareza
                }
            })
            break;
        case '5':
            sortedList.sort((a, b) => a.id - b.id)
            break;
        case '6':
            sortedList.sort((a, b) => sumIVs(b.iv) - sumIVs(a.iv))
            break;
        case '7':
            sortedList.sort((a, b) => {
                let rarezaA = GetRarezaPoints(a.iv, a.shiny, parseInt(a.frequency), (a?.megaevolution !== undefined ? a.megaevolution : false), (a?.rarespecies !== undefined ? a.rarespecies : false));
                let rarezaB = GetRarezaPoints(b.iv, b.shiny, parseInt(b.frequency), (b?.megaevolution !== undefined ? b.megaevolution : false), (b?.rarespecies !== undefined ? b.rarespecies : false));
                
                if (a?.megaevolution !== undefined && b?.megaevolution !== undefined) {
                    if (a.megaevolution === true && b.megaevolution === false) {
                        return -1
                    } else if (b.megaevolution === true && a.megaevolution === false) {
                        return 1;
                    } else {
                        return (rarezaB - rarezaA);
                    }
                }
                else if (a?.megaevolution !== undefined && b?.megaevolution === undefined) {
                    return -1
                } else if (a?.megaevolution === undefined && b?.megaevolution !== undefined) {
                    return 1
                } else {
                    return (rarezaB - rarezaA);
                }
            })
            break;
        case '8':
            sortedList.sort((a, b) => {
                
                let rarezaA = GetRarezaPoints(a.iv, a.shiny, parseInt(a.frequency), (a?.megaevolution !== undefined ? a.megaevolution : false), (a?.rarespecies !== undefined ? a.rarespecies : false));
                let rarezaB = GetRarezaPoints(b.iv, b.shiny, parseInt(b.frequency), (b?.megaevolution !== undefined ? b.megaevolution : false), (b?.rarespecies !== undefined ? b.rarespecies : false));
                
                if (a?.rarespecies !== undefined && b?.rarespecies !== undefined) {
                    if (a.rarespecies === true && b.rarespecies === false) {
                        return -1
                    } else if (b.rarespecies === true && a.rarespecies === false) {
                        return 1;
                    } else {
                        return  (rarezaB - rarezaA);
                    }
                }
                else if (a?.rarespecies !== undefined && b?.rarespecies === undefined) {
                    return -1
                } else if (a?.rarespecies === undefined && b?.rarespecies !== undefined) {
                    return 1
                } else {
                    return  (rarezaB - rarezaA);
                }
            })
            break;
        default:
            break;
    }

    // Select de Tier
    sortedList = sortedList.filter(poke => (selectedFrequency === "0" ? true : parseInt(poke.frequency) === parseInt(selectedFrequency)));

    // Select de Tipo
    sortedList = sortedList.filter(poke => (selectedType === "0" ? true : poke.type1 === selectedType || poke.type2 === selectedType));

    sortedList = sortedList.filter(poke => (Name === "" ? true : poke.nametag.toLowerCase().startsWith(Name.toLowerCase()) ||
                                                                 poke.speciesname.toLowerCase().startsWith(Name.toLowerCase())));

    const list = sortedList.map((datos) => {
        const isAlreadySelected = selectedBorrado.some(pokemon => pokemon.id === datos.id);
        return (
            <PokemonCard 
                UserData={UserData} 
                isAlreadySelected={isAlreadySelected} 
                selectedBorrado={selectedBorrado}
                setSelectedBorrado={setSelectedBorrado} 
                borradoMultiple={borradoMultiple} 
                data={datos} 
                key={`${datos.id}-${isAlreadySelected}`}
            />
        );
    });
    return (
        <>
            {list.length === 0 ? (<p id="noPokemonMessage" tabIndex="0">No se encuentran Pokémon...</p>) : list}
        </>
    );

}

function PokemonCard({UserData, isAlreadySelected, selectedBorrado, setSelectedBorrado, borradoMultiple, data}) 
{

    /* Esto habria que hacerlo con un array de pokemon? */
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

    const [isSelectedBorrado, setIsSelectedBorrado] = useState(false);

    useEffect(() => {
        setIsSelectedBorrado(isAlreadySelected);
    }, [isAlreadySelected]);

    const handleSelectedBorrado = () => {
        const pokemon = GetPokemonByID(data.id, UserData.pokemonList);
    
        if (isAlreadySelected) {
            setSelectedBorrado(selectedBorrado.filter(pokemon => pokemon.id !== data.id));
            setIsSelectedBorrado(false);
        } else {
            setSelectedBorrado([...selectedBorrado, pokemon]);
            setIsSelectedBorrado(true);
        }
    }
    
    useEffect(() => {
        const fetchDataAndUpdateState = async () => 
            {
                const dataNormal = await GetDataByName(data.name);
                const dataSpecies = await GetSpeciesDataByName(data.name);
                setPokemonData(dataNormal);
                setPokemonSpeciesData(dataSpecies);
            };

            fetchDataAndUpdateState();
    }, [data.name]);

    let pokemon, firstType = '';

    const name = data.nametag === null ? GetSpanishName(pokemonSpeciesData) : data.nametag;
    firstType = data.type1;
    const secondType = data.type2;
    const dexNum = GetDexNum(pokemonData);
    
    let secondTypeContainer = (<></>); 
    if(secondType !== null)
    {
        secondTypeContainer = (<div className="pokemonType">{GetPrettyTypeNameSpanish(secondType)}</div>);
    }

        
    pokemon = (
        <>
            {data?.variant === undefined ? GetImage(pokemonData, (data.shiny === "shiny")) : GetVariantImage(data.variant.name, (data.shiny === "shiny"))}    
                <div className='types'>
                    <div className="pokemonType">{GetPrettyTypeNameSpanish(firstType)}</div>
                    {secondTypeContainer}
                </div>
            <p className='pokemonName'>{name}</p>
        </>
    );

    let megaData="";
    let megaDesc="";
    if (data?.megaevolution !== undefined) {
        if (data.megaevolution === true) {
            megaData = "mega"
            megaDesc = "Megaevolución"
        }
    }

    let rareData="";
    let rareDesc="";
    if (data?.rarespecies !== undefined) {
        if (data.rarespecies === true) {
            rareData = "rare";
            rareDesc = "Especie rara";
        }
    }

    let event="";
    if (data?.event !== undefined) {
        if (data.event === true) {
            event = "event";
        }
    }

    let shinyDesc="";
    if (data.shiny === "shiny") {
        shinyDesc="Variocolor";
    }

    let eventDesc="";
    if (data.event === true) {
        eventDesc="De evento";
    }

    let tipos = "Del tipo " + GetPrettyTypeNameSpanish(firstType);
    if (secondType !== null) {
        tipos = tipos + " y " + GetPrettyTypeNameSpanish(secondType);
    }
    

    // Si los datos aún se están cargando, muestra CircularProgress dentro de la tarjeta
    const content = (pokemonData === null || pokemonSpeciesData === null) ? 
        <div className="loadingPokemon">
            <CircularProgress />
        </div> : 
        pokemon;

        return (
            borradoMultiple ? (
                <Link tabIndex="0" onClick={handleSelectedBorrado} aria-label={(isSelectedBorrado ? "Seleccionado para liberar " : " No seleccionado para liberar ") + ":Número " +dexNum + ": " + data.nametag + ":" + shinyDesc + ":" + megaDesc + ":" + rareDesc + ":" + eventDesc}>
                    <div 
                    className={"entryBox " + firstType + " " + megaData + " " + rareData + " " + data.shiny + " " + event + (isSelectedBorrado ? " liberado" : " notLiberado")} 
                    key={`${data.id}-${isAlreadySelected}`}
                    onClick={handleSelectedBorrado}
                    >
                    <p className="dexNumber" aria-label={"Número de la pokédex :" +dexNum}>Nº {dexNum}</p>
                    {content}
                    </div>
                </Link>
            ) : (
                <Link tabIndex="0" to={"ver-pokemon?id=" + data.id} aria-label={"Número " +dexNum + ": " + tipos + " : " + data.nametag + ": " + shinyDesc + ": " + megaDesc + ": " + rareDesc+ ": " + eventDesc}>
                    <div className={"entryBox " + firstType + " " + megaData + " " + rareData + " " + data.shiny + " " + event} key={data.id}>
                        <p className="dexNumber" >Nº {dexNum}</p>
                        {content}
                    </div>
                </Link>
            )
        );
}


export default Almacen;