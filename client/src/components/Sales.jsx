import React from 'react';

const Sales = (props) => {

  var imgStyle = {
    width:"100%",
    minWidth:"360",
    paddingTop:'10px'
  }

  return (
    <div>
      <a href='http://www.prolongstore.com/eStore/default.aspx'>
        <img src="./logos/holidayspecial2compressed.jpg" alt="Prolong Sale" style={imgStyle}/>
      </a>
    </div>
  );
};

export default Sales;
