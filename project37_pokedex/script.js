const poke_container = document.getElementById('poke-container')
const pokemon_count = 300
const colors = {
    fire: '#ff9999',
    grass: '#DEFDE0',
	electric: '#eee600',
	water: '#DEF3FD',
	ground: '#d2691e',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#87cefa',
	fighting: '#E6E0D4',
	normal: '#fff',
    steel: '#808080',
    ice: '#e0ffff',
    ghost: '#2f4f4f',
    dark: '#1b1b1b'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const displayname = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    const displayid = pokemon.id.toString().padStart(3, '0')
    const alltypes = pokemon.types.map(type => type.type.name)
    const type = alltypes.join('/')
    // const type = main_types.find(type => alltypes.indexOf(type) > -1)

    const color = alltypes.map((t) => colors[t])
    console.log(color)

    const pokemonElem = document.createElement('div')
    pokemonElem.classList.add('pokemon')
    // pokemonElem.style.backgroundColor = color
    pokemonElem.style.background = `linear-gradient(to right, ${color[0]}, ${color[color.length - 1]})`
    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
        </div>
        <div class="info">
            <div class="number">#${displayid}</div>
            <h3 class="name">${displayname}</h3>
            <div class="type">Type: <span>${type}</span></div>
        </div>
    `

    pokemonElem.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonElem)
}

fetchPokemons()