import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

// Components
import Pokemon from '../components/Pokemon';
import Loading from '../components/Loading';
import SearchBar from "../components/SearchBar"


const Gen1page = () => {

    const [pokemon, setPokemon] = useState([]);
    const [input, setInput] = useState('');
    const [pokemonListDefault, setPokemonListDefault] = useState();
    const [loading, setLoading] = useState(true)

    const getPokemon = async () => {
        let pokemonArray = [];
        for(let i = 152; i <= 251; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        
        setPokemonListDefault(pokemonArray)
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const updateInput = async (input) => {
        const filtered = pokemonListDefault.filter(p => {
         return p.data.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setPokemon(filtered);
     }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <>
         <SearchBar
              
              input={input} 
              onChange={updateInput}
        />
        {loading ? (
            <Loading/>
        ) : (
            <div>
            <Row>
                {pokemon.map( p =>(
                    <Col  key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Pokemon pokemon={p.data}/>
                    </Col>
                ))}
            </Row>
            </div>
        )}
        </>
    )
}

export default Gen1page