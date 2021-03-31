import React from 'react';
import { Search } from 'react-bootstrap-icons';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {

  const BarStyling = {marginTop: "10px", fontSize: "16px", fontWeight: "300", color: "#333", lineHeight: "1.625", backgroundColor: "#fff", borderColor: "#eee", border: "none", borderBottom: "1px solid #9e9e9e", boxShadow: "none", boxSizing: "content-box", borderRadius: "0", backgroundImage: "url( //addsearch.com/logo/AAAAAA-20.png )", backgroundRepeat: "no-repeat", backgroundPosition: "95% 50%", width: "35%", padding: "5px", cursor: "auto", outline: "none" };
  return (
      <div>
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