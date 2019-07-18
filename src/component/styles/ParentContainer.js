import styled from "styled-components";

const ParentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: space-between;
margin-top: 125px;

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
    height: 15vh;
}

.bottom-text {
    color: #FF009D;
    font-size: 20px;
    font-family: hwt-republic-gothic-outline, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: justify;  
    overflow: hidden;
    text-overflow: clip;  
    position: absolute;
    margin: 0 auto;
    height: 15vh;
    width: 100%;
}

.button-but {
    display: flex;
    height: 100%;
    z-index: 90;}

.crawl-btn {
    align-content: center;
    align-items: center;
    margin: 0 auto;
}

`;

export default ParentContainer;

