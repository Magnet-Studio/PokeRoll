import React from "react";
import './styles/almacen.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Almacen() {
    return (
        <>
            <div id="almacenBigBox">
                <div id="filtros">
                    <FiltrosAlmacen />
                </div>

                <div id="pokemon-cards-container">
                    <PokemonCard />
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

function PokemonCard() {
    /* Esto habria que hacerlo con un array de pokemon? */
}

export default Almacen;