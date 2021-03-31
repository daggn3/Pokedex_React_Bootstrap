import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Header';
import { Nav, Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



//await Promise.all(images.map(e => axios.get(e)))
const PokemonPage = ({ match }) => {

    const [pokemonInfo, setPokemonInfo] = useState();
    const [loading, setLoading] = useState(true);

    const id = match.params.id;

    const getPokemon = async (id) => {
        const info = await getPokemonData(id);
        setPokemonInfo(info.data);
        console.log(info.data)
        setLoading(false);
    }

    let history = useHistory();

    const handleClick = () => {
        history.push('/Pokedex_React_Bootstrap')
      }
  

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <>
        <Button style = {{marginTop: "10px", backgroundColor:"#09bdb7", border:"none"  }} onClick={handleClick}>Return Home</Button>{' '}
            {loading ? (
                <Loading/>
            ) : (
                <div>
                
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Link to={`/pokemon/${pokemonInfo.id}`}>
                                <Card.Img style={{ width: '15rem' }} src={pokemonInfo.sprites.front_default} variant='top'/>
                            </Link>
                            <Card.Body className={`${pokemonInfo.types[0].type.name} rounded text-white`}>
                                <Link to={`/pokemon/${pokemonInfo.name}`} className='link-name'>
                                    <Card.Title as='div'>
                                        <strong>#{pokemonInfo.id} {pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1)}</strong>
                                    </Card.Title>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        {pokemonInfo.types.map(t => (
                                            <Col key={t.type.name}>
                                                <div className={`${t.type.name} rounded px-4 py-1`} style={{ color: 'white'  }}>
                                                    {t.type.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card.Img style={{ width: '15rem' }} src={pokemonInfo.sprites.front_default}/>
                                            <Card.Text className =" mt-2" style={{ fontWeight:"bold" }}>Normal Form</Card.Text>
                                
                                        </Col>
                                        <Col>
                                            
                                            <Card.Img style={{ width: '15rem' }} src={pokemonInfo.sprites.front_shiny}/>
                                            <Card.Text style={{ fontWeight:"bold" }}>Shiny Form</Card.Text>
                    
                                        </Col>
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className='px-4 py-1 rounded bg-primary text-white' style={{ border: 'none' }}>Abilities</div>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        {pokemonInfo.abilities.map(a => (
                                            <Col key={a.ability.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <div className={`rounded px-4 py-1`}>
                                                    {a.ability.name.toUpperCase()}
                                                </div>
                                            </Col>
                                            
                                        ))}
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className='px-4 py-1 rounded bg-danger text-white' style={{ border: 'none'  }}>Stats</div>
                                        </Col>
                                        <Row className='text-center'>
                                        {pokemonInfo.stats.map(a => (
                                            <Col key={a.stat.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <div className={`rounded px-4 py-1 bg-green`}>
                                                    {a.stat.name.toUpperCase()}
                                                    : {a.base_stat}
                                                </div>
                                            </Col>
                                            
                                        ))}
                                    </Row>
                                    
                                    </Row>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
            )}
        </>
    )
}

export default PokemonPage;