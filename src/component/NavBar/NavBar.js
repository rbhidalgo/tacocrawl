import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";
import "./NavBar.css";
import MenuToggleButton from "../SideMenu/MenuToggleButton";

const NavBar = ({ currentUser, doLogout, sideMenuToggleClickHandler }) => (
	<header className='navbar'>
		<nav className='navbar_navigation'>
			<div className='side-menu-toggle'>
				<MenuToggleButton click={sideMenuToggleClickHandler} />
			</div>
			<div className='navbar_logo'>
				<h1>taco crawling</h1>
			</div>
			<div className='space' />
			<div className='navbar_nav-items'>
				<NavLink to={routes.HOME} activeClassName='selected'>
					Home
				</NavLink>
				{currentUser && (
					<NavLink
						exact
						to={`${routes.USERS}/${currentUser._id}`}
						activeClassName='selected'>
						{currentUser.username}'s Profile{" "}
					</NavLink>
				)}
				<NavLink to={routes.LOCATIONS} activeClassName='selected'>
					Crawl
				</NavLink>
				{currentUser ? (
					<NavLink key={1} to={routes.HOME} onClick={doLogout}>
						Logout
					</NavLink>
				) : (
					[
						<NavLink key={2} to={routes.REGISTER} activeClassName='selected'>
							Register
						</NavLink>,
						<NavLink key={3} to={"/login"} activeClassName='selected'>
							Login
						</NavLink>
					]
				)}
			</div>
		</nav>
	</header>
);

export default NavBar;
