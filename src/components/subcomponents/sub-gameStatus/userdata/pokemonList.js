export let FakeData = 
    [
        {
            "id":1,
            "name": "zekrom",
            "nametag":"Zed ✰",
            "shiny": "shiny",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":21,
                "spatq":3,
                "spdef":25,
                "spe":31
            }
        },
        {
            "id":2,
            "name": "meowscarada",
            "nametag":"Michi",
            "shiny": "shiny",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":10,
                "atq":31,
                "def":22,
                "spatq":31,
                "spdef":10,
                "spe":31
            }
        },
        {
            "id":3,
            "name": "sandy-shocks",
            "nametag":"VMagnet ✰",
            "shiny": "shiny",
            "originaltrainer": "PokeROLL",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":4,
            "name": "skeledirge",
            "nametag":"Llaminem ✰",
            "shiny": "shiny",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":5,
            "name": "mewtwo",
            "nametag":"Mewtwo",
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":6,
            "name": "arcanine",
            "nametag":"Arcanine",
            "shiny": "normal",
            "originaltrainer": "joseCP",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":7,
            "name": "terapagos",
            "nametag":"Terapagos",
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":8,
            "name": "dialga",
            "nametag":"Dialga",
            "shiny": "shiny",
            "originaltrainer": "SparaOPS",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":9,
            "name": "darkrai",
            "nametag":"Dark ✰",
            "shiny": "shiny",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":10,
            "name": "rattata",
            "nametag":"Rattata",
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":5,
                "def":5,
                "spatq":5,
                "spdef":5,
                "spe":5
            }
        },
        {
            "id":11,
            "name": "lugia",
            "nametag":"Lugia",
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        }
        ,
        {
            "id":12,
            "name": "charizard",
            "nametag":"Chorizord",
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":13,
            "name": "chespin",
            "nametag":"Chespin",
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":14,
            "name": "umbreon",
            "nametag":"Umbreon",
            "shiny": "shiny",
            "originaltrainer": "SimulationOfMario",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        },
        {
            "id":15,
            "name": "487", /* Por alguna razón, poner "giratina" no funciona */
            "nametag":"Giratina",
            "shiny": "normal",
            "originaltrainer": "SimulationOfMario",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":31,
                "def":31,
                "spatq":31,
                "spdef":31,
                "spe":31
            }
        }
        
    ];

export const GetPokemonByID = (id) => {
    return FakeData.find((pokemon) => {
        return (pokemon.id === parseInt(id));
    });
}