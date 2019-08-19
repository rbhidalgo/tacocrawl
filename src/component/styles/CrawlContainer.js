import styled from "styled-components";

const CrawlContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 25px;
width: 75vw;
background-color: #ffffff;
margin-top: 10vh;
text-align: center;
color: #049DD8;

.btn-crawl {
    cursor: pointer;
}

}
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
    font-size: 24px;
  }

.choose-location,
.choose-number,
.lets-crawl {
    border-bottom: 7px solid #FFED03;
    display: inline-block;
    line-height: 1.5;
    font-size: 32px;
    cursor: pointer;
}

h1 {
    font-size: 72px;
    padding: 0 10px;
}

.location-container,
.number-container,
.btn-crawl {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20vw;
}

li {
    text-align: left;
    padding-left: 25vw;
    cursor: pointer;
}

`;

export default CrawlContainer;