import styled from "styled-components";

const SubmitBut = styled.button`
  text-align: center;
  border:none;
  font-family: hwt-republic-gothic-solid, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  margin: 10px;
  

  a:link, a:visited {
    background-color: #FF009D;
    color: #ffffff;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
  }
  
  a:hover, a:active {
    background-color: #049DD8;
    color: white;
    border-bottom: 2px solid #FFED03;

  }
`;

export default SubmitBut;