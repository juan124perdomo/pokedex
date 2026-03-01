import { cargarPokemones, filtrarPokemon, buscarPokemon } from "./API.js";
import { mostrarPokemon} from "./ui.js"

const pokemonList = document.getElementById("pokemonList");
const btn = document.querySelectorAll(".btn");
const inputSearch = document.getElementById("navSearch");

const iniciar = async ()=>{
    pokemonList.innerHTML = "<p>Cargando...</p>";
    const pokemones = await cargarPokemones();
    pokemonList.innerHTML = "";
    pokemones.forEach(p => mostrarPokemon(p, pokemonList));
}

btn.forEach(boton =>{
    boton.addEventListener("click", (e)=>{
        const botonId = e.currentTarget.id;
        pokemonList.innerHTML = "";
        filtrarPokemon(botonId);
    });
});

inputSearch.addEventListener("input", (e)=>{
    const texto = e.target.value.trim();
    pokemonList.innerHTML = "";
    const resultados = buscarPokemon(texto);
    resultados.forEach(p => mostrarPokemon(p, pokemonList));
})

iniciar();