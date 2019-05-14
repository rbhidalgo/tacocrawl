import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'


class ShowUser extends Component {
  state = {
    user: {},
    locations: []
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

  // doDeleteCrawl = async (id, e) => {
  //   console.log(id, ' this is the id')
  //   e.preventDefault()
  // }


  // doDeleteCrawl = async (id, name) => {
  //   const { currentUser } = this.props
  //   const addCrawl = await fetch('/users/user', {
  //     method: 'DELETE',
  //     credentials: 'include',
  //     body: JSON.stringify({id, name, currentUser}),
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   })
  // }

  // doDeleteLocation= async (id, e) => {
  //   console.log(id, " this is id");
  //   //e.preventDefault(e);
  //   try {
  //     const deleteLocation = await fetch(
  //       `/locations/${this.props.user.restaurants.id}`,
  //       {
  //         method: "DELETE"
  //       }
  //     );
  //     console.log(deleteLocation, "inside try");
  //     const deleteLocationJson = await deleteLocation.json();
  //     this.setState({
  //       LocationId: this.state.locationId.filter(
  //         (location, i) => location._id !== id
  //       )
  //     });
  //   } catch (err) {
  //     console.log(err, " error");
  //   }
  // };

  doDeleteLocation = async (id, e) => {
    try {
      const deleteLocation = await fetch(
        `/users/${this.props.match.params.id}/locations/${id}`,
        {
          method: "DELETE"
        }
      );
      const deleteLocationJson = await deleteLocation.json();
      this.setState({
        user: deleteLocationJson.user
      })
    } catch (err) {
      console.log(err, 'error')
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
          <button onClick={() => this.doDeleteLocation(r.id)}>Delete</button>
        </li>
        )}
      </div>
    )
  }
}

export default withRouter(ShowUser)
