import React, { useState, useEffect } from 'react';
import "./PokemonItens.css";

const PokemonItens = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        function getItens() {
            try {
                const storedPokemons = localStorage.getItem('pokemons');

                if (storedPokemons) {
                    const parsedPokemons = JSON.parse(storedPokemons);
                    setPokemons(parsedPokemons); 
                }
            } catch (error) {
                console.error("Erro ao ler os pokémons do localStorage:", error);
                
                setPokemons([]);
            }
        }

        getItens();
    }, []); 
    
    return (
        <div className="pokemon-list-container">
            <br />
            {pokemons.length === 0 ? (
                <p>Nenhum Pokémon cadastrado ainda.</p>
            ) : (
                pokemons.map((pokemon, index) => (
                    <div className="pokemon-itens" key={index}> 
                    <br />
                        <div className="pokemonvalues">
                            <div className='value'>
                                <p><strong>Nome:</strong></p>
                                <p>{pokemon.nome}</p>
                            </div>
                            <div className='value'>
                                <p><strong>Tipo:</strong></p>
                                <p>{pokemon.tipo}</p>
                            </div>
                            <div className='value'>
                                <p><strong>Poder:</strong></p>
                                <p>{pokemon.poder}</p>
                            </div>
                        </div>
                        <div className='value , decripition' >
                            <p><strong>Descrição:</strong></p>
                            <p className="pokemon-description">{pokemon.descricao}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default PokemonItens;