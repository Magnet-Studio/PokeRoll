
const rarezaExtraPoints = [100, 400, 1000, 2000, 10000, 15000];

export const GetRarezaExtraPoints = (frequency) => {
    return rarezaExtraPoints[frequency - 1];
}

/**
 * Calcula los puntos de rareza de un pokémon 
 * @param ivs 
 * @param shiny 
 * @param frequency 
 */
export const GetRarezaPoints = (ivs, shiny, frequency) => {
    const rarity = GetRarezaExtraPoints(frequency);
    const shinyFactor = (shiny === "shiny" ? 5000 : 0);
    const ivFactor = (Math.pow(ivs.hp + ivs.atq + ivs.def + ivs.spatq + ivs.spdef + ivs.spe , 1.4)) * 10
    const finalValue = Math.trunc((Math.pow(shinyFactor + rarity, 1.2) + ivFactor) / 5);

    return !isNaN(finalValue) ? (finalValue < 10 ? 10 : finalValue) : "Calculando...";
}