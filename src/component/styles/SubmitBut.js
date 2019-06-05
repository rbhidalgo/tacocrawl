import styled from "styled-components";

const SubmitBut = styled.button`
  width: 25%;
  text-align: center;
  border:none;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  background: white;
  margin: 10px;

  a:link, a:visited {
    background-color: #FFED03;
    color: black;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;

  }
  
  a:hover, a:active {
    background-color: #FF009D;
    color: white;
    border-bottom: 2px solid yellow;

  }
`;

export default SubmitBut;