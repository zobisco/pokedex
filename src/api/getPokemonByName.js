import axios from "axios";

export default function getPokemonByName(pokemonName) {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
	return axios.get(url).then((res) => {
		return res.data;
	});
}
