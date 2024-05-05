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
            <select className="inputElem" name="generalFilter">
                <option selected value="0">Selecciona un filtro...</option>
                <option value="1">Pokémon más raro</option>
                <option value="2">Por número de Pokédex</option>
            </select>
            
            <select className="inputElemSmall" name="tier">
                <option selected value="0">Tier...</option>
                <option value="1">Tier 1</option>
                <option value="2">Tier 2</option>
            </select>

            <select className="inputElemSmall" name="type">
                <option value="0">Tipo...</option>
                <option value="1">Normal</option>
                <option value="2">Bicho</option>
            </select>

            <div id="checkBoxContainer">
                <div>
                    <input type="checkbox" id="checkbox1" name="especial" value="checkbox1" />
                    <label for="checkbox1">Especial</label>
                </div>

                <div>
                    <input type="checkbox" id="checkbox2" name="variocolor" value="checkbox2" />
                    <label for="checkbox2">Variocolor</label>
                </div>
            </div>

           

            
            
        </>
    )
}

function PokemonCard() {
    /* Esto habria que hacerlo con un array de pokemon? */
}

export default Almacen;