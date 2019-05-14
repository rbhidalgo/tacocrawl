import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'


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
    console.log(this.state.user.locations)
    return (
      <div>
        <h1>Hello, {this.state.user.username}</h1>
        {this.state.user.locations &&
        this.state.user.locations.map((r, i) => 
        <li>
          <Link to = {`/locations/${r.id}`}>{r.name}</Link>
          <button>Delete</button>
        </li>
        )}
      </div>
    )
  }
}

export default withRouter(ShowUser)
