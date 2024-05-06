import React from 'react';
import './styles/pokedex.css'

const dexNumber = Array.from({length: 1025}, (_, index) => index + 1)

function Pokedex() {
    return (
        <>
            <div id="pokedexBigBox">
                <PokemonEntry />
            </div>
        </>
    )
}

/*
    En esta función falta también algo para indicar
    si el pokemon ya ha sido registrado o no.
*/

function PokemonEntry() {
    const Entry = dexNumber.map((num) => 
        <div className="entryBox" id={num}>
            <p class="dexNumber">Nº {num}</p>
            <p class="question">???</p>
        </div>
    );

    return (
        <>
            {Entry}
        </>
    )
}

export default Pokedex;