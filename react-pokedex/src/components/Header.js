import React from 'react';
import { Button } from 'react-bootstrap';

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