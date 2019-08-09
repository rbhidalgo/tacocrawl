import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// import { ReactComponent as BkgTacoStarBeer } from "./tacopattern3.svg";
// import styled, { keyframes } from "styled-components";

import NavBar from "./component/NavBar/NavBar";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import ShowUser from "./component/ShowUser/ShowUser";
import LocationsContainer from "./component/LocationsContainer/LocationsContainer";
import Register from "./component/Register/Register";
import SideMenu from "./component/SideMenu/SideMenu";
import Backdrop from "./component/Backdrop/Backdrop";

import * as routes from "./constants/routes";
import "./index.css";


// const grow = keyframes`
//   0% {
//     transform: scale(.1);
//   }

//   50% {
//     transform: scale(.12);
//   }
//   100% {
// 	transform: scale(.1)
//   }
// `;

// const StyledBkg = styled(BkgTacoStarBeer)`
// background-image: url(/public/images/tacopattern3.svg);
// background-attachment: fixed;
// background-repeat: repeat;
// height: 100vh;
// position: absolute;
// z-index: -1;
// width: 100vw;
//   .stars-svg {
//     animation: ${grow} 2000ms 2000ms infinite ease-in-out;
//   }
// `;


class App extends Component {
	state = {
		currentUser: null,
		sideMenuOpen: false
	};

	doSetCurrentUser = user =>
		this.setState({
			currentUser: user
		});

	doLogout = () => {
		this.setState({
			currentUser: null
		});
		this.props.history.push(routes.HOME);
	};

	sideMenuToggleClickHandler = () => {
		this.setState({
			sideMenuOpen: true
		});
	};

	backdropClickHandler = () => {
		this.setState({
			sideMenuOpen: false
		});
	};

	render() {
		const { currentUser, doLogout, sideMenuOpen } = this.state;
		return (
			<div className='parent-container'>
				<span className="bkg-shape"></span>
				<NavBar
					currentUser={currentUser}
					doLogout={doLogout}
					sideMenuToggleClickHandler={this.sideMenuToggleClickHandler}
				/>
				<SideMenu
					currentUser={currentUser}
					doLogout={doLogout}
					show={sideMenuOpen}
				/>
				{sideMenuOpen && <Backdrop click={this.backdropClickHandler} />}
				<main>
					<Switch>
						<Route exact path={routes.HOME} render={() => <Home />} />
						<Route
							exact
							path={routes.LOCATIONS}
							render={() => (
								<LocationsContainer
									currentUser={currentUser}
									doSetCurrentUser={this.doSetCurrentUser}
								/>
							)}
						/>
						<Route
							exact
							path={`${routes.USERS}/:id`}
							render={() => (
								<ShowUser
									currentUser={currentUser}
									doSetCurrentUser={this.doSetCurrentUser}
								/>
							)}
						/>
						<Route
							exact
							path={routes.REGISTER}
							render={() => (
								<Register
									currentUser={this.state.currentUser}
									doSetCurrentUser={this.doSetCurrentUser}
								/>
							)}
						/>
						<Route
							exact
							path={routes.LOGIN}
							render={() => (
								<Login
									currentUser={currentUser}
									doSetCurrentUser={this.doSetCurrentUser}
								/>
							)}
						/>
						<Route render={() => <div>NOT FOUND</div>} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default withRouter(App);
