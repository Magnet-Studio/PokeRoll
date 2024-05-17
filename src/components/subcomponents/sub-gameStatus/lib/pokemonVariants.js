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
            { name: "necrozma" },
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
            { name: "vivillon-highplains", types: ["bug", "flying"] },
            { name: "vivillon-icy-snow", types: ["bug", "flying"] },
            { name: "vivillon-jungle", types: ["bug", "flying"] },
            { name: "vivillon-marine", types: ["bug", "flying"] },
            { name: "vivillon-modern", types: ["bug", "flying"] },
            { name: "vivillon-monsoon", types: ["bug", "flying"] },
            { name: "vivillon-ocean", types: ["bug", "flying"] },
            { name: "vivillon-pokeball", types: ["bug", "flying"] },
            { name: "vivillon-polar", types: ["bug", "flying"] },
            { name: "vivillon-river", types: ["bug", "flying"] },
            { name: "vivillon-sandstorm", types: ["bug", "flying"] },
            { name: "vivillon-savanna", types: ["bug", "flying"] },
            { name: "vivillon-sun", types: ["bug", "flying"] },
            { name: "vivillon-tundra", types: ["bug", "flying"] }
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
        dexnum: 52,
        name: "Meowth",
        variants: [
            { name: "meowth", types: ["normal", null] },
            { name: "meowth-alolan", types: ["dark", null] },
            { name: "meowth-galarian", types: ["steel", null] }
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
    return variants[Math.floor(Math.random() * variants.length)];
}