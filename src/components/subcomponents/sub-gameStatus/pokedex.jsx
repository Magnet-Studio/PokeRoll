import React from 'react';
import './styles/pokedex.css'
import {useState, useEffect} from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {GetSpeciesDataByDexNum, GetSpanishName} from './PokeAPI/PokemonSpeciesData';
import {GetDataByDexNum, GetFirstType, GetSecondType, GetPrettyTypeNameSpanish, GetImage} from './PokeAPI/PokemonData';
import { PokedexRegisters } from './userdata/pokedexRegisters';
import CircularProgress from '@mui/material/CircularProgress';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

/**
 * Función principal que se exporta.
 */
function Pokedex() 
{
    const initGenerationNum = sessionStorage.getItem("generationNum");
    // El número de generación actual
    const [generationNum, setGenerationNum] = useState(initGenerationNum ? parseInt(initGenerationNum) : 1);
    // La lista de dexNum de la actual generación mostrada
    const [dexNumbers, setDexNumbers] = useState(MakeDexNumByGeneration(generationNum));
    // Proceso abort
    const [abortController, setAbortController] = useState(null);

    // Listener del abortador
    useEffect(() => {
        // Creamos un nuevo controlador de aborto cuando cambia el número de generación
        const controller = new AbortController();
        setAbortController(controller);

        return () => {
            // Cuando el componente se desmonta o el número de generación cambia, abortamos las solicitudes en curso
            if (controller) {
                controller.abort();
            }
        };
    }, [generationNum]);

    useEffect(() => {
        setDexNumbers(MakeDexNumByGeneration(generationNum));
    }, [generationNum]);

    return (
        <>
            <div id="previousGenContainer">
                <NavGenArrow reversed setGenerationNum={setGenerationNum} generationNum={generationNum}  />
            </div>

            <div id="pokedexBigBox">
                <CompleteEntryList setGenerationNum={setGenerationNum} generationNum={generationNum} setDexNumbers={setDexNumbers} dexNumbers={dexNumbers}  />
            </div>

            <div id="nextGenContainer"> 
                <NavGenArrow setGenerationNum={setGenerationNum} generationNum={generationNum}  />
            </div>
        </>
    );
}

/**
 * Botones de navegación entre generaciones.
 * @param reversed [Boolean] True si es la flecha izquierda
 * @param generationNum [Obligatorio]
 * @param setGenerationNum [Obligatorio]
 */
function NavGenArrow(props)
{
    const [disabled, setDisabled] = useState(props.reversed ? props.generationNum <= 1 : props.generationNum >= MAX_GENERATION_NUM);

    useEffect(() => {
        // Estado desactivado del botón
        setDisabled(props.reversed ? props.generationNum <= 1 : props.generationNum >= MAX_GENERATION_NUM);
    }, [props.generationNum]); // Cambia solo si se cambia de generación

    // Handler del botón para que cambie de generación
    const handler = () => {

        const newGenerationNum = props.reversed ? props.generationNum - 1 : props.generationNum + 1;
        
        if (newGenerationNum >= 1 && newGenerationNum <= MAX_GENERATION_NUM) 
        {
            sessionStorage.setItem("generationNum", newGenerationNum);
            props.setGenerationNum(newGenerationNum);
        }

    };

    return (
        <div className={'nextGenArrow ' + (props.reversed ? 'reversed ' : '') + (disabled ? 'disabled' : '')} onClick={handler}>
            <ArrowRightIcon />
        </div>
    );
}

/**
 * Lista de la Pokédex.
 * @param setGenerationNum [Obligatorio]
 * @param generationNum [Obligatorio]
 * @param setDexNumbers [Obligatorio]
 * @param dexNumbers [Obligatorio]
 */
function CompleteEntryList(props)
{

    const list = props.dexNumbers.map((num) => {
        const card = (<PokemonEntry num={num} known={PokedexRegisters[num].known} key={num} />);
        return card;
        }
    );

    return (
        <>
            <p className="generationTitle">
                {props.generationNum + "º Generación"} 
                <MouseOverPopover content={<InfoOutlinedIcon className="infoGenerationIcon"/>} 
                                shown={
                                <> 
                                    La generación de un Pokémon es el grupo de Pokémon que se introdujeron en un mismo juego de la saga.
                                </>
                                } />
            </p>

            {list}
        </>
    );
}


/**
 * Un solo contenedor de un pokémon.
 * @param num [Integer | Obligatorio] El número de registro del pokémon
 * @param known [String] "known" si se ha descubierto
*/
function PokemonEntry(props) 
{
    
    // Data
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

    // Actualizador de los datos
    useEffect(() => {
        const fetchDataAndUpdateState = async () => 
        {
            const data = await GetDataByDexNum(props.num);
            const dataSpecies = await GetSpeciesDataByDexNum(props.num);
            setPokemonData(data);
            setPokemonSpeciesData(dataSpecies);
        };

        fetchDataAndUpdateState();
    }, [props.num]);

    let knownCond= '';

    let pokemon, firstType = ''; 
    if(props.known === 'known')
    {
        const name = GetSpanishName(pokemonSpeciesData);
        firstType = GetFirstType(pokemonData);
        const secondType = GetSecondType(pokemonData);

        let secondTypeContainer = (<></>); 
        if(secondType !== null)
        {
            secondTypeContainer = (<div className="pokemonType">{GetPrettyTypeNameSpanish(secondType)}</div>);
        }  
        knownCond = props.known + " " + firstType;
        
        pokemon = (
            <>
                {GetImage(pokemonData, false)}    

                <div className='types'>
                    <div className="pokemonType">{GetPrettyTypeNameSpanish(firstType)}</div>
                    {secondTypeContainer}
                </div>

                <p className='pokemonName'>{(name === undefined ? "Cargando..." : name)}</p>
            </>
        );
    }
    else 
    {
        // Caso de pokémon desconocido
        pokemon = <MouseOverPopover content={<p className="unknownMessage">???</p>} 
                shown={
                    <> 
                        Este Pokémon aún no ha sido descubierto.
                    </>
                } />
    }

    // Si los datos aún se están cargando, muestra CircularProgress dentro de la tarjeta
    const content = (pokemonData === null || pokemonSpeciesData === null) ? 
        <div className="loadingPokemon">
            <CircularProgress />
        </div> : 
        pokemon;

    return (
        <div className={"entryBox " + knownCond} key={"pokemon-" + props.num}>
            <p className="dexNumber">Nº {props.num}</p>
            {content}
        </div>
    );
}

/**
 * Devuelve un array con los dexNum de los pokémon de la generación indicada
 * @param numGen [Integer | Obligatorio] El número de la generación que deseas
 */
const MakeDexNumByGeneration = (numGen) =>
{
    if(numGen <= 0 || numGen > MAX_GENERATION_NUM)
    {
        return null;
    }

    function ArrayFrom(first, last)
    {
        return Array.from({ length: last - first + 1 }, (_, index) => index + first);
    }

    // Obtenemos el intervalo de dexNums de la generación indicada
    const interval = generationDexNums[numGen];

    return ArrayFrom(interval[0], interval[1]);
}

const MAX_GENERATION_NUM = 9;
const generationDexNums = {
    1: [1, 151],
    2: [152, 251],
    3: [252, 386],
    4: [387, 493],
    5: [494, 649],
    6: [650, 721],
    7: [722, 809],
    8: [810, 905],
    9: [906, 1025]
};

function MouseOverPopover({ content, shown }) {

    const [anchorEl, setAnchorEl] = useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <div style={{ display: 'inline-block'}}>
        <Typography
          className="Typography-hoverContent"
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {content}
        </Typography>
        <Popover
          id="mouse-over-popover"
          className="TypographyText"
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          disableRestoreFocus
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 1 } } >{shown}</Typography>
        </Popover>
      </div>
    );
}


export default Pokedex;