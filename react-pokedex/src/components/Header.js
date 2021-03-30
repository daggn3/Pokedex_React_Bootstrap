import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Form, Button } from 'react-bootstrap';
import pokeball from "./pokeball.png"

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={pokeball}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Pokédex
                        </Navbar.Brand>
                    </LinkContainer>
                    
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;