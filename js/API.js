import { mostrarPokemon } from "./main.js";

const API = `https://pokeapi.co/api/v2/pokemon`;

let todosLosPokemones = [];

export const cargarPokemones = async (filtro = "verTodos")=>{

    if(todosLosPokemones.length > 0) return todosLosPokemones;

    for (let i = 1; i <= 200; i++) {
        try {
            const response = await fetch(`${API}/${i}`);
            const data = await response.json();
            todosLosPokemones.push(data);
            mostrarPokemon(data);
        } catch (error) {
        console.log("Ocurrio un error al cargar los pokemones: "+error);
        }

    }
    return todosLosPokemones;
}

export const filtrarPokemon = (filtro)=>{
    if(filtro === "verTodos"){
            todosLosPokemones.forEach(p =>mostrarPokemon(p));
        }else{
            const filtrados = todosLosPokemones.filter(p=>
                p.types.some(t=>t.type.name === filtro)
            );
            filtrados.forEach(p=>mostrarPokemon(p));
                
            }
}