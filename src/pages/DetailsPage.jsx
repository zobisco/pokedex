import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import getPokemonByName from "../api/getPokemonByName";
import Header from "../components/Header";

export default function DetailsPage() {
	const { name } = useParams();

	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		getPokemonByName(name).then(setPokemon);
	}, []);

	console.log(pokemon);

	if (Object.keys(pokemon).length === 0) return;

	return (
		<>
			<Header title={pokemon.name} />
			<img src={pokemon.sprites.front_default} alt={pokemon.name} />
			<h2>Types</h2>
			<ul>
				{pokemon.types.map((el) => (
					<li>{el.type.name}</li>
				))}
			</ul>
			<h2>Stats</h2>
			<ul>
				{pokemon.stats.map((el) => (
					<li>
						{el.stat.name} = {el.base_stat}
					</li>
				))}
			</ul>
		</>
	);
}
