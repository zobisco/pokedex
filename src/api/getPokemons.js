import axios from "axios";

export default function getPokemons() {
	return axios
		.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
		.then((res) => {
			console.log(res.data.results);
			return res.data.results;
		});
}
