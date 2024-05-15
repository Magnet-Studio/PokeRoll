import React, { useState , useEffect } from "react";
import './styles/almacen.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { GetSpeciesDataByName, GetSpanishName} from './lib/PokemonSpeciesData';
import { GetDataByName, GetFirstType, GetSecondType, GetPrettyTypeNameSpanish, GetImage, GetDexNum} from './lib/PokemonData';
import { Link } from "react-router-dom";
import { GetRarezaPoints } from "./lib/pokemonRarity";
import CircularProgress from '@mui/material/CircularProgress';

function Almacen({UserData, setUserData}) {
    const [selectedValue, setSelectedValue] = useState('0');
    const [selectedFrequency, setSelectedFrequency] = useState('0');
    const [selectedType, setSelectedType] = useState('0');
    const [Name, setName] = useState('');

    useEffect(() => {
        setSelectedValue(sessionStorage.getItem('selectedValue') || '0');
        setSelectedFrequency(sessionStorage.getItem('selectedFrequency') || '0');
        setSelectedType(sessionStorage.getItem('selectedType') || '0');
        setName(sessionStorage.getItem('Name') || '');
    }, []);

    return (
        <>
            <div id="almacenBigBox">
                <div id="filtros">
                    <FiltrosAlmacen selectedValue={selectedValue} 
                                    setSelectedValue={setSelectedValue} 
                                    selectedFrequency={selectedFrequency}
                                    setSelectedFrequency={setSelectedFrequency}
                                    selectedType={selectedType}
                                    setSelectedType={setSelectedType}
                                    Name={Name}
                                    setName={setName}/>
                </div>

                <div id="pokemon-cards-container">
                    <CompletePokemonList selectedValue={selectedValue} selectedFrequency={selectedFrequency} selectedType={selectedType} Name={Name} UserData={UserData}/>
                </div>
            </div>
        </>
    )
}

function FiltrosAlmacen( {selectedValue, setSelectedValue, selectedFrequency, setSelectedFrequency, selectedType, setSelectedType, Name, setName} ) {
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
    return(
        <>
            <div>
            <FilterAltIcon />
            </div>
            <div>
                
                <select className="inputElem" name="generalFilter" value={selectedValue} onChange={handleSelectChange}>
                    <option value="0">Ordenar por más reciente</option>
                    <option value="5">Ordenar por más antiguos</option>
                    <option value="1">Ordenar por Pokémon más raro</option>
                    <option value="2">Ordenar por número de Pokédex</option>
                    <option value="3">Ordenar por Tier más alto</option>
                    <option value="4">Variocolores primero</option>
                </select>
            </div>
            
            <div>
                <select className="inputElemSmall" name="tier" value={selectedFrequency} onChange={handleSelectTier}>
                    <option value="0">Filtrar Rareza...</option>
                    <option value="1">Común</option>
                    <option value="2">Infrecuente</option>
                    <option value="3">Peculiar</option>
                    <option value="4">Épico</option>
                    <option value="5">Legendario</option>
                    <option value="6">Singular</option>
                </select>

                <select className="inputElemSmall" name="type" value={selectedType} onChange={handleSelectType}>
                <option value="0">Filtrar Tipo...</option>
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

            

            <div>
                <input className="inputElem" placeholder="Filtrar por nombre..." value={Name} onChange={handleName}>
                
                </input>
            </div>
        </>
    )
}

function CompletePokemonList({selectedValue, selectedFrequency, selectedType, selectedSpecial, selectedShiny, Name, UserData}) 
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
                let rarezaA = GetRarezaPoints(a.iv, a.shiny, parseInt(a.frequency));
                let rarezaB = GetRarezaPoints(b.iv, b.shiny, parseInt(b.frequency));
                
                return (rarezaA - rarezaB); // No va bien? q raro xd
            });
            sortedList.sort((a,b) => -1);
            break;
        case '2':
            sortedList.sort((a,b) => {
                return parseInt(a.name) - parseInt(b.name);
            })
            break;
        case '3':
            sortedList.sort((a, b) => {
                return parseInt(b.frequency) - parseInt(a.frequency)
            })
            break;
        case '4':
            sortedList.sort((a, b) => {
                if (a.shiny === "shiny" && b.shiny !== "shiny") {
                    return -1; // a viene antes que b
                } else if (a.shiny !== "shiny" && b.shiny === "shiny") {
                    return 1; // b viene antes que a
                } else {
                    return 0; // mantiene el orden actual
                }
            })
            break;
        case '5':
            sortedList.sort((a, b) => a.id - b.id)
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

    const list = sortedList.map((datos, index) =>
        <PokemonCard data={datos} key={index}/>
    );

    return (
        <>
            {list}
        </>
    );

}

function PokemonCard({data}) 
{

    /* Esto habria que hacerlo con un array de pokemon? */
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

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
    firstType = GetFirstType(pokemonData);
    const secondType = GetSecondType(pokemonData);
    const dexNum = GetDexNum(pokemonData);
    
    let secondTypeContainer = (<></>); 
    if(secondType !== null)
    {
        secondTypeContainer = (<div className="pokemonType">{GetPrettyTypeNameSpanish(secondType)}</div>);
    }  
        
    pokemon = (
        <>
            {GetImage(pokemonData, (data.shiny === "shiny"))}    
                <div className='types'>
                    <div className="pokemonType">{GetPrettyTypeNameSpanish(firstType)}</div>
                    {secondTypeContainer}
                </div>
            <p className='pokemonName'>{name}</p>
        </>
    );

    // Si los datos aún se están cargando, muestra CircularProgress dentro de la tarjeta
    const content = (pokemonData === null || pokemonSpeciesData === null) ? 
        <div className="loadingPokemon">
            <CircularProgress />
        </div> : 
        pokemon;

    return (
        <Link to={"ver-pokemon?id=" + data.id}>
            <div className={"entryBox " + firstType + " " + data.shiny} key={data.id}>
                <p className="dexNumber">Nº {dexNum}</p>
                {content}
            </div>
        </Link>
    );
}

export default Almacen;