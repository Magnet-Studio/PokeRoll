import React, { useState , useEffect } from "react";
import './styles/almacen.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FakeData } from "./userdata/pokemonList";
import { GetSpeciesDataByName, GetSpanishName} from './PokeAPI/PokemonSpeciesData';
import { GetDataByName, GetFirstType, GetSecondType, GetPrettyTypeNameSpanish, GetImage, GetDexNum} from './PokeAPI/PokemonData';
import { Link } from "react-router-dom";
import { GetFrequencyAsync } from "./userdata/pokemonFrequency";
import { GetRareza } from "./userdata/rareza";

function Almacen() {
    const [selectedValue, setSelectedValue] = useState('0');

    return (
        <>
            <div id="almacenBigBox">
                <div id="filtros">
                    <FiltrosAlmacen selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                </div>

                <div id="pokemon-cards-container">
                    <CompletePokemonList selectedValue={selectedValue} />
                </div>
            </div>
        </>
    )
}

function FiltrosAlmacen( {selectedValue, setSelectedValue} ) {
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return(
        <>
            <FilterAltIcon />
            <select className="inputElem" name="generalFilter" defaultValue="0" value={selectedValue} onChange={handleSelectChange}>
                <option value="0">Obtenidos más reciente</option>
                <option value="5">Más antiguos</option>
                <option value="1">Pokémon más raro</option>
                <option value="2">Por número de Pokédex</option>
                <option value="3">Por Tier más alto</option>
                <option value="4">Variocolores primero</option>
            </select>
            
            <select className="inputElemSmall" name="tier" defaultValue="0">
                <option value="0">Filtrar Tier...</option>
                <option value="1">Común</option>
                <option value="2">Infrecuente</option>
                <option value="3">Raro</option>
                <option value="4">Épico</option>
                <option value="5">Legendario</option>
                <option value="6">Singular</option>
            </select>

            <select className="inputElemSmall" name="type" defaultValue="0">
                <option value="0">Tipo...</option>
                <option value="1">Acero</option>
                <option value="2">Agua</option>
                <option value="3">Bicho</option>
                <option value="4">Dragón</option>
                <option value="5">Eléctrico</option>
                <option value="6">Fantasma</option>
                <option value="7">Fuego</option>
                <option value="8">Hada</option>
                <option value="9">Hielo</option>
                <option value="10">Lucha</option>
                <option value="11">Normal</option>
                <option value="12">Planta</option>
                <option value="13">Psíquico</option>
                <option value="14">Roca</option>
                <option value="15">Siniestro</option>
                <option value="16">Tierra</option>
                <option value="17">Veneno</option>
                <option value="18">Volador</option>
            </select>

            <div id="checkBoxContainer">
                <div>
                    <input type="checkbox" id="checkboxEspecial" name="especial" value="checkboxEspecial" />
                    <label htmlFor="checkbox1">Especial</label>
                </div>

                <div>
                    <input type="checkbox" id="checkboxShiny" name="variocolor" value="checkboxShiny" />
                    <label htmlFor="checkboxShiny">Shiny</label>
                </div>
            </div>
        </>
    )
}

function CompletePokemonList({selectedValue, selectedTier, selectedType, selectedSpecial, selectedShiny}) 
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

    return (
        <Link to={"ver-pokemon?id=" + data.id}>
            <div className={"entryBox " + firstType + " " + data.shiny} key={data.id}>
                <p className="dexNumber">Nº {dexNum}</p>
                {pokemon}
            </div>
        </Link>
    );
}

export default Almacen;