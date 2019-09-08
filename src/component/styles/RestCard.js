import styled from "styled-components";

const RestCard = styled.div`
color: #049DD8;
background-color: #FFFCF7;
padding: 30px;
height: 225px;


  a:link, a:visited {
    background-color: #FFED03;
    color: black;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
  }
  
  a:hover, a:active {
    background-color: #FF009D;
    color: white;
    border-bottom: 2px solid yellow;
  }

  img {
    vertical-align: middle;
    height: 150px;
  }
`;

export default RestCard;