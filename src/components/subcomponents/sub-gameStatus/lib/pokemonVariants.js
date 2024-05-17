const PokemonVariants = [
    {
        dexnum: 487,
        name: "Giratina",
        variants: [
            { name: "giratina-altered" },
            { name: "giratina-origin" }
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
            { name: "necrozma-dawn-wings", types: ["psychic", "ghost"] },
            { name: "necrozma-dusk-mane", types: ["psychic", "steel"] },
        ]
    },

    {
        dexnum: 483,
        name: "Dialga",
        variants: [
            { name: "dialga" },
            { name: "dialga-origin" }
        ]
    },
    {
        dexnum: 484,
        name: "Palkia",
        variants: [
            { name: "palkia" },
            { name: "palkia-origin" }
        ]
    },
    {
        dexnum: 888,
        name: "Zacian",
        variants: [
            { name: "zacian-hero" },
            { name: "zacian-crowned",
                types:["fairy", "steel"]
            }
        ]
    },
    {
        dexnum: 889,
        name: "Zamazenta",
        variants: [
            { name: "zamazenta-hero" },
            { name: "zamazenta-crowned",
                types:["fighting", "steel"]
            }
        ]
    },
    {
        dexnum: 479,
        name: "Rotom",
        variants: [
            { name: "rotom-normal", types: ["electric", "ghost"] },
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
            { name: "shaymin-land", types: ["grass", null] },
            { name: "shaymin-sky", types: ["grass", "flying"] }
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
            { name: "castform-normal", types: ["normal"] },
            { name: "castform-sunny", types: ["fire"] },
            { name: "castform-rainy", types: ["water"] },
            { name: "castform-snowy", types: ["ice"] }
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
            { name: "keldeo-ordinary", types: ["water", "fighting"] },
            { name: "keldeo-resolute", types: ["water", "fighting"] }
        ]
    },
    {
        dexnum: 646,
        name: "Kyurem",
        variants: [
            { name: "kyurem" },
            { name: "kyurem-black" },
            { name: "kyurem-white" }
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
            { name: "meloetta-aria", types: ["normal", "psychic"] },
            { name: "meloetta-pirouette", types: ["normal", "fighting"] }
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
            { name: "vivillon-poke-ball", types: ["bug", "flying"] },
            { name: "vivillon-polar", types: ["bug", "flying"] },
            { name: "vivillon-river", types: ["bug", "flying"] },
            { name: "vivillon-sandstorm", types: ["bug", "flying"] },
            { name: "vivillon-savanna", types: ["bug", "flying"] },
            { name: "vivillon-sun", types: ["bug", "flying"] },
            { name: "vivillon-tundra", types: ["bug", "flying"] },
            { name: "vivillon-fancy", types: ["bug", "flying"] }
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
        dexnum: 25,
        name: "Pikachu",
        variants: [
            { name: "pikachu" },
            { name: "pikachu-world-cup" },
        ]
    },
    {
        dexnum: 720,
        name: "Hoopa",
        variants: [
            { name: "hoopa-confined", types: ["psychic", "ghost"] },
            { name: "hoopa-unbound", types: ["psychic", "dark"] },
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
            { name: "calyrex" },
            { name: "calyrex-ice-rider", types: ["psychic", "ice"] },
            { name: "calyrex-shadow-rider", types: ["psychic", "ghost"] },
        ]
    },

    {
        dexnum: 1024,
        name:"Terapagos",
        variants: [
            { name:"terapagos-normal" },
            { name:"terapagos-terastal" }
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
            { name: "persian-alola", types: ["dark", null] }
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
            { name: "floette-white", types: ["fairy", null] },
            { name: "floette-eternal", types: ["fairy", null] }
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

    // A partir de aquí, todos son megas
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
        dexnum: 382,
        name: "Groudon",
        variants: [
            { megaevolution: [
                { name: "groudon", mega: false },
                { name: "groudon-primal", types:["ground", "fire"] ,mega: true }
            ] }
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
    if (variant?.megaevolution === undefined) {
        return variant;
    } else {
        const randomVal = Math.floor(Math.random() * 100);
        if (randomVal < 99) {
            return variant.megaevolution[0];
        } else {
            return variant.megaevolution[Math.floor(Math.random() * (variant.megaevolution.length - 1)) + 1]
        }
    }

    
}