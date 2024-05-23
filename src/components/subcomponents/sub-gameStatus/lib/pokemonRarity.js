
export const rarezaExtraPoints = [100, 500, 1500, 4000, 10000, 13500];
export const flagPoints = [ /*Shiny*/           5000, 
                            /*Rare species*/    1000, 
                            /*Megaevolution*/   1500
                            ];

export const GetRarezaExtraPoints = (frequency) => {
    return rarezaExtraPoints[frequency - 1];
}

/**
 * Calcula los puntos de rareza de un pokémon 
 * @param ivs 
 * @param shiny 
 * @param frequency 
 */
export const GetRarezaPoints = (ivs, shiny, frequency, mega, rare) => {
    const rarity = GetRarezaExtraPoints(frequency);
    const shinyFactor = (shiny === "shiny" ? flagPoints[0] : 0);
    const megaFactor = (mega !== undefined ? (mega === true ? flagPoints[2] : 0) : 0);
    const rareFactor = (rare !== undefined ? (rare === true ? flagPoints[1] : 0) : 0);
    const ivsSum = ivs ? (ivs.hp + ivs.atq + ivs.def + ivs.spatq + ivs.spdef + ivs.spe) : 0;
    const ivFactor = (Math.pow(ivsSum , 1.4)) * 10
    const finalValue = Math.trunc((Math.pow(shinyFactor + rarity + megaFactor + rareFactor, 1.2) + ivFactor) / 5);

    return !isNaN(finalValue) ? (finalValue < 10 ? 10 : finalValue) : "Calculando...";
}

/**
 * Calcula los puntos de rareza de un Pokémon en base al JSON de los datos del pokémon del jugador.
 * @param pokeData Los datos del Pokémon del jugador
 * @returns Valor numérico con la rareza. En caso de no poder obtenerse, devuelve "Calculando..."
 */
export const GetRarezaPointsSimplified = (pokeData) => {
    return GetRarezaPoints(pokeData.iv, pokeData.shiny, parseInt(pokeData.frequency), pokeData.megaevolution, pokeData.rarespecies);
}