import styled from "styled-components";

const Menu = styled.div`
color: #FFFFFF;
background-color: #FF009D;
padding: 30px;
height: 225px;


.selected {
    color: white;
  }

  a {
    margin: 20px 10px;
  }

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
  }
`;

export default Menu;