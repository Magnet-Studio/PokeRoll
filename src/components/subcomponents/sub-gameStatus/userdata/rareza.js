
const rarezas = [100, 400, 1000, 2000, 10000, 15000];

export const SetRareza = (rareza) => {
    return rarezas[rareza - 1];
}

/**
 * Calcula la rareza de un pokémon 
 * @param ivs 
 * @param shiny 
 * @param rareza 
 */
export const GetRareza = (ivs, shiny, rareza) => {
    const rarity = SetRareza(rareza);
    const shinyFactor = (shiny === "shiny" ? 5000 : 0);
    const ivFactor = (Math.pow(ivs.hp + ivs.atq + ivs.def + ivs.spatq + ivs.spdef + ivs.spe , 1.4)) * 10
    const finalValue = Math.trunc((Math.pow(shinyFactor + rarity, 1.2) + ivFactor) / 5);

    return finalValue < 10 ? 10 : finalValue;
}