import styled from "styled-components";

const CrawlContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 25px;
width: 75vw;
background-color: #ffffffa6;
margin-top: 10vh;
text-align: center;
color: #049DD8;

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

.choose-location,
.choose-number {
    border-bottom: 5px solid #FFED03;
    display: inline-block;
    line-height: 1.5;
    font-size: 32px;
}

`;

export default CrawlContainer;