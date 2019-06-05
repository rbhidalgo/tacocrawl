import React from 'react';
import { withRouter } from 'react-router-dom';
import Heading from '../styles/Heading';
import ParentContainer from '../styles/ParentContainer';
import { NavLink } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Button from '../styles/Button';
import SubmitBut from '../styles/SubmitBut';

const Home = () => {
    return (
        <ParentContainer>
        <div> <Heading>Taco Crawl?</Heading> </div>
        <div><p className="pMain">When individuals go <span className="spanHighlight">eating tacos from place to place.</span> Usually they eat so much at the first few places that by the time they get to the last one they're <span className="spanHighlight">crawling from eating and drinking so much.</span></p>
        <br />
        <SubmitBut>
        <NavLink to={routes.LOCATIONS} activeClassName="selected">Let's Crawl!</NavLink>
        </SubmitBut>
        </div>
        </ParentContainer>
    )
}

export default withRouter(Home)