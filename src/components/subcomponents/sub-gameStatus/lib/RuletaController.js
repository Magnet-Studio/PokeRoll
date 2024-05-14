import { GetPokemonArrayByFrequency } from "./pokemonFrequency";

/**
 * Devuelve un array de tres pokemon (object con dexNum y shiny)
 * @param TierRuleta El tier de la tirada hecha (número entre 1 y 5)
 */
export const GetThreeRandomPokemon = (TierRuleta) =>
{
    let winners = [];

    /*
            "id":15, // jsx
            "name": "487",
            "speciesname":"Giratina",
            "nametag":"Giratina",
            "shiny": "normal",
            "originaltrainer": "SimulationOfMario", // jsx
            "datefound":"07/05/2024",   // jsx
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            },
            "type1":"ghost",    // jsx hecho
            "type2":"dragon",   // jsx hecho
            "frequency":"5" 
    */

    for(let i=0; i<3; i++)
    {
        let pokemon = {};
        
        // Obtenemos el array de probabilidades según el Tier de la ruleta
        const TierProbabilities = AllTierProbabilities[TierRuleta];
        const frequency = GetFrequencyValue(TierProbabilities);

        // Setter de la frecuencia
        pokemon.frequency = frequency + 1;
        
        // Calculo de IVs
        pokemon.iv = GetIVs();
        
        // Obtener el dexNum del pokémon (aquí verdaderamente se elije el pokémon)
        const pokemonArray = GetPokemonArrayByFrequency(frequency);
        const array = GetPokemonFromArray(pokemonArray);
        pokemon.speciesname = array.name;
        pokemon.nametag = array.name;
        pokemon.name = array.dexNum;
        
        // Cálculo del shiny
        const shiny = GetShinyValue();
        pokemon.shiny = shiny;
        
        // Añadimos el pokemon a lista de 3
        winners[i] = pokemon;
    }

    console.log(winners);

    return winners;
}

/**
 * Muestra en cada array el límite (intervalo abierto) de cada probabilidad * tier * frecuencia
 */
const AllTierProbabilities = [
    [900, 990, 1000, 1001, 1001, 1001], // 90% 9%  1%   0%    0%   0%
    [50, 950, 990, 1000, 1001, 1001],   // 5%  90% 4%   1%    0%   0%
    [50, 100, 950, 990, 1000, 1001],    // 5%  5%  85%  4%    1%   0%
    [0, 10, 100, 975, 1000, 1001],      // 0%  1%  10%  87.5% 2.5% 0%       
    [0, 0, 0, 100, 950, 1000]           // 0%  0%  0%   10%   85%  5%
];

const SHINY_PROBABILITY = 512;

/**
 * Elije aleatoriamente si es shiny o normal
 */
const GetShinyValue = () => 
{
    const num = Math.floor(Math.random() * SHINY_PROBABILITY);

    if(num === 33)
    {
        return "shiny";
    }

    return "normal";
}

const GetRandomIV = () => {
    const num = Math.floor(Math.random() * 32);
    return num;
}

const GetIVs = () => {
    return {
        hp: GetRandomIV(),
        atq: GetRandomIV(),
        def: GetRandomIV(),
        spatq: GetRandomIV(),
        spdef: GetRandomIV(),
        spe: GetRandomIV()
    };
}

/**
 * Devuelve aleatoriamente una frecuencia según el tier de la ruleta
 * @param TierProbabilities Margénes (intervalo abierto) superiores de cada frecuencia
 */
const GetFrequencyValue = (TierProbabilities) =>
{
    const num = Math.floor(Math.random() * 1000);

    for(let i=0; i<6; i++)
    {
        if(num < TierProbabilities[i])
        {
            return i;
        }
    }

    return 0;
}


/**
 * Dado un array de pokémon, te elije uno aleatoriamente
 * @param pokemonArray El array con los pokemon de una frecuencia específica
 */
const GetPokemonFromArray = (pokemonArray) =>
{
    return pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
}