import styled from "styled-components";

const ParentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: space-between;
margin-top: 125px;

.p-main {
    font-size: 28px;
    margin: 0 auto;
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
    position: relative;
    width: 100%;
}

.button-text {
    position: absolute;
    margin: 0 auto;
    width: 100%;
}

.button-but {
    position: absolute;
    margin: 0 auto;
}

`;

export default ParentContainer;

