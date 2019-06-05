import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import Home from './component/Home/Home'
import ShowUser from './component/ShowUser/ShowUser'
import LocationsContainer from './component/LocationsContainer/LocationsContainer';
import Register from './component/Register/Register';

import * as routes from './constants/routes';
// import Body from './component/styles/Body';
import './index.css';



class App extends Component {
  state = {
    currentUser: null
  }

doSetCurrentUser = user =>
  this.setState({
    currentUser: user
})

doLogout = () => {
  this.setState({
    currentUser: null
  })
  this.props.history.push(routes.HOME)
}

  componentDidMount(){

  }

  // doFetchYelp = e => {
  //   e.preventDefault()
  //   console.log('')
  // }s
  
  render() {
    const {currentUser} = this.state
    return (
      <div>
        {/* <Body> */}
        <NavBar currentUser={currentUser} doLogout={this.doLogout}/>
        <Switch>
          <Route exact path={routes.HOME} render={() => < Home />} />
          <Route exact path={routes.LOCATIONS} render={() => <LocationsContainer  currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} />} />
          {/* <Route exact path={routes.USERS} render={() => <div>My Profile</div>} /> */}
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route exact path={routes.REGISTER} render={() => <Register currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
        {/* </Body> */}
      </div>
    );
  }
}


export default withRouter(App);
