import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import EditUser from '../EditUser/EditUser'



class ShowUser extends Component {
  state = {
    user: {},
    locations: [],
    userToEdit: {
      username: '',
      password: '',
      email: ''
    }
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


  editUser = async () => {
      try { const editUserResponse = await fetch(`/users/update/${this.props.match.params.id}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.userToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
        
      })
      console.log(editUserResponse)
      const editUserJson = await editUserResponse.json();
      console.log(editUserJson)
      this.setState({
        user: editUserJson
      },()=>{
        this.props.doSetCurrentUser(editUserJson)
      })
        
      } catch(err){
        console.log(err)
      }
    }

    handleFormChange = (e) => {
      this.setState({
        userToEdit: {
          ...this.state.userToEdit,
          [e.target.name]: e.target.value
        }
      })
      console.log(this.state.userToEdit)
    }

  render() {
    console.log(this.state.user)
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
        < EditUser editUser={this.editUser} handleFormChange={this.handleFormChange} userToEdit={this.state.userToEdit}/>
      </div>
    )
  }
}

export default withRouter(ShowUser)
