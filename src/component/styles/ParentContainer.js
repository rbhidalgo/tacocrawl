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
    margin: 0 2vw;
    padding: 2vw;
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

`;

export default ParentContainer;

