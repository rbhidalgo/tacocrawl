import styled from "styled-components";

const CrawlContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 25px;
width: 75vw;
background-color: #ffffffa6;

.pMain {
    font-size: 25px;
    margin: 0 2vw;
    padding: 2vw;
}

.spanHighlight {
    background-color: #FFED03;
}

li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export default CrawlContainer;