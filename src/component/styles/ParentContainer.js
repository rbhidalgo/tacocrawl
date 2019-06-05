import styled from "styled-components";

const ParentContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
width: 50vw;
justify-content: space-between;
margin: 15vh 49vw;

.pMain {
    font-size: 28px;
    margin: 0 2vw;
    padding: 2vw;
}

.spanHighlight {
    background-color: #FFED03;
}
`;

export default ParentContainer;