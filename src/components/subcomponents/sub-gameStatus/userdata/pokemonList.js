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
                "def":31,
                "spatq":10,
                "spdef":31,
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
            "nametag":null,
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
            "nametag":null,
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
            "nametag":null,
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
            "nametag":null,
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
            "nametag":null,
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":31,
                "atq":0,
                "def":0,
                "spatq":0,
                "spdef":0,
                "spe":0
            }
        },
        {
            "id":11,
            "name": "lugia",
            "nametag":null,
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
            "nametag":null,
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
            "nametag":null,
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
            "nametag":null,
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