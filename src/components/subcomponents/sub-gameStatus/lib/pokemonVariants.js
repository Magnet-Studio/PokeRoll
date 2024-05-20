const PokemonVariants = [
    {
        dexnum: 487,
        name: "Giratina",
        variants: [
            { rarespecies: [
                { name: "giratina-altered" },
                { name: "giratina-origin", rare: true }
            ] } 
        ]
    },
    {
        dexnum: 800,
        name: "Necrozma",
        variants: [
            { megaevolution: [
                { name: "necrozma", types:["psychic", null], mega: false },
                { name: "necrozma-ultra", types:["psychic", "dragon"] ,mega: true }
            ] },
            { rarespecies: [
                { name: "necrozma", types:["psychic", null]},
                { name: "necrozma-dawn-wings", types: ["psychic", "ghost"], rare: true},
            ] },
            { rarespecies: [
                { name: "necrozma", types:["psychic", null]},
                { name: "necrozma-dusk-mane", types: ["psychic", "steel"], rare: true },
            ] }
        ]
    },

    {
        dexnum: 483,
        name: "Dialga",
        variants: [
            { rarespecies: [
                { name: "dialga" },
                { name: "dialga-origin", rare: true }
            ] }
        ]
    },
    {
        dexnum: 484,
        name: "Palkia",
        variants: [
            { rarespecies: [
                { name: "palkia" },
                { name: "palkia-origin", rare: true}
            ] }
        ]
    },
    {
        dexnum: 978,
        name: "Tatsugiri",
        variants: [
            { name: "tatsugiri-curly" },
            { name: "tatsugiri-droopy" },
            { name: "tatsugiri-stretchy"}
        ]
    },
    {
        dexnum: 999,
        name: "Gimmighoul",
        variants: [
            { name: "gimmighoul-chest" },
            { name: "gimmighoul-roaming" }
        ]
    },
    {
        dexnum: 902,
        name: "Basculegion",
        variants: [
            {name: "basculegion-male" },
            {name: "basculegion-female" }
        ]
    },
    {
        dexnum: 888,
        name: "Zacian",
        variants: [
            {rarespecies: [
                { name: "zacian-hero" },
                { name: "zacian-crowned", types:["fairy", "steel"], rare: true }
            ]}
        ]
    },
    {
        dexnum: 889,
        name: "Zamazenta",
        variants: [
            { rarespecies: [
                { name: "zamazenta-hero" },
                { name: "zamazenta-crowned", types:["fighting", "steel"], rare: true}
            ]}
        ]
    },
    {
        dexnum: 774,
        name: "Minior",
        variants: [
            { name: "minior-meteor", types: ["rock", "flying"] },
            { name: "minior-red-core", types: ["rock", "flying"] },
            { name: "minior-orange-core", types: ["rock", "flying"] },
            { name: "minior-yellow-core", types: ["rock", "flying"] },
            { name: "minior-green-core", types: ["rock", "flying"] },
            { name: "minior-blue-core", types: ["rock", "flying"] },
            { name: "minior-indigo-core", types: ["rock", "flying"] },
            { name: "minior-violet-core", types: ["rock", "flying"] }
        ]
    },
    {
        dexnum: 479,
        name: "Rotom",
        variants: [
            { name: "rotom", types: ["electric", "ghost"] },
            { name: "rotom-heat", types: ["electric", "fire"] },
            { name: "rotom-wash", types: ["electric", "water"] },
            { name: "rotom-frost", types: ["electric", "ice"] },
            { name: "rotom-fan", types: ["electric", "flying"] },
            { name: "rotom-mow", types: ["electric", "grass"] }
        ]
    },
    {
        dexnum: 492,
        name: "Shaymin",
        variants: [
            { rarespecies: [
                { name: "shaymin-land", types: ["grass", null] },
                { name: "shaymin-sky", types: ["grass", "flying"], rare: true}
            ] }
        ]
    },
    {
        dexnum: 144,
        name: "Articuno",
        variants: [
            { name: "articuno", types: ["ice", "flying"] },
            { name: "articuno-galarian", types: ["psychic", "flying"] }
        ]
    },
    {
        dexnum: 145,
        name: "Zapdos",
        variants: [
            { name: "zapdos", types: ["electric", "flying"] },
            { name: "zapdos-galarian", types: ["fighting", "flying"] }
        ]
    },
    {
        dexnum: 146,
        name: "Moltres",
        variants: [
            { name: "moltres", types: ["fire", "flying"] },
            { name: "moltres-galarian", types: ["dark", "flying"] }
        ]
    },
    {
        dexnum: 351,
        name: "Castform",
        variants: [
            { name: "castform", types: ["normal", null] },
            { name: "castform-sunny", types: ["fire", null] },
            { name: "castform-rainy", types: ["water", null] },
            { name: "castform-snowy", types: ["ice", null] }
        ]
    },
    {
        dexnum:773,
        name: "Silvally",
        variants: [
            { name: "silvally-normal", types: ["normal", null] },
            { name: "silvally-fighting", types: ["fighting", null] },
            { name: "silvally-flying", types: ["flying", null] },
            { name: "silvally-poison", types: ["poison", null] },
            { name: "silvally-ground", types: ["ground", null] },
            { name: "silvally-rock", types: ["rock", null] },
            { name: "silvally-bug", types: ["bug", null] },
            { name: "silvally-ghost", types: ["ghost", null] },
            { name: "silvally-steel", types: ["steel", null] },
            { name: "silvally-fire", types: ["fire", null] },
            { name: "silvally-water", types: ["water", null] },
            { name: "silvally-grass", types: ["grass", null] },
            { name: "silvally-electric", types: ["electric", null] },
            { name: "silvally-psychic", types: ["psychic", null] },
            { name: "silvally-ice", types: ["ice", null] },
            { name: "silvally-dragon", types: ["dragon", null] },
            { name: "silvally-dark", types: ["dark", null] },
            { name: "silvally-fairy", types: ["fairy", null] }
        ]
    },
    {
        dexnum: 493,
        name: "Arceus",
        variants: [
            { name: "arceus-normal", types: ["normal", null] },
            { name: "arceus-fighting", types: ["fighting", null] },
            { name: "arceus-flying", types: ["flying", null] },
            { name: "arceus-poison", types: ["poison", null] },
            { name: "arceus-ground", types: ["ground", null] },
            { name: "arceus-rock", types: ["rock", null] },
            { name: "arceus-bug", types: ["bug", null] },
            { name: "arceus-ghost", types: ["ghost", null] },
            { name: "arceus-steel", types: ["steel", null] },
            { name: "arceus-fire", types: ["fire", null] },
            { name: "arceus-water", types: ["water", null] },
            { name: "arceus-grass", types: ["grass", null] },
            { name: "arceus-electric", types: ["electric", null] },
            { name: "arceus-psychic", types: ["psychic", null] },
            { name: "arceus-ice", types: ["ice", null] },
            { name: "arceus-dragon", types: ["dragon", null] },
            { name: "arceus-dark", types: ["dark", null] },
            { name: "arceus-fairy", types: ["fairy", null] }
        ]
    },
    {
        dexnum: 642,
        name: "Thundurus",
        variants: [
            { name: "thundurus-incarnate" },
            { name: "thundurus-therian" }
        ]
    },
    {
        dexnum: 645,
        name: "Landorus",
        variants: [
            { name: "landorus-incarnate" },
            { name: "landorus-therian" }
        ]
    },
    {
        dexnum: 641,
        name: "Tornadus",
        variants: [
            { name: "tornadus-incarnate" },
            { name: "tornadus-therian" }
        ]
    },
    
    {
        dexnum: 905,
        name: "Enamorus",
        variants: [
            { name: "enamorus-incarnate" },
            { name: "enamorus-therian" }
        ]
    },
    {
        dexnum: 647,
        name: "Keldeo",
        variants: [
            { rarespecies: [
                { name: "keldeo-ordinary", types: ["water", "fighting"] },
                { name: "keldeo-resolute", types: ["water", "fighting"], rare: true}
            ] }
        ]
    },
    {
        dexnum: 678,
        name: "Meowstic",
        variants: [
            { name: "meowstic-male" },
            { name: "meowstic-female" }
        ]
    },
    {
        dexnum: 849,
        name: "Toxtricity",
        variants: [
            { name: "toxtricity-amped" },
            { name: "toxtricity-low-key" }
        ]
    },
    {
        dexnum: 646,
        name: "Kyurem",
        variants: [
            { rarespecies: [
                { name: "kyurem" },
                { name: "kyurem-black", rare: true},
            ] },
            { rarespecies: [
                { name: "kyurem" },
                { name: "kyurem-white", rare: true }
            ] }
        ]
    },
    {
        dexnum: 386,
        name: "Deoxys",
        variants: [
            { name: "deoxys-normal" },
            { name: "deoxys-attack" },
            { name: "deoxys-defense" },
            { name: "deoxys-speed" }
        ]
    },
    {
        dexnum: 716,
        name: "Xerneas",
        variants: [
            { name: "xerneas", types: ["fairy", null] },
            { name: "xerneas-active", types: ["fairy", null] }
        ]
    },
    {
        dexnum: 648,
        name: "Meloetta",
        variants: [
            { rarespecies: [
                { name: "meloetta-aria", types: ["normal", "psychic"] },
                { name: "meloetta-pirouette", types: ["normal", "fighting"], rare:true }
            ] }
        ]
    },
    {
        dexnum: 649,
        name: "Genesect",
        variants: [
            { name: "genesect" },
            { name: "genesect-burn" },
            { name: "genesect-chill" },
            { name: "genesect-douse" },
            { name: "genesect-shock" }
        ]
    },
    {
        dexnum: 201,
        name: "Unown",
        variants: [
            { name: "unown-a" },
            { name: "unown-b" },
            { name: "unown-c" },
            { name: "unown-d" },
            { name: "unown-e" },
            { name: "unown-f" },
            { name: "unown-g" },
            { name: "unown-h" },
            { name: "unown-i" },
            { name: "unown-j" },
            { name: "unown-k" },
            { name: "unown-l" },
            { name: "unown-m" },
            { name: "unown-n" },
            { name: "unown-o" },
            { name: "unown-p" },
            { name: "unown-q" },
            { name: "unown-r" },
            { name: "unown-s" },
            { name: "unown-t" },
            { name: "unown-u" },
            { name: "unown-v" },
            { name: "unown-w" },
            { name: "unown-x" },
            { name: "unown-y" },
            { name: "unown-z" },
            { name: "unown-em" },
            { name: "unown-qm" }
        ]
    },
    {
        dexnum: 720,
        name: "Hoopa",
        variants: [
            { rarespecies: [
                { name: "hoopa-confined", types: ["psychic", "ghost"] },
                { name: "hoopa-unbound", types: ["psychic", "dark"], rare: true },
            ] }
        ]
    },
    {
        dexnum: 892,
        name: "Urshifu",
        variants: [
            { name: "urshifu-single-strike", types: ["fighting", "dark"] },
            { name: "urshifu-rapid-strike", types: ["fighting", "water"] },
        ]
    },
    {
        dexnum:1017,
        name:"Ogerpon",
        variants: [
            { name: "ogerpon-teal" },
            { name: "ogerpon-cornerstone", types: ["grass", "rock"] },
            { name: "ogerpon-hearthflame", types: ["grass", "fire"] },
            { name: "ogerpon-wellspring", types: ["grass", "water"] }
        ]
    },
    {
        dexnum:898,
        name:"Calyrex",
        variants: [
            { rarespecies: [  
                { name: "calyrex" },
                { name: "calyrex-ice-rider", types: ["psychic", "ice"], rare: true},
            ] },
            { rarespecies:[
                { name: "calyrex" },
                { name: "calyrex-shadow-rider", types: ["psychic", "ghost"] , rare: true},
            ] }
        ]
    },

    {
        dexnum: 1024,
        name:"Terapagos",
        variants: [
            { rarespecies: [
                { name:"terapagos-normal" },
                { name:"terapagos-terastal", rare: true }
            ] }
        ]
    },
    {
        dexnum: 741,
        name: "Oricorio",
        variants: [
            { name: "oricorio-baile", types: ["fire", "flying"] },
            { name: "oricorio-pom-pom", types: ["electric", "flying"] },
            { name: "oricorio-pau", types: ["psychic", "flying"] },
            { name: "oricorio-sensu", types: ["ghost", "flying"] }
        ]
    },
    {
        dexnum: 669,
        name: "Flabébé",
        variants: [
            { name: "flabebe-red", types: ["fairy", null] },
            { name: "flabebe-yellow", types: ["fairy", null] },
            { name: "flabebe-orange", types: ["fairy", null] },
            { name: "flabebe-blue", types: ["fairy", null] },
            { name: "flabebe-white", types: ["fairy", null] }
        ]
    },
    {
        dexnum: 670,
        name: "Floette",
        variants: [
            { name: "floette-red", types: ["fairy", null] },
            { name: "floette-yellow", types: ["fairy", null] },
            { name: "floette-orange", types: ["fairy", null] },
            { name: "floette-blue", types: ["fairy", null] },
            { name: "floette-white", types: ["fairy", null] }
        ]
    },
    {
        dexnum: 671,
        name: "Florges",
        variants: [
            { name: "florges-red", types: ["fairy", null] },
            { name: "florges-yellow", types: ["fairy", null] },
            { name: "florges-orange", types: ["fairy", null] },
            { name: "florges-blue", types: ["fairy", null] },
            { name: "florges-white", types: ["fairy", null] }
        ]
    },

    // Megaevoluciones
    {
        dexnum: 3,
        name: "Venusaur",
        variants: [
            { megaevolution: [
                { name: "venusaur", types: ["grass", "poison"], mega: false },
                { name: "venusaur-mega", types: ["grass", "poison"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 6,
        name: "Charizard",
        variants: [
            { megaevolution: [
                { name: "charizard", types: ["fire", "flying"], mega: false },
                { name: "charizard-mega-x", types: ["fire", "dragon"], mega: true },
                { name: "charizard-mega-y", types: ["fire", "flying"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 9,
        name: "Blastoise",
        variants: [
            { megaevolution: [
                { name: "blastoise", types: ["water", null], mega: false },
                { name: "blastoise-mega", types: ["water", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 15,
        name: "Beedrill",
        variants: [
            { megaevolution: [
                { name: "beedrill", types: ["bug", "poison"], mega: false },
                { name: "beedrill-mega", types: ["bug", "poison"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 18,
        name: "Pidgeot",
        variants: [
            { megaevolution: [
                { name: "pidgeot", types: ["normal", "flying"], mega: false },
                { name: "pidgeot-mega", types: ["normal", "flying"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 65,
        name: "Alakazam",
        variants: [
            { megaevolution: [
                { name: "alakazam", types: ["psychic", null], mega: false },
                { name: "alakazam-mega", types: ["psychic", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 80,
        name: "Slowbro",
        variants: [
            { name: "slowbro-galarian", types: ["poison", "psychic"] },
            { megaevolution: [
                { name: "slowbro", types: ["water", "psychic"], mega: false },
                { name: "slowbro-mega", types: ["water", "psychic"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 94,
        name: "Gengar",
        variants: [
            { megaevolution: [
                { name: "gengar", types: ["ghost", "poison"], mega: false },
                { name: "gengar-mega", types: ["ghost", "poison"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 115,
        name: "Kangaskhan",
        variants: [
            { megaevolution: [
                { name: "kangaskhan", types: ["normal", null], mega: false },
                { name: "kangaskhan-mega", types: ["normal", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 127,
        name: "Pinsir",
        variants: [
            { megaevolution: [
                { name: "pinsir", types: ["bug", null], mega: false },
                { name: "pinsir-mega", types: ["bug", "flying"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 130,
        name: "Gyarados",
        variants: [
            { megaevolution: [
                { name: "gyarados", types: ["water", "flying"], mega: false },
                { name: "gyarados-mega", types: ["water", "dark"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 142,
        name: "Aerodactyl",
        variants: [
            { megaevolution: [
                { name: "aerodactyl", types: ["rock", "flying"], mega: false },
                { name: "aerodactyl-mega", types: ["rock", "flying"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 150,
        name: "Mewtwo",
        variants: [
            { megaevolution: [
                { name: "mewtwo", types: ["psychic", null], mega: false },
                { name: "mewtwo-mega-x", types: ["psychic", "fighting"], mega: true },
                { name: "mewtwo-mega-y", types: ["psychic", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 181,
        name: "Ampharos",
        variants: [
            { megaevolution: [
                { name: "ampharos", types: ["electric", null], mega: false },
                { name: "ampharos-mega", types: ["electric", "dragon"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 208,
        name: "Steelix",
        variants: [
            { megaevolution: [
                { name: "steelix", types: ["steel", "ground"], mega: false },
                { name: "steelix-mega", types: ["steel", "ground"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 212,
        name: "Scizor",
        variants: [
            { megaevolution: [
                { name: "scizor", types: ["bug", "steel"], mega: false },
                { name: "scizor-mega", types: ["bug", "steel"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 214,
        name: "Heracross",
        variants: [
            { megaevolution: [
                { name: "heracross", types: ["bug", "fighting"], mega: false },
                { name: "heracross-mega", types: ["bug", "fighting"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 229,
        name: "Houndoom",
        variants: [
            { megaevolution: [
                { name: "houndoom", types: ["dark", "fire"], mega: false },
                { name: "houndoom-mega", types: ["dark", "fire"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 248,
        name: "Tyranitar",
        variants: [
            { megaevolution: [
                { name: "tyranitar", types: ["rock", "dark"], mega: false },
                { name: "tyranitar-mega", types: ["rock", "dark"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 254,
        name: "Sceptile",
        variants: [
            { megaevolution: [
                { name: "sceptile", types: ["grass", null], mega: false },
                { name: "sceptile-mega", types: ["grass", "dragon"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 257,
        name: "Blaziken",
        variants: [
            { megaevolution: [
                { name: "blaziken", types: ["fire", "fighting"], mega: false },
                { name: "blaziken-mega", types: ["fire", "fighting"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 260,
        name: "Swampert",
        variants: [
            { megaevolution: [
                { name: "swampert", types: ["water", "ground"], mega: false },
                { name: "swampert-mega", types: ["water", "ground"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 282,
        name: "Gardevoir",
        variants: [
            { megaevolution: [
                { name: "gardevoir", types: ["psychic", "fairy"], mega: false },
                { name: "gardevoir-mega", types: ["psychic", "fairy"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 302,
        name: "Sableye",
        variants: [
            { megaevolution: [
                { name: "sableye", types: ["dark", "ghost"], mega: false },
                { name: "sableye-mega", types: ["dark", "ghost"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 303,
        name: "Mawile",
        variants: [
            { megaevolution: [
                { name: "mawile", types: ["steel", "fairy"], mega: false },
                { name: "mawile-mega", types: ["steel", "fairy"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 306,
        name: "Aggron",
        variants: [
            { megaevolution: [
                { name: "aggron", types: ["steel", "rock"], mega: false },
                { name: "aggron-mega", types: ["steel", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 308,
        name: "Medicham",
        variants: [
            { megaevolution: [
                { name: "medicham", types: ["fighting", "psychic"], mega: false },
                { name: "medicham-mega", types: ["fighting", "psychic"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 310,
        name: "Manectric",
        variants: [
            { megaevolution: [
                { name: "manectric", types: ["electric", null], mega: false },
                { name: "manectric-mega", types: ["electric", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 319,
        name: "Sharpedo",
        variants: [
            { megaevolution: [
                { name: "sharpedo", types: ["water", "dark"], mega: false },
                { name: "sharpedo-mega", types: ["water", "dark"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 323,
        name: "Camerupt",
        variants: [
            { megaevolution: [
                { name: "camerupt", types: ["fire", "ground"], mega: false },
                { name: "camerupt-mega", types: ["fire", "ground"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 334,
        name: "Altaria",
        variants: [
            { megaevolution: [
                { name: "altaria", types: ["dragon", "flying"], mega: false },
                { name: "altaria-mega", types: ["dragon", "fairy"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 354,
        name: "Banette",
        variants: [
            { megaevolution: [
                { name: "banette", types: ["ghost", null], mega: false },
                { name: "banette-mega", types: ["ghost", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 359,
        name: "Absol",
        variants: [
            { megaevolution: [
                { name: "absol", types: ["dark", null], mega: false },
                { name: "absol-mega", types: ["dark", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 362,
        name: "Glalie",
        variants: [
            { megaevolution: [
                { name: "glalie", types: ["ice", null], mega: false },
                { name: "glalie-mega", types: ["ice", null], mega: true }
            ] }
        ]
    },
    {
        dexnum: 373,
        name: "Salamence",
        variants: [
            { megaevolution: [
                { name: "salamence", types: ["dragon", "flying"], mega: false },
                { name: "salamence-mega", types: ["dragon", "flying"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 376,
        name: "Metagross",
        variants: [
            { megaevolution: [
                { name: "metagross", types: ["steel", "psychic"], mega: false },
                { name: "metagross-mega", types: ["steel", "psychic"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 380,
        name: "Latias",
        variants: [
            { megaevolution: [
                { name: "latias", types: ["dragon", "psychic"], mega: false },
                { name: "latias-mega", types: ["dragon", "psychic"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 381,
        name: "Latios",
        variants: [
            { megaevolution: [
                { name: "latios", types: ["dragon", "psychic"], mega: false },
                { name: "latios-mega", types: ["dragon", "psychic"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 384,
        name: "Rayquaza",
        variants: [
            { megaevolution: [
                { name: "rayquaza", types: ["dragon", "flying"], mega: false },
                { name: "rayquaza-mega", types: ["dragon", "flying"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 428,
        name: "Lopunny",
        variants: [
            { megaevolution: [
                { name: "lopunny", types: ["normal", null], mega: false },
                { name: "lopunny-mega", types: ["normal", "fighting"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 445,
        name: "Garchomp",
        variants: [
            { megaevolution: [
                { name: "garchomp", types: ["dragon", "ground"], mega: false },
                { name: "garchomp-mega", types: ["dragon", "ground"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 448,
        name: "Lucario",
        variants: [
            { megaevolution: [
                { name: "lucario", types: ["fighting", "steel"], mega: false },
                { name: "lucario-mega", types: ["fighting", "steel"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 460,
        name: "Abomasnow",
        variants: [
            { megaevolution: [
                { name: "abomasnow", types: ["grass", "ice"], mega: false },
                { name: "abomasnow-mega", types: ["grass", "ice"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 475,
        name: "Gallade",
        variants: [
            { megaevolution: [
                { name: "gallade", types: ["psychic", "fighting"], mega: false },
                { name: "gallade-mega", types: ["psychic", "fighting"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 531,
        name: "Audino",
        variants: [
            { megaevolution: [
                { name: "audino", types: ["normal", null], mega: false },
                { name: "audino-mega", types: ["normal", "fairy"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 719,
        name: "Diancie",
        variants: [
            { megaevolution: [
                { name: "diancie", types: ["rock", "fairy"], mega: false },
                { name: "diancie-mega", types: ["rock", "fairy"], mega: true }
            ] }
        ]
    },
    {
        dexnum: 382,
        name: "Kyogre",
        variants: [
            { megaevolution: [
                { name: "kyogre", mega: false },
                { name: "kyogre-primal", mega: true }
            ] }
        ]
    },
    {
        dexnum: 383,
        name: "Groudon",
        variants: [
            { megaevolution: [
                { name: "groudon", mega: false },
                { name: "groudon-primal", types:["ground", "fire"] ,mega: true }
            ] }
        ]
    },
    // Especies raras
    {
        dexnum: 718,
        name: "Zygarde",
        variants: [
            { rarespecies: [
                    {name: "zygarde-10" },
                    {name: "zygarde-50" },
                    {name: "zygarde-complete", rare: true}
                ]
            }
        ]
    },
    {
        dexnum: 745,
        name: "Lycanroc",
        variants: [
            { rarespecies: [
                {name: "lycanroc-midday"},
                {name: "lycanroc-midnight"},
                {name: "lycanroc-dusk", rare: true }
            ]}
        ]
    },
    {
        dexnum: 25,
        name: "Pikachu",
        variants: [
           { rarespecies: [
                { name: "pikachu" },
                { name: "pikachu-world-cap", rare: true },
            ]}
        ]
    },
    {
        dexnum:666,
        name:"Vivillon",
        variants: [
            
            { name: "vivillon-meadow", types: ["bug", "flying"] },
            { name: "vivillon-archipelago", types: ["bug", "flying"] },
            { name: "vivillon-continent", types: ["bug", "flying"] },
            { name: "vivillon-elegant", types: ["bug", "flying"] },
            { name: "vivillon-garden", types: ["bug", "flying"] },
            { name: "vivillon-high-plains", types: ["bug", "flying"] },
            { name: "vivillon-icy-snow", types: ["bug", "flying"] },
            { name: "vivillon-jungle", types: ["bug", "flying"] },
            { name: "vivillon-marine", types: ["bug", "flying"] },
            { name: "vivillon-modern", types: ["bug", "flying"] },
            { name: "vivillon-monsoon", types: ["bug", "flying"] },
            { name: "vivillon-ocean", types: ["bug", "flying"] },
            { name: "vivillon-polar", types: ["bug", "flying"] },
            { name: "vivillon-river", types: ["bug", "flying"] },
            { name: "vivillon-sandstorm", types: ["bug", "flying"] },
            { name: "vivillon-savanna", types: ["bug", "flying"] },
            { name: "vivillon-sun", types: ["bug", "flying"] },
            { name: "vivillon-tundra", types: ["bug", "flying"] },
            { rarespecies: [
                { name: "vivillon-fancy", types: ["bug", "flying"], rare: true },
                { name: "vivillon-poke-ball", types: ["bug", "flying"], rare: true }
            ]}
        ]
    },
    {
        dexnum: 893,
        name: "Zarude",
        variants: [
            { rarespecies: [
                 { name: "zarude" },
                 { name: "zarude-dada", rare: true },
             ]}
        ]
    },
    {
        dexnum: 964,
        name: "Palafin",
        variants: [
            { rarespecies: [
                 { name: "palafin-zero" },
                 { name: "palafin-hero", rare: true },
             ]}
        ]
    },
    {
        dexnum: 901,
        name: "Ursaluna",
        variants: [
            { rarespecies: [
                 { name: "ursaluna" },
                 { name: "ursaluna-bloodmoon", rare: true },
             ]}
        ]
    },
    {
        dexnum: 585,
        name: "Deerling",
        variants: [
            { name: "deerling-spring", types: ["normal", "grass"] },
            { name: "deerling-summer", types: ["normal", "grass"] },
            { name: "deerling-autumn", types: ["normal", "grass"] },
            { name: "deerling-winter", types: ["normal", "grass"] }
        ]
    },
    {
        dexnum: 586,
        name: "Sawsbuck",
        variants: [
            { name: "sawsbuck-spring", types: ["normal", "grass"] },
            { name: "sawsbuck-summer", types: ["normal", "grass"] },
            { name: "sawsbuck-autumn", types: ["normal", "grass"] },
            { name: "sawsbuck-winter", types: ["normal", "grass"] }
        ]
    },
    {
        dexnum: 724,
        name: "Decidueye",
        variants: [
            { name: "decidueye", types: ["grass", "ghost"] },
            { name: "decidueye-hisuian", types: ["grass", "fighting"] }
        ]
    },
    {
        dexnum: 157,
        name: "Typhlosion",
        variants: [
            { name: "typhlosion", types: ["fire", null] },
            { name: "typhlosion-hisuian", types: ["fire", "ghost"] }
        ]
    },
    {
        dexnum: 503,
        name: "Samurott",
        variants: [
            { name: "samurott", types: ["water", null] },
            { name: "samurott-hisuian", types: ["water", "dark"] }
        ]
    },
    {
        dexnum: 215,
        name: "Sneasel",
        variants: [
            { name: "sneasel", types: ["dark", "ice"] },
            { name: "sneasel-hisuian", types: ["fighting", "poison"] }
        ]
    },
    {
        dexnum: 58,
        name: "Growlithe",
        variants: [
            { name: "growlithe", types: ["fire", null] },
            { name: "growlithe-hisuian", types: ["fire", "rock"] }
        ]
    },
    {
        dexnum: 59,
        name: "Arcanine",
        variants: [
            { name: "arcanine", types: ["fire", null] },
            { name: "arcanine-hisuian", types: ["fire", "rock"] }
        ]
    },
    {
        dexnum: 211,
        name: "Qwilfish",
        variants: [
            { name: "qwilfish", types: ["water", "poison"] },
            { name: "qwilfish-hisuian", types: ["dark", "poison"] }
        ]
    },
    {
        dexnum: 100,
        name: "Voltorb",
        variants: [
            { name: "voltorb", types: ["electric", null] },
            { name: "voltorb-hisuian", types: ["electric", "grass"] }
        ]
    },
    {
        dexnum: 101,
        name: "Electrode",
        variants: [
            { name: "electrode", types: ["electric", null] },
            { name: "electrode-hisuian", types: ["electric", "grass"] }
        ]
    },
    {
        dexnum: 83,
        name: "Farfetch’d",
        variants: [
            { name: "farfetchd", types: ["normal", "flying"] },
            { name: "farfetchd-galarian", types: ["fighting", null] }
        ]
    },
    {
        dexnum: 122,
        name: "Mr. Mime",
        variants: [
            { name: "mr-mime", types: ["psychic", "fairy"] },
            { name: "mr-mime-galarian", types: ["psychic", "ice"] }
        ]
    },
    {
        dexnum: 128,
        name: "Tauros",
        variants: [
            { name: "tauros", types: ["normal", null] },
            { name: "tauros-paldean-combat", types: ["fighting", null] },
            { name: "tauros-paldean-blaze", types: ["fighting", "fire"] },
            { name: "tauros-paldean-aqua", types: ["fighting", "water"] }
        ]
    },
    {
        dexnum: 263,
        name: "Zigzagoon",
        variants: [
            { name: "zigzagoon", types: ["normal", null] },
            { name: "zigzagoon-galarian", types: ["dark", "normal"] }
        ]
    },
    {
        dexnum: 194,
        name: "Wooper",
        variants: [
            { name: "wooper", types: ["water", "ground"] },
            { name: "wooper-paldean", types: ["poison", "ground"] }
        ]
    },
    {
        dexnum: 79,
        name: "Slowpoke",
        variants: [
            { name: "slowpoke", types: ["water", "psychic"] },
            { name: "slowpoke-galarian", types: ["psychic", null] }
        ]
    },
    {
        dexnum: 199,
        name: "Slowking",
        variants: [
            { name: "slowking", types: ["water", "psychic"] },
            { name: "slowking-galarian", types: ["poison", "psychic"] }
        ]
    },
    
    {
        dexnum: 37,
        name: "Vulpix",
        variants: [
            { name: "vulpix", types: ["fire", null] },
            { name: "vulpix-alolan", types: ["ice", null] }
        ]
    },
    {
        dexnum: 38,
        name: "Ninetales",
        variants: [
            { name: "ninetales", types: ["fire", null] },
            { name: "ninetales-alolan", types: ["ice", "fairy"] }
        ]
    },
    {
        dexnum: 27,
        name: "Sandshrew",
        variants: [
            { name: "sandshrew", types: ["ground", null] },
            { name: "sandshrew-alolan", types: ["ice", null] }
        ]
    },
    {
        dexnum: 28,
        name: "Sandslash",
        variants: [
            { name: "sandslash", types: ["ground", null] },
            { name: "sandslash-alolan", types: ["ice", "steel"] }
        ]
    },
    {
        dexnum: 52,
        name: "Meowth",
        variants: [
            { name: "meowth", types: ["normal", null] },
            { name: "meowth-alolan", types: ["dark", null] },
            { name: "meowth-galarian", types: ["steel", null] }
        ]
    },
    {
        dexnum: 53,
        name: "Persian",
        variants: [
            { name: "persian", types: ["normal", null] },
            { name: "persian-alolan", types: ["dark", null] }
        ]
    },
    {
        dexnum: 88,
        name: "Grimer",
        variants: [
            { name: "grimer", types: ["poison", null] },
            { name: "grimer-alolan", types: ["poison", "dark"] }
        ]
    },
    {
        dexnum: 89,
        name: "Muk",
        variants: [
            { name: "muk", types: ["poison", null] },
            { name: "muk-alolan", types: ["poison", "dark"] }
        ]
    },
    {
        dexnum: 19,
        name: "Rattata",
        variants: [
            { name: "rattata", types: ["normal", null] },
            { name: "rattata-alolan", types: ["dark", "normal"] }
        ]
    },
    {
        dexnum: 20,
        name: "Raticate",
        variants: [
            { name: "raticate", types: ["normal", null] },
            { name: "raticate-alolan", types: ["dark", "normal"] }
        ]
    },
    {
        dexnum: 103,
        name: "Exeggutor",
        variants: [
            { name: "exeggutor", types: ["grass", "psychic"] },
            { name: "exeggutor-alolan", types: ["grass", "dragon"] }
        ]
    },
    {
        dexnum: 105,
        name: "Marowak",
        variants: [
            { name: "marowak", types: ["ground", null] },
            { name: "marowak-alolan", types: ["fire", "ghost"] }
        ]
    },
    {
        dexnum: 77,
        name: "Ponyta",
        variants: [
            { name: "ponyta", types: ["fire", null] },
            { name: "ponyta-galarian", types: ["psychic", null] }
        ]
    },
    {
        dexnum: 78,
        name: "Rapidash",
        variants: [
            { name: "rapidash", types: ["fire", null] },
            { name: "rapidash-galarian", types: ["psychic", "fairy"] }
        ]
    },
    {
        dexnum: 110,
        name: "Weezing",
        variants: [
            { name: "weezing", types: ["poison", null] },
            { name: "weezing-galarian", types: ["poison", "fairy"] }
        ]
    },
    {
        dexnum: 222,
        name: "Corsola",
        variants: [
            { name: "corsola", types: ["water", "rock"] },
            { name: "corsola-galarian", types: ["ghost", null] }
        ]
    },
    {
        dexnum: 555,
        name: "Darmanitan",
        variants: [
            { name: "darmanitan-standard", types: ["fire", null]  },
            { name: "darmanitan-galarian-standard", types: ["ice", null]   },
            { name: "darmanitan-zen", types: ["fire", "psychic"] },
            { name: "darmanitan-galarian-zen", types: ["ice", "fire"] }
        ]
    },
    {
        dexnum: 264,
        name: "Linoone",
        variants: [
            { name: "linoone", types: ["normal", null] },
            { name: "linoone-galarian", types: ["dark", "normal"] }
        ]
    },
    {
        dexnum: 554,
        name: "Darumaka",
        variants: [
            { name: "darumaka", types: ["fire", null] },
            { name: "darumaka-galarian", types: ["ice", null] }
        ]
    },
    {
        dexnum: 562,
        name: "Yamask",
        variants: [
            { name: "yamask", types: ["ghost", null] },
            { name: "yamask-galarian", types: ["ground", "ghost"] }
        ]
    },
    {
        dexnum: 618,
        name: "Stunfisk",
        variants: [
            { name: "stunfisk", types: ["ground", "electric"] },
            { name: "stunfisk-galarian", types: ["ground", "steel"] }
        ]
    },
    {
        dexnum: 628,
        name: "Braviary",
        variants: [
            { name: "braviary", types: ["normal", "flying"] },
            { name: "braviary-hisuian", types: ["psychic", "flying"] }
        ]
    },
    {
        dexnum: 925,
        name: "Maushold",
        variants: [
            { rarespecies: [
                 { name: "maushold-family4" },
                 { name: "maushold-family3", rare: true },
             ]}
        ]
    },
    {
        dexnum: 982,
        name: "Dudunsparce",
        variants: [
            { rarespecies: [
                 { name: "dudunsparce-two-segment" },
                 { name: "dudunsparce-three-segment", rare: true },
             ]}
        ]
    },
    {
        dexnum: 801,
        name: "Magearna",
        variants: [
            { rarespecies: [
                 { name: "magearna" },
                 { name: "magearna-original", rare: true },
             ]}
        ]
    },
    {
        dexnum: 746,
        name: "Wishiwashi",
        variants: [
            { rarespecies: [
                 { name: "wishiwashi-solo" },
                 { name: "wishiwashi-school", rare: true },
             ]}
        ]
    }
];

export const getPokemonVariants = (dexnum) => {
    for (let pokemon of PokemonVariants) {
        if (pokemon.dexnum === dexnum) {
            return pokemon.variants;
        }
    }
    return null;
}

export const getRandomVariant = (variants) => {
    const variant = variants[Math.floor(Math.random() * variants.length)];
    if (variant?.megaevolution === undefined && variant?.rarespecies === undefined) {
        return variant;
    } else if (variant?.megaevolution !== undefined) {
        const randomVal = Math.floor(Math.random() * 100);
        if (randomVal < 97) {
            return variant.megaevolution[0];
        } else {
            return variant.megaevolution[Math.floor(Math.random() * (variant.megaevolution.length - 1)) + 1];
        }
    } else {
        const randomVal = Math.floor(Math.random() * 100);
        if (randomVal < 90) {
            return variant.rarespecies[Math.floor(Math.random() * (variant.rarespecies.length - 1))];
        } else {
            return variant.rarespecies[variant.rarespecies.length - 1];
        }
    }
          
    
}