import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
import Locations from './component/LocationsContainer/LocationsContainer'

import * as routes from './constants/routes';
import './App.css';
import LocationsContainer from './component/LocationsContainer/LocationsContainer';

class App extends Component {
  state = {
    currentUser: null
  }

doSetCurrentUser = user =>
  this.setState({
    currentUser: user
})

  componentDidMount(){

  }

  // doFetchYelp = e => {
  //   e.preventDefault()
  //   console.log('')
  // }
  
  render() {
    const {currentUser} = this.state
    return (
      <div>
        <NavBar currentUser={currentUser}/>
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.LOCATIONS} render={() => <LocationsContainer  currentUser={currentUser} />} />
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser currentUser={currentUser}/>} />
          <Route exact path={routes.POSTS} render={() => <div>POST</div>} />
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}


export default App;
