import styled from "styled-components";

const ParentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: space-between;
margin-top: 10vh;

.p-main {
    font-size: 3vh;
    margin: 2vh auto;
    padding: 1vw;
    color: #049DD8;
    width: 75%;
    text-align: center;
}

.spanHighlight {
    background-color: #FFED03;
}

.home-image {
    height: 48vh;
    margin: 0 auto;
}

.home-image img {
    height: 100%;
}

.button-container {
    width: 100vw;
    height: 100%;
    position: relative;
    padding: 2vh 0;
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
    animation:  moveLeft 350s infinite;
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

.intro-text {
    background-color: #FFFCF7;
    height: 20vh;
}

.intro-text > h1 {
    font-family: giulia, sans-serif;
    font-size: 48px;
    text-align: center;
    color: #049DD8;
    padding: 1vh 1vw;
}

@media (max-width: 769px) {
    .home-image {
        height: 35vh;
        margin: 0 auto;
    }
    
    .home-image img {
        height: 100%;
    }

    .intro-text {
        height: 35vh;
    }
    
  }

`;

export default ParentContainer;
