import React, { useState , useEffect } from "react";
import './styles/almacen.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FakeData } from "./userdata/pokemonList";
import { GetSpeciesDataByName, GetSpanishName} from './PokeAPI/PokemonSpeciesData';
import { GetDataByName, GetFirstType, GetSecondType, GetPrettyTypeNameSpanish, GetImage, GetDexNum} from './PokeAPI/PokemonData';
import { Link } from "react-router-dom";
import { GetRareza } from "./userdata/rareza";
import CircularProgress from '@mui/material/CircularProgress';

function Almacen() {
    const [selectedValue, setSelectedValue] = useState('0');
    const [selectedTier, setSelectedTier] = useState('0');
    const [selectedType, setSelectedType] = useState('0');
    const [Name, setName] = useState('');

    useEffect(() => {
        setSelectedValue(localStorage.getItem('selectedValue') || '0');
        setSelectedTier(localStorage.getItem('selectedTier') || '0');
        setSelectedType(localStorage.getItem('selectedType') || '0');
        setName(localStorage.getItem('Name') || '');
    }, []);

    return (
        <>
            <div id="almacenBigBox">
                <div id="filtros">
                    <FiltrosAlmacen selectedValue={selectedValue} 
                                    setSelectedValue={setSelectedValue} 
                                    selectedTier={selectedTier}
                                    setSelectedTier={setSelectedTier}
                                    selectedType={selectedType}
                                    setSelectedType={setSelectedType}
                                    Name={Name}
                                    setName={setName}/>
                </div>

                <div id="pokemon-cards-container">
                    <CompletePokemonList selectedValue={selectedValue} selectedTier={selectedTier} selectedType={selectedType} Name={Name}/>
                </div>
            </div>
        </>
    )
}

function FiltrosAlmacen( {selectedValue, setSelectedValue, selectedTier, setSelectedTier, selectedType, setSelectedType, Name, setName} ) {
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        localStorage.setItem('selectedValue', event.target.value);
    };
    const handleSelectTier = (event) => {
        setSelectedTier(event.target.value);
        localStorage.setItem('selectedTier', event.target.value);
    };
    const handleSelectType = (event) => {
        setSelectedType(event.target.value);
        localStorage.setItem('selectedType', event.target.value);
    };
    const handleName = (event) => {
        setName(event.target.value);
        localStorage.setItem('Name', event.target.value);
    };
    return(
        <>
            <div>
            <FilterAltIcon />
            </div>
            <div>
                
                <select className="inputElem" name="generalFilter" value={selectedValue} onChange={handleSelectChange}>
                    <option value="0">Obtenidos más reciente</option>
                    <option value="5">Más antiguos</option>
                    <option value="1">Pokémon más raro</option>
                    <option value="2">Por número de Pokédex</option>
                    <option value="3">Por Tier más alto</option>
                    <option value="4">Variocolores primero</option>
                </select>
            </div>
            
            <div>
                <select className="inputElemSmall" name="tier" value={selectedTier} onChange={handleSelectTier}>
                    <option value="0">Filtrar Tier...</option>
                    <option value="1">Común</option>
                    <option value="2">Infrecuente</option>
                    <option value="3">Raro</option>
                    <option value="4">Épico</option>
                    <option value="5">Legendario</option>
                    <option value="6">Singular</option>
                </select>

                <select className="inputElemSmall" name="type" value={selectedType} onChange={handleSelectType}>
                <option value="0">Tipo...</option>
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
                <input className="inputElem" placeholder="Escribe un nombre..." value={Name} onChange={handleName}>
                
                </input>
            </div>
        </>
    )
}

function CompletePokemonList({selectedValue, selectedTier, selectedType, selectedSpecial, selectedShiny, Name}) 
{
    let sortedList = [...FakeData];

    // Select de ordenacion
    switch (selectedValue) {
        case '0':
            sortedList.sort((a, b) => b.id - a.id)
            break;
        case '1':
            sortedList.sort((a, b) => {
                let rarezaA = GetRareza(a.iv, a.shiny, parseInt(a.tier));
                let rarezaB = GetRareza(b.iv, b.shiny, parseInt(b.tier));
                
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
                return parseInt(b.tier) - parseInt(a.tier)
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
    sortedList = sortedList.filter(poke => (selectedTier === "0" ? true : poke.tier === selectedTier));

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
    });

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