import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import Menu from '../styles/Menu';
// import './NavBar.css'

const NavBar = ({currentUser, doLogout}) =>
  <Menu>
    <h1>LA Taco Crawl <img src="../images/tacos.png" width="80px"></img></h1>
    {/* <NavLink exact activeClassName="selected" to={routes.ROOT}>ROOT</NavLink> */}
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
  </Menu>




export default NavBar
