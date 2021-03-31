import React from 'react';
import { Search } from 'react-bootstrap-icons';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {

  const BarStyling = {marginTop: "20px", width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
      <div>
      <Search size={20} style= {{marginRight: "5px"}}/>
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