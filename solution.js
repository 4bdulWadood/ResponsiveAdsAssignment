const pokes = [
    {
        "name": "bulbasaur",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "ivysaur",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "venusaur",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "charmander",
        "types": [
            "fire"
        ]
    },
    {
        "name": "charmeleon",
        "types": [
            "fire"
        ]
    },
    {
        "name": "charizard",
        "types": [
            "fire",
            "flying"
        ]
    },
    {
        "name": "squirtle",
        "types": [
            "water"
        ]
    },
    {
        "name": "wartortle",
        "types": [
            "water"
        ]
    },
    {
        "name": "blastoise",
        "types": [
            "water"
        ]
    },
    {
        "name": "caterpie",
        "types": [
            "bug"
        ]
    },
    {
        "name": "metapod",
        "types": [
            "bug"
        ]
    },
    {
        "name": "butterfree",
        "types": [
            "bug",
            "flying"
        ]
    },
    {
        "name": "weedle",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "kakuna",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "beedrill",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "pidgey",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "pidgeotto",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "pidgeot",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "rattata",
        "types": [
            "normal"
        ]
    },
    {
        "name": "raticate",
        "types": [
            "normal"
        ]
    },
    {
        "name": "spearow",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "fearow",
        "types": [
            "normal",
            "flying"
        ]
    },
    {
        "name": "ekans",
        "types": [
            "poison"
        ]
    },
    {
        "name": "arbok",
        "types": [
            "poison"
        ]
    },
    {
        "name": "pikachu",
        "types": [
            "electric"
        ]
    },
    {
        "name": "raichu",
        "types": [
            "electric"
        ]
    },
    {
        "name": "sandshrew",
        "types": [
            "ground"
        ]
    },
    {
        "name": "sandslash",
        "types": [
            "ground"
        ]
    },
    {
        "name": "nidoran-f",
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidorina",
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidoqueen",
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "name": "nidoran-m",
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidorino",
        "types": [
            "poison"
        ]
    },
    {
        "name": "nidoking",
        "types": [
            "poison",
            "ground"
        ]
    },
    {
        "name": "clefairy",
        "types": [
            "fairy"
        ]
    },
    {
        "name": "clefable",
        "types": [
            "fairy"
        ]
    },
    {
        "name": "vulpix",
        "types": [
            "fire"
        ]
    },
    {
        "name": "ninetales",
        "types": [
            "fire"
        ]
    },
    {
        "name": "jigglypuff",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "name": "wigglytuff",
        "types": [
            "normal",
            "fairy"
        ]
    },
    {
        "name": "zubat",
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "name": "golbat",
        "types": [
            "poison",
            "flying"
        ]
    },
    {
        "name": "oddish",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "gloom",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "vileplume",
        "types": [
            "grass",
            "poison"
        ]
    },
    {
        "name": "paras",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "parasect",
        "types": [
            "bug",
            "grass"
        ]
    },
    {
        "name": "venonat",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "venomoth",
        "types": [
            "bug",
            "poison"
        ]
    },
    {
        "name": "diglett",
        "types": [
            "ground"
        ]
    }
]

// Problem 1: Filter by type
const type = "grass";
const answer1 = pokes.filter(poke => poke.types.includes(type)).map(poke => poke.name);

console.log(answer1)

/*
.some() returns true if even one iteration returns true,
.every() returns true only if all iterations returns true
*/

// Given types array
const types = ["bug", "poison"];

// Problem 2: Filter by types (AND / OR)
const answer2Or = pokes.filter(poke => types.some(type => poke.types.includes(type))).map(poke => poke.name);
const answer2And = pokes.filter(poke => types.every(type => poke.types.includes(type))).map(poke => poke.name);

// Output the results
console.log("Answer 2 (OR)", answer2Or);  // Pokémon names that satisfy AT LEAST ONE of the types
console.log("Answer 2 (AND)", answer2And);  // Pokémon names that satisfy ALL of the types