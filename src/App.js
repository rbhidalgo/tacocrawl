import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
import LocationsContainer from './component/LocationsContainer/LocationsContainer';


import * as routes from './constants/routes';
import './App.css';

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
  this.props.history.push(routes.LOGIN)
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
        <NavBar currentUser={currentUser} doLogout={this.doLogout}/>
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.LOCATIONS} render={() => <LocationsContainer  currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route exact path={routes.POSTS} render={() => <div>POST</div>} />
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}


export default withRouter(App);
