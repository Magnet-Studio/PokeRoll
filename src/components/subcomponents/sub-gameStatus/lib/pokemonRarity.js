
export const rarezaExtraPoints = [100, 500, 1500, 4000, 10000, 13500];

export const GetRarezaExtraPoints = (frequency) => {
    return rarezaExtraPoints[frequency - 1];
}

/**
 * Calcula los puntos de rareza de un pokémon 
 * @param ivs 
 * @param shiny 
 * @param frequency 
 */
export const GetRarezaPoints = (ivs, shiny, frequency, mega) => {
    const rarity = GetRarezaExtraPoints(frequency);
    const shinyFactor = (shiny === "shiny" ? 5000 : 0);
    const megaFactor = (mega == true ? 1500 : 0);
    const ivsSum = ivs ? (ivs.hp + ivs.atq + ivs.def + ivs.spatq + ivs.spdef + ivs.spe) : 0;
    const ivFactor = (Math.pow(ivsSum , 1.4)) * 10
    const finalValue = Math.trunc((Math.pow(shinyFactor + rarity + megaFactor, 1.2) + ivFactor) / 5);

    return !isNaN(finalValue) ? (finalValue < 10 ? 10 : finalValue) : "Calculando...";
}