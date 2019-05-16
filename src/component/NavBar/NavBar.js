import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './NavBar.css'

const NavBar = ({currentUser, doLogout}) =>
  <div>
    <h5>NAVBAR</h5>
    <NavLink exact activeClassName="selected" to={routes.ROOT}>ROOT</NavLink>
    <NavLink to={routes.HOME} activeClassName="selected">HOME </NavLink>
    {
      currentUser
        && <NavLink exact to={`${routes.USERS}/${currentUser._id}`}
        activeClassName="selected">{currentUser.username} Profile </NavLink>
    }
    <NavLink to={routes.LOCATIONS} activeClassName="selected">LOCATIONS</NavLink>
    <NavLink to={routes.POSTS} activeClassName="selected">POSTS </NavLink>
    {
      currentUser
        ? <span>hello {currentUser.username} <button onClick={doLogout}>LOGOUT</button></span>
        :  <NavLink to={'/login'} activeClassName="selected">login </NavLink>
    }
  </div>

export default NavBar
