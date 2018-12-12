import React from 'react';




function LineCard() {
 
  var listStyle = {
    listStyleType:"none",
    maxWidth:"720px",
    width:'80%',
    display:'block',
    margin:'0 auto'
  }


  var imgStyle = {
    width:"100%",
    minWidth:"360",
    paddingTop:'10px'
  }

  return (
    <div>
      <ul style={listStyle}>
        <li>
          <a href='http://www.gwlinc.com/eStore/Category/11_1/GoldenWest.aspx'>
          <img src="./logos/goldenwest720x180.png" alt="GoldenWest logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/Category/33_1/Prolong.aspx'>
          <img src="./logos/prolong720x180.png" alt="Prolong logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/Category/2_1/Dow_Chemical.aspx'>
          <img src="./logos/Dow720x180.png" alt="Dow logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/search.aspx?Keyword=chevron'>
          <img src="./logos/chevron720x180.jpg" alt="Chevron logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/Category/8_1/Hangsterfer_s.aspx'>
          <img src="./logos/hangsterfers720x180.png" alt="Hangsterfer's logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/Category/38_1/Jet_Lube.aspx'>
          <img src="./logos/jetlube720x180.png" alt="Jet-Lube logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/Category/10_1/LPS.aspx'>
          <img src="./logos/lps720x180.png" alt="LPS logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/Category/30_1/Mobil.aspx'>
          <img src="./logos/mobil logo720x180.png" alt="Mobil logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/ProductInfo/MSCSIKAFLEX-70.aspx'>
          <img src="./logos/sikaflex720x180.png" alt="Sikaflex logo" style={imgStyle}/>
          </a>
        </li>
        <li>
          <a href='http://www.gwlinc.com/eStore/Category/9_1/Summit.aspx'>
          <img src="./logos/kluber720x180.png" alt="Kluber logo" style={imgStyle}/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LineCard;
