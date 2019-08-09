import styled from "styled-components";

const ParentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: space-between;
margin-top: 15vh;

.p-main {
    font-size: 20px;
    margin: 3vh auto;
    padding: 2vw;
    color: #049DD8;
    width: 75%;
    text-align: center;
}

.spanHighlight {
    background-color: #FFED03;
}

.home-image img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        border-radius: 15px;
}

.button-container {
    width: 100vw;
    height: 100%;
    position: relative;
}

.bottom-text {
    color: #FF009D;
    font-size: 72px;
    font-family: hwt-republic-gothic-outline,sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: justify;
    overflow: hidden;
    text-overflow: clip;
    margin: 0 auto;
    z-index: -1;
    text-align: center;
}

.button-but {
    z-index: 90;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.crawl-btn {
    align-content: center;
    align-items: center;
    margin: 0 auto;
}

.marquee {
    overflow: hidden;
    font-size: 8vw;
}

.marquee p {
    animation:  moveLeft 250s infinite;
    display: block;
    white-space:  nowrap;
}

@keyframes moveLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-3000vw);
    }
  }

`;

export default ParentContainer;

