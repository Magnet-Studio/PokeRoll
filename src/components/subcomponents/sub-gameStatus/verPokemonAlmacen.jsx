import React from "react";
import { useLocation } from "react-router-dom";
import { GetPokemonByID } from "./userdata/pokemonList";



function VerPokemonAlmacen() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const pokemon = GetPokemonByID(id);

    return (<>
        <p>{pokemon.id}</p>
    </>);
}

export default VerPokemonAlmacen;