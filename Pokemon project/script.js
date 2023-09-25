// script.js
document.addEventListener("DOMContentLoaded", function () {
    const pokemonDetails = document.getElementById("pokemon-details");

 

    // Dados dos Pokémons
    const pokemonData = {
        bulbasaur: "Bulbasaur é um Pokémon do tipo Planta/Venenoso.",
        ivysaur: "Ivysaur é a evolução de Bulbasaur.",
        venusaur: "Venusaur é a forma final da evolução de Bulbasaur.",
        charmander: "Charmander é um Pokémon do tipo Fogo.",
        charmeleon: "Charmeleon é a evolução de Charmander.",
        charizard: "Charizard é a forma final da evolução de Charmander.",
        squirtle: "Squirtle é um Pokémon do tipo Água.",
        wartortle: "Wartortle é a evolução de Squirtle.",
        blastoise: "Blastoise é a forma final da evolução de Squirtle."
    };

 

    // Função para exibir informações de um Pokémon
    function showPokemonInfo(pokemonId) {
        const info = pokemonData[pokemonId] || "Informações não disponíveis.";
        pokemonDetails.textContent = info;
    }

 

    // Adiciona um ouvinte de eventos para cada Pokémon da lista
    const pokemonList = document.querySelectorAll(".pokemon-list li");
    pokemonList.forEach((pokemon) => {
        pokemon.addEventListener("click", function () {
            showPokemonInfo(pokemon.id);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const pokemonDetails = document.getElementById("pokemon-details");

 

    // Dados dos Pokémons
    const pokemonData = {
        bulbasaur: {
            info: "Bulbasaur é um Pokémon do tipo Planta/Venenoso.",
            eficazContra: "Fogo, Água",
            fracoContra: "Voador, Psíquico"
        },
        ivysaur: {
            info: "Ivysaur é a evolução de Bulbasaur.",
            eficazContra: "Fogo, Água",
            fracoContra: "Voador, Psíquico"
        },
        venusaur: {
            info: "Venusaur é a forma final da evolução de Bulbasaur.",
            eficazContra: "Fogo, Água",
            fracoContra: "Voador, Psíquico"
        },
        charmander: {
            info: "Charmander é um Pokémon do tipo Fogo.",
            eficazContra: "Planta, Gelo, Inseto",
            fracoContra: "Água, Rocha, Elétrico"
        },
        charmeleon: {
            info: "Charmeleon é a evolução de Charmander.",
            eficazContra: "Planta, Gelo, Inseto",
            fracoContra: "Água, Rocha, Elétrico"
        },
        charizard: {
            info: "Charizard é a forma final da evolução de Charmander.",
            eficazContra: "Planta, Gelo, Inseto",
            fracoContra: "Água, Rocha, Elétrico"
        },
        squirtle: {
            info: "Squirtle é um Pokémon do tipo Água.",
            eficazContra: "Fogo, Rocha, Terrestre",
            fracoContra: "Planta, Elétrico"
        },
        wartortle: {
            info: "Wartortle é a evolução de Squirtle.",
            eficazContra: "Fogo, Rocha, Terrestre",
            fracoContra: "Planta, Elétrico"
        },
        blastoise: {
            info: "Blastoise é a forma final da evolução de Squirtle.",
            eficazContra: "Fogo, Rocha, Terrestre",
            fracoContra: "Planta, Elétrico"
        }
    };

 

    // Função para exibir informações de um Pokémon
    function showPokemonInfo(pokemonId) {
        const data = pokemonData[pokemonId];
        if (data) {
            const info = data.info;
            const eficazContra = `Eficaz contra: ${data.eficazContra}`;
            const fracoContra = `Fraco contra: ${data.fracoContra}`;
            pokemonDetails.textContent = `${info} ${eficazContra} ${fracoContra}`;
        } else {
            pokemonDetails.textContent = "Informações não disponíveis.";
        }
    }

 

    // Adiciona um ouvinte de eventos para cada Pokémon da lista
    const pokemonList = document.querySelectorAll(".pokemon-list li");
    pokemonList.forEach((pokemon) => {
        pokemon.addEventListener("click", function () {
            showPokemonInfo(pokemon.id);
        });
    });
});