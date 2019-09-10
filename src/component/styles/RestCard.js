import styled from "styled-components";

const RestCard = styled.div`
flex: 2;
color: #049DD8;
background-color: #FFFCF7;
padding: 30px;
margin-top: 10vh;
height: 100vh;
overflow-y: auto;

  a:link, a:visited {
    // background-color: #FFED03;
    // color: black;
    // padding: 14px 25px;
    // text-align: center;
    // text-decoration: none;
  }
  
  a:hover, a:active {
    background-color: #FF009D;
    color: white;
    border-bottom: 2px solid yellow;
  }

  .restImg {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .coverImage {
    background: lightgreen;
    height: 25vh;
    width: 20vh;
  }

  .cardContainer {
    display: flex;
    flex-direction: row;
    margin: 10px auto;
  }

  .restInfo {
    text-align: center;
  }
`;

export default RestCard;