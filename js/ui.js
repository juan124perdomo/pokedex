export const mostrarPokemon = (data,contenedor)=>{

    let tipos = data.types.map((type) =>  `<p class="type ${type.type.name}">${type.type.name}</p>`).join("")
    
    let dataId = data.id.toString().padStart(3, "0");
    

    const pokemon  = document.createElement("div");
    pokemon.classList.add("pokemon");
    pokemon.innerHTML=`
                    <p class="pokemonIdBack">#${dataId}</p>
                    <div class="pokemonImg"><img src="${data.sprites.other["official-artwork"].front_default}"></div>
                <div class="pokemonInfo">
                    <div class="nombreContainer">
                        <p class="pokemonId">#${dataId}</p>
                        <h2 class="pokemonName">${data.name}</h2>
                    </div>
                    <div class="pokemonType">
                        ${tipos}
                    </div>
                    <div class="pokemonStats">
                        <p class="stats">${data.height}M</p>
                        <p class="stats">${data.weight}KG</p>
                    </div>

                </div>
            
    
    `;    
    contenedor.appendChild(pokemon);
}