import axios from 'axios';
import React from "react";

/**
 * Librería para obtener datos de la PokeAPI y deserializarlos.
 * Útil para obtener los tipos de un pokémon o su sprite imagen.
 */

/**
 * Devuelve los datos (JSON) del pokémon
 * @param dexNum [Integer | Obligatorio] DexNum del pokémon
 */
export const GetDataByDexNum = async (dexNum) =>
{
    try 
    {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${dexNum}`);
        return response.data;
    } 
    catch(error) 
    {
        // console.error("Error al conseguir información del pokémon " + error);
        return null;
    }
}

/**
 * Devuelve los datos (JSON) del pokémon
 * @param pokemonName [String | Obligatorio] Nombre del pokémon
 */
export const GetDataByName = async (pokemonName) =>
{   
    try 
    {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return response.data;
    }
    catch(error)
    {
        // console.error("Error al conseguir información del pokémon " + error);
        return null;
    }
}

/**
 * Devuelve el nombre del pokémon
 * @param data [JSON | Obligatorio] Datos del pokémon
 */
export const GetName = (data) =>
{
    if(data !== undefined && data !== null)
    {
        return data.species.name;   
    }
    return null;
}

/**
 * Devuelve el dexNum del pokémon
 * @param data [JSON | Obligatorio] Datos del pokémon
 */
export const GetDexNum = (data) =>
{
    if(data !== undefined && data !== null)
    {
        return data.id;   
    }
    return null;
}

/**
 * Devuelve el sprite del pokémon en objeto <img/>
 * @param data [JSON | Obligatorio] Datos del pokémon
 * @param isShiny [Boolean] True si es shiny
 */
export function GetImage(data, isShiny)
{
    const name = GetName(data);
    let image = (<></>);
    if(name !== null)        
    {
        let shiny = "normal";
        if(isShiny === true)
        {
            shiny = "shiny";
        }

        const url = "https://img.pokemondb.net/sprites/home/" + shiny + "/" + name + ".png";

        image = (<img className="pokemonImg" src={url} alt={name}></img>);
    }
    return (
        <>
            {image}
        </>
    );
}

/**
 * Devuelve el primer tipo del pokémon
 * @param data [JSON | Obligatorio] Datos del pokémon
 */
export const GetFirstType = (data) =>
{
    if (data !== undefined && data !== null) 
    {
        return data.types[0].type.name;
    }
    return null;
}

/**
 * Devuelve el segundo tipo del pokémon (si lo tiene, sino null)
 * @param data [JSON | Obligatorio] Datos del pokémon
 */
export const GetSecondType = (data) =>
{
    if (data !== undefined && data !== null) 
    {
        if (data.types[1] != null) 
        {
            return data.types[1].type.name;
        } 
    }
    return null;
}

/**
 * Devuelve el tipo indicado traducido al español y con la primera letra mayúscula
 * @param name Nombre del tipo (obtenido del getNºType())
 */
export const GetPrettyTypeNameSpanish = (name) => 
{
    return types[name] || null;
}

/*
* Traducción de los tipos
*/
const types = {
    "normal":   "Normal",
    "fire":     "Fuego",
    "water":    "Agua",
    "grass":    "Planta",
    "poison":   "Veneno",
    "bug":      "Bicho",
    "flying":   "Volador",
    "electric": "Eléctrico",
    "ground":   "Tierra",
    "fairy":    "Hada",
    "fighting": "Lucha",
    "rock":     "Roca",
    "psychic":  "Psíquico",
    "steel":    "Acero",
    "ice":      "Hielo",
    "ghost":    "Fantasma",
    "dragon":   "Dragón",
    "dark":     "Siniestro"
};