import axios from 'axios';
import React from "react";

/**
 * Librería para obtener datos de la PokeAPI y deserializarlos.
 * Útil para obtener los tipos de un pokémon.
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
        console.error("Error al conseguir información del pokémon " + error);
        return null;
    }
}

export const GetDataByName = async (pokemonName) =>
{   
    try 
    {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return response.data;
    }
    catch(error)
    {
        console.error("Error al conseguir información del pokémon " + error);
        return null;
    }
}

/**
 * Devuelve el nombre del pokémon
 * @param data [JSON | Obligatorio] Datos del pokémon
 */
export const GetName = (data) =>
{
    if(data != undefined && data != null)
    {
        return data.species.name;   
    }
    return null;
}

/**
 * Devuelve el primer tipo del pokémon
 * @param data [JSON | Obligatorio] Datos del pokémon
 */
export const GetFirstType = (data) =>
{
    if (data != undefined && data != null) 
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
    if (data != undefined && data != null) 
    {
        if (data.types[1] != null) 
        {
            return data.types[1].type.name;
        } 
    }
    return null;
}
