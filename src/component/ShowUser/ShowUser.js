import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Locations from '../LocationsContainer/LocationsContainer'


class ShowUser extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    this.doGetUser()
      .then(({user}) => this.setState({user}))
  }

  doGetUser = async () => {
    try {
      const user = await fetch(`/users/${this.props.match.params.id}`)
      const parsedUser = await user.json()
      return parsedUser 
    } catch(err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.user.username}</h1>
        <h1>{this.state.user.password}</h1>
        <h1>{this.state.user.email}</h1>
        <h1>{this.state.user.crawl}</h1>
      </div>
    )
  }
}

export default withRouter(ShowUser)
