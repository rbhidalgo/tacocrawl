import styled from "styled-components";

const RestCard = styled.div`
flex: 2;
color: #049DD8;
background-color: #FFFCF7;
padding: 30px;
margin-top: 10vh;
height: 100vh;
overflow-y: auto;

.restTitle {
  color: #049DD8;
  }
  

  .restImg {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .coverImage {
    background: lightgreen;
    height: 25vh;
    width: 40vh;
  }

  .cardContainer {
    display: flex;
    flex-direction: row;
    margin: 10px auto;
  }

  .restInfo {
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .yellowLine {
    border-bottom: 4px solid yellow;
  }

  .ratingContainer > img {
    height: 2vh;
}

.mapPin {
  height: 5vh;
}

.restAddInfo {
  display: flex;
  margin: 2vh 0;
}

.ratingContainer {
  margin: 1vh 0;
}

`;

export default RestCard;