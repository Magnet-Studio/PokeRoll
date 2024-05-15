export function GetPokemonByID(id, pokemonList)
{
    if(pokemonList === null || pokemonList === undefined) return {};

    return pokemonList.find((string) => 
    {
        if(string !== "{}")
        {
            let pokemon = JSON.parse(string);
            return (parseInt(pokemon.id) === parseInt(id));
        }
        return false;
    });
}

/**
 * Borra de tu almacen el pokemon indicado por la id
 * @param id Id del pokémon a liberar
 * @param currencyAdded Dinero que recibes por liberar el pokémon
 * @param SetUserData Datos de usuario
 */
export function DeletePokemon(id, currencyAdded, SetUserData) 
{
    SetUserData(prevUserData => {
        const updatedUserData = { ...prevUserData };
        updatedUserData.currency += currencyAdded; // Modificar el dinero
        updatedUserData.pokemonList.filter(data => JSON.parse(data).id !== id);
        return updatedUserData; // Devolver la copia modificada
    });
}


/**
 * Te devuelve la fecha actual en dd/mm/aaaa
 */
const SetDate = () => 
{

    let fecha = new Date();
    let dia = String(fecha.getDate()).padStart(2, '0');
    let mes = String(fecha.getMonth() + 1).padStart(2, '0');
    let año = fecha.getFullYear();
    
    let fechaActual = dia + '/' + mes + '/' + año;

    return (fechaActual);
}

/**
 * Variable del nextId para los pokemon que se guardan
 */
let nextId = localStorage.getItem("nextId");
nextId = nextId ? parseInt(nextId) : 1;

/**
 * Añade al pokemonData los valores de username, date e id
 * @param pokemonData JSON con los datos del pokemon
 * @param UserData JSON con los datos de usuario
 */
export const AddLastExtraDetails = (pokemonData, UserData) =>
{
    if(!pokemonData) return;
    pokemonData.id = nextId;
    nextId++;

    localStorage.setItem("nextId", nextId);
    pokemonData.originaltrainer = UserData.name;
    pokemonData.datefound = SetDate();
}