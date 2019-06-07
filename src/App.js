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
    this.instagramPhotos()
  }


  instagramPhotos = async () => {
    // It will contain our photos' links
    const res = []
    
    try {
        const userInfoSource = await fetch('https://www.instagram.com/rhidalgophoto/', {
          method: 'GET'
        })
        console.log(userInfoSource, '<============ UserInforSource when making the call')
        // userInfoSource.data contains the HTML from Axios
        const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

        const userInfo = JSON.parse(jsonObject)
        // Retrieve only the first 10 results
        const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 10)
        for (let media of mediaArray) {
            const node = media.node
            
            // Process only if is an image
            if ((node.__typename && node.__typename !== 'GraphImage')) {
                continue
            }

            // Push the thumbnail src in the array
            res.push(node.thumbnail_src)
            console.log(node, '<------ NODE')
        }
    } catch (e) {
        console.error('Unable to retrieve photos. Reason: ' + e.toString())
    }
    
    return res
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
