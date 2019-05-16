import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const EditUser = (props) =>  {

    const onSubmit = (e)=>{
        e.preventDefault();
        props.editUser();
    }

    return (
      <div>
        <h4> Edit User</h4>
        <form onSubmit={onSubmit}>
          <label>
            user name: <input type="text" name="username" onChange={props.handleFormChange} value={props.userToEdit.username}/><br />
            password: <input type="password" name="password" onChange={props.handleFormChange} value={props.userToEdit.password}/><br />
            email: <input type="text" name="email" onChange={props.handleFormChange} value={props.userToEdit.email}/><br />
          </label>
          <input type='Submit'/>
        </form>
      </div>
  
      )
    }

export default withRouter(EditUser)