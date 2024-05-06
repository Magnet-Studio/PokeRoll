import axios from 'axios';

export const GetSpeciesDataByDexNum = async (dexNum) =>
{
    try 
    {
        const response =  await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${dexNum}`);
        return response.data;
    } 
    catch(error) 
    {
        console.error("Error al conseguir información del pokémon " + error);
        return null;
    }
}

export const GetSpeciesDataByName = async (pokemonName) => 
{   
    try 
    {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
        return response.data;
    }
    catch(error)
    {
        console.error("Error al conseguir información del pokémon " + error);
        return null;
    }
}

/**
 * Devuelve el nombre del pokémon en español
 * @param data [JSON | Obligatorio] Datos del pokémon
 */
export const GetSpanishName = (data) =>
{
    if(data != undefined && data != null)
    {
        const spanishName = data.names.find((name) => { return name.language.name === 'es'; });
        return spanishName ? spanishName.name : null;
    }
    return null;
}

/**
 * Devuelve el nombre del pokémon en inglés
 * @param data [JSON | Obligatorio] Datos del pokémon
 */
export const GetEnglishName = (data) =>
{
    if(data != undefined && data != null)
    {
        const englishName = data.names.find((name) => { return name.language.name === 'en'; });
        return englishName ? englishName.name : null;
    }
    return null;
}
