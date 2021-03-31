import React from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { HouseFill } from 'react-bootstrap-icons';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {

  let history = useHistory();

  const handleClick = () => {
      history.push('/Pokedex_React_Bootstrap')
    }

    


  const BarStyling = {marginTop: "10px", fontSize: "16px", fontWeight: "300", lineHeight: "1.625", backgroundColor: "#eee", backgroundImage: "url(//addsearch.com/logo/AAAAAA-20.png)", backgroundRepeat: "no-repeat", backgroundPosition: "95% 50%", border: "0px", borderRadius: "32px", width: "50%", padding: "15px", cursor:"auto", outline: "none"};
  return (
    
      <div>
          <Button style = {{ marginBottom: "5px", backgroundColor:"#09bdb7", border:"none"  }} onClick={handleClick}> < HouseFill size={30} /></Button>{' '}
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