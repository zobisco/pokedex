import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import getPokemons from "../api/getPokemons.js";
import Button from "../components/Button";

export default function HomePage() {
	const [pokemonsList, setPokemonsList] = useState([]);
	const navigate = useNavigate();
	const [selectedPokemon, setSelectedPokemon] = useState("");

	useEffect(() => {
		getPokemons().then((res) => {
			setPokemonsList(res);
		});
	}, []);

	const handleSelect = (e) => {
		setSelectedPokemon(e.target.value);
	};

	const handleSubmit = () => {
		if (selectedPokemon === "") return;

		navigate(`/pokemon/${selectedPokemon}`);
	};

	return (
		<div className="App">
			<Header title={"Pokedex"} />

			<select onChange={handleSelect}>
				<option selected disabled>
					Select a Pokemon
				</option>
				{pokemonsList.map((pokemon, pokemonKey) => {
					return (
						<option key={pokemonKey} value={pokemon.name}>
							{pokemon.name}
						</option>
					);
				})}
			</select>

			<Button content={"Details"} handlingFunction={handleSubmit} />
		</div>
	);
}
