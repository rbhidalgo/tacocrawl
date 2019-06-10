import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'

import './SideMenu.css';

const sideMenu = ({currentUser, doLogout, show}) => {

    let menuClasses = 'side-menu';
    if(show){
        console.log(show)
        menuClasses = 'side-menu open';
    }

    return(
    <nav className={menuClasses}>
         <NavLink to={routes.HOME} activeClassName="selected">Home</NavLink>
              {
                currentUser
                  && <NavLink exact to={`${routes.USERS}/${currentUser._id}`}
                  activeClassName="selected">{currentUser.username}'s Profile </NavLink>
              }
              <NavLink to={routes.LOCATIONS} activeClassName="selected">Crawl</NavLink>
              {
                currentUser
                ? <NavLink key ={1}to={routes.HOME} onClick={doLogout}>Logout</NavLink> 
                : [<NavLink key={2} to={routes.REGISTER} activeClassName="selected">Register </NavLink>, 
                <NavLink key={3} to={'/login'} activeClassName="selected">Login </NavLink>]
              }
    </nav>
);
};

export default sideMenu;