import { GetFrequencyByDexNum } from "./pokemonFrequency";

/**
 * Devuelve un array de tres pokemon (object con dexNum y shiny)
 * @param TierRuleta El tier de la tirada hecha (número entre 1 y 5)
 */
export const GetRandomPokemonDexNums = (TierRuleta) =>
{
    let winners = [];

    for(let i=0; i<3; i++)
    {
        const pokemon = {};
        
        winners[i] = pokemon;
    }

    return winners;
}

const TierProbabilities = [
    [],
    [],
    [],
    [],
    []
];

const SHINY_PROBABILITY = 1 / 512;