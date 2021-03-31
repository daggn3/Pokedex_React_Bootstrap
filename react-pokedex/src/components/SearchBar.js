import React from 'react';
import { Search } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import { Nav, Container, Form, Button } from 'react-bootstrap';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {

  let history = useHistory();

  const handleClick = () => {
      history.push('/Pokedex_React_Bootstrap')
    }

    


  const BarStyling = { marginLeft: "auto", marginTop: "10px", fontSize: "20px", fontWeight: "300", color: "#333", lineHeight: "1.625", backgroundColor: "#fff", borderColor: "#eee", border: "none", borderBottom: "1px solid #9e9e9e", boxShadow: "none", boxSizing: "content-box", borderRadius: "0", backgroundImage: "url( //addsearch.com/logo/AAAAAA-20.png )", backgroundRepeat: "no-repeat", backgroundPosition: "95% 50%", width: "33%", padding: "5px", cursor: "auto", outline: "none" };
  return (
    
      <div>
          <Button style = {{marginBottom: "5px", backgroundColor:"#09bdb7", border:"none"  }} onClick={handleClick}>Return Home</Button>{' '}
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Pokemon"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    </div>
  );
}

export default SearchBar