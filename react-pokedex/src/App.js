import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/Pokemonpage';

// Components

import Gen1page from './pages/Gen1page';
import Gen2page from "./pages/Gen2page"
import Gen3page from "./pages/Gen3page"

const App = () => {
  return (
    <Router>
      <Container>
        <Route exact path='/Pokedex_React_Bootstrap' component={Homepage} />
        <Route exact path='/gen1' component={Gen1page} />
        <Route exact path='/gen2' component={Gen2page} />
        <Route exact path='/gen3' component={Gen3page} />
        <Route path='/pokemon/:id' component={PokemonPage}/>
      </Container>
    </Router>
  );
}

export default App;