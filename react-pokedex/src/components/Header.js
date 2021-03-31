import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Container, Form, Button } from 'react-bootstrap';
import pokeball from "./pokeball.png"
import { useHistory } from 'react-router-dom';


const Header = () => {

    let history = useHistory();

    const handleClick = () => {
        history.push('/Pokedex_React_Bootstrap')
      }


    return (
        <header>
            <div class="pull-left" >
            <Button  style = {{marginTop:"10px" }}variant="info" onClick={handleClick}>Return Home</Button>{' '}
            </div>
        </header>
    )
}

export default Header;