import { mostrarPokemon } from "./ui.js";

const API = `https://pokeapi.co/api/v2/pokemon?limit=300`;

let todosLosPokemones = [];

export const cargarPokemones = async ()=>{
    if(todosLosPokemones.length > 0) return todosLosPokemones;
    try {
        const response = await fetch(API);
        const data = await response.json();
        
        // Crear todas las promesas en paralelo (MUCHO más rápido)
        const pokemonesPromesas = data.results.map(pokemon => 
            fetch(pokemon.url).then(res => res.json())
        );
        
        const pokemonesCompletos = await Promise.all(pokemonesPromesas);
        todosLosPokemones = pokemonesCompletos;
        
        return todosLosPokemones;

    } catch (error) {
        console.log("Ocurrio un error al cargar los pokemones: "+error);
    }
}

export const filtrarPokemon = (filtro = "verTodos")=>{
    const pokemonList = document.getElementById("pokemonList");
    
    if(filtro === "verTodos"){
        todosLosPokemones.forEach(p => mostrarPokemon(p, pokemonList));
    } else {
        const filtrados = todosLosPokemones.filter(p=>
            p.types.some(t=>t.type.name === filtro)
        );
        filtrados.forEach(p=> mostrarPokemon(p, pokemonList));
    }
}

export const buscarPokemon = (texto = "")=>{
    const valor = texto.toLowerCase();
    
    const resultados = todosLosPokemones.filter(p=>
        p.name.toLowerCase().includes(valor)
    );
    
    return resultados;
}