import React, { useState , useEffect } from "react";
import './styles/almacen.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FakeData from "./userdata/pokemonList";
import {GetSpeciesDataByName, GetSpanishName} from './PokeAPI/PokemonSpeciesData';
import {GetDataByName, GetFirstType, GetSecondType, GetPrettyTypeNameSpanish, GetImage} from './PokeAPI/PokemonData';

function Almacen() {
    return (
        <>
            <div id="almacenBigBox">
                <div id="filtros">
                    <FiltrosAlmacen />
                </div>

                <div id="pokemon-cards-container">
                    <CompletePokemonList />
                </div>
            </div>
        </>
    )
}

function FiltrosAlmacen() {
    return(
        <>
            <FilterAltIcon />
            <select className="inputElem" name="generalFilter" defaultValue="0">
                <option value="0">Selecciona un filtro...</option>
                <option value="1">Pokémon más raro</option>
                <option value="2">Por número de Pokédex</option>
            </select>
            
            <select className="inputElemSmall" name="tier" defaultValue="0">
                <option value="0">Tier...</option>
                <option value="1">Tier 1</option>
                <option value="2">Tier 2</option>
            </select>

            <select className="inputElemSmall" name="type" defaultValue="0">
                <option value="0">Tipo...</option>
                <option value="1">Normal</option>
                <option value="2">Bicho</option>
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

function CompletePokemonList() {
    const list = FakeData.map((datos) =>
        <PokemonCard data={datos} key={datos.id}/>
    );

    return (
        <>
            {list}
        </>
    );

}

// SKILL ISSUE BUT IT'S NORMAL WHEN YOU ARE LEARNING
function PokemonCard({data}) {
    /* Esto habria que hacerlo con un array de pokemon? */
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

    console.log(data);

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

    const name = GetSpanishName(pokemonSpeciesData);
    firstType = GetFirstType(pokemonData);
    const secondType = GetSecondType(pokemonData);
    
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
        <div className={"entryBox " + firstType} key={data.id}>
            {pokemon}
        </div>
    );
}

export default Almacen;