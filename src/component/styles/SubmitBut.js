import styled from "styled-components";

const SubmitBut = styled.button`
  // width: 50vw;
  text-align: center;
  border:none;
  font-family: hwt-republic-gothic-solid, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  margin: 10px;
  

  a:link, a:visited {
    background-color: #FF009D;
    color: #ffffff;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;

  }
  
  a:hover, a:active {
    background-color: #FFED03;
    color: white;
    border-bottom: 2px solid yellow;

  }
`;

export default SubmitBut;