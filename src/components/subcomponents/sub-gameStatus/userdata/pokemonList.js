export let FakeData = 
    [
        {
            "id":1,
            "name": "644",
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
            "name": "908",
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
            "name": "989",
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
            "name": "911",
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
            "name": "150",
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
            "name": "59",
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
            "name": "1024",
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
            "name": "483",
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
            "name": "491",
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
            "name": "19",
            "nametag":"Rattata",
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":1,
                "atq":1,
                "def":1,
                "spatq":1,
                "spdef":1,
                "spe":1
            }
        },
        {
            "id":11,
            "name": "249",
            "nametag":"Lugia",
            "shiny": "normal",
            "originaltrainer": "CreatorBeastGD",
            "datefound":"07/05/2024",
            "iv": {
                "hp":5,
                "atq":5,
                "def":5,
                "spatq":5,
                "spdef":5,
                "spe":5
            }
        }
        ,
        {
            "id":12,
            "name": "6",
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
            "name": "650",
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
            "name": "197",
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