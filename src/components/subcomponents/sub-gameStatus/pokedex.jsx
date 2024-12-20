import React from 'react';
import './styles/pokedex.css'
import {useState, useEffect, useRef} from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {GetSpeciesDataByDexNum, GetSpanishName} from './lib/PokemonSpeciesData';
import {GetDataByDexNum, GetFirstType, GetSecondType, GetPrettyTypeNameSpanish, GetImage} from './lib/PokemonData';
import CircularProgress from '@mui/material/CircularProgress';
import { MouseOverPopover } from './mouseOverPopOver';
import { GetFrequencyByDexNum } from './lib/pokemonFrequency';
import { Link } from 'react-router-dom';
import { nombresRarezas } from './verPokemonAlmacen';


function Pokedex({UserData}) 
{
    const initGenerationNum = sessionStorage.getItem("generationNum");
    const [generationNum, setGenerationNum] = useState(initGenerationNum ? parseInt(initGenerationNum) : 1);
    const [dexNumbers, setDexNumbers] = useState(MakeDexNumByGeneration(generationNum));
    const [selectedPokemon, setSelectedPokemon] = useState(0);

    useEffect(() => {
        setDexNumbers(MakeDexNumByGeneration(generationNum));
    }, [generationNum]);

    useEffect(() => {
        document.title = "Pokédex · PokéRoll"
    }, []);

    const nextGenArrowReference = useRef(null);

    return (
        <>
            <div id="previousGenContainer">
                <NavGenArrow reversed setGenerationNum={setGenerationNum} generationNum={generationNum}  />
            </div>

            <div id="pokedexBigBox" tabIndex={-1}>
                <CompleteEntryList  UserData={UserData} nextGenArrowReference={nextGenArrowReference} setGenerationNum={setGenerationNum} generationNum={generationNum} setDexNumbers={setDexNumbers} dexNumbers={dexNumbers} selectedPokemon={selectedPokemon} />
            </div>

            <div id="nextGenContainer"> 
                <NavGenArrow setGenerationNum={setGenerationNum} generationNum={generationNum} nextGenArrowReference={nextGenArrowReference} />
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
        <div className={'nextGenArrow ' + (props.reversed ? 'reversed ' : '') + (disabled ? 'disabled' : '')}>
            <Link tabIndex="0" ref={props.nextGenArrowReference} onClick={handler} aria-label={!props.reversed ? "Avanzar a la siguiente generación:" + (props.generationNum === 9 ? "No disponible" : ordinalNum[(props.generationNum + 1)][0]) + " generación:" : "Regresar a la anterior generación:" + (props.generationNum === 1 ? "No disponible" : ordinalNum[(props.generationNum - 1)][0]) + " generación:"}>
                <ArrowRightIcon />
            </Link>
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
        const card = (<PokemonEntry num={num} known={props.UserData.registers.includes(num) ? "known" : ""} key={num} />);
        return card;
        }
    );

    const registeredMons = props.UserData.registers.length - 1;
    const percentage = (100*(registeredMons/1025)).toFixed(2);

    const skipAllListHandler = (event) => {
        if(event.key === 'Enter')
        {
            event.preventDefault();
            
            if(props.nextGenArrowReference)
            {
                props.nextGenArrowReference.current.focus();
            }
        }
    }

    return (
        <>
            <p className="yourRegisters" tabIndex="0" aria-description={"Registrados: " + registeredMons + " de " + 1025 + ", " + percentage + "%"}>Registrados: {registeredMons} / 1025 ({percentage}%)</p>
            <p className="generationTitle inlineContainer" tabIndex="0" aria-description={"Pokémon desde el número " + generationDexNums[props.generationNum][0] + " hasta el número " + generationDexNums[props.generationNum][1] + ":"} >
                
                <span aria-hidden={true}>
                    {"[" + generationDexNums[props.generationNum][0] +  " - " + generationDexNums[props.generationNum][1] + "]"}
                </span>

                <span>
                    {ordinalNum[props.generationNum][0] + " Generación (" + ordinalNum[props.generationNum][1] + ")"}
                </span> 
               
            </p>

            <div className="skipAllList" onKeyDown={skipAllListHandler} tabIndex="0">Saltar lista de pokémon</div>
            
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
    let name = ""; 
    let pokemon, firstType, rarityNum = '0'; 
    if(props.known === 'known')
    {
        name = GetSpanishName(pokemonSpeciesData);
        firstType = GetFirstType(pokemonData);
        const secondType = GetSecondType(pokemonData);

        let secondTypeContainer = (<></>); 
        if(secondType !== null)
        {
            secondTypeContainer = (<div className="pokemonType" tabIndex="-1" aria-hidden="true">{GetPrettyTypeNameSpanish(secondType)}</div>);
        }  
        knownCond = props.known + " " + firstType;
        
        pokemon = (
            <div aria-label={"Número " + props.num + ":" + name} tabIndex="0" role="contentinfo">
                {GetImage(pokemonData, false)}    

                <div className='types' tabIndex="-1" aria-hidden="true">
                    <div className="pokemonType">{GetPrettyTypeNameSpanish(firstType)}</div>
                    {secondTypeContainer}
                </div>

                <p className='pokemonName' tabIndex="-1" aria-hidden="true">{(name === undefined ? "Cargando..." : name)}</p>
            </div>
        );
    }
    else 
    {
        // Caso de pokémon desconocido
        rarityNum = GetFrequencyByDexNum(props.num);    

        pokemon = <div className='unknownMessageContainer' role="contentinfo" aria-label={"Número " + props.num + `:No se ha descubierto todavía. Este Pokémon es de la rareza ${nombresRarezas[rarityNum-1]}`} tabIndex="0">
                    <MouseOverPopover shouldBeRead={false} notTab content={<span className="unknownMessage" tabIndex="-1" aria-hidden="true">???</span>} 
                        shown={
                            `Este Pokémon aún no ha sido descubierto. Este Pokémon es de la rareza ${nombresRarezas[rarityNum-1]}.`
                        } />
                    </div>
    }

    // Si los datos aún se están cargando, muestra CircularProgress dentro de la tarjeta
    const content = (pokemonData === null || pokemonSpeciesData === null) ? 
        <div className="loadingPokemon">
            <CircularProgress />
        </div> : 
        pokemon;

    return (
        <div className={"entryBox " + knownCond + " rarity" + (rarityNum)} key={"pokemon-" + props.num}>
            <p className="dexNumber" aria-hidden="true" tabIndex="-1">Nº {props.num}</p>
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

const ordinalNum = {
    1 : ["Primera", "Kanto"],
    2 : ["Segunda", "Jotho"],
    3 : ["Tercera", "Hoenn"],
    4 : ["Cuarta", "Sinnoh"],
    5 : ["Quinta", "Teselia"], 
    6 : ["Sexta", "Kalos"], 
    7 : ["Séptima", "Alola"],
    8 : ["Octava", "Galar y Hisui"],
    9 : ["Novena", "Paldea"]
}




export default Pokedex;