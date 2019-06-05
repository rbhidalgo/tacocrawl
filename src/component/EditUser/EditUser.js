import React from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../styles/Input'

const EditUser = (props) =>  {

    const onSubmit = ()=>{
        // e.preventDefault();
        props.editUser();
    }

    return (
      <div>
        <h4> Edit User</h4>
        <form onSubmit={onSubmit}>
          <label>
            user name: < Input type="text" name="username" onChange={props.handleFormChange} value={props.userToEdit.username} placeholder='username'/><br />
            password: < Input type="password" name="password" onChange={props.handleFormChange} value={props.userToEdit.password} placeholder='password'/><br />
            email: < Input type="text" name="email" onChange={props.handleFormChange} value={props.userToEdit.email} placeholder='email'/><br />
          </label>
          < Input type='Submit'/>
        </form>
      </div>
  
      )
    }

export default withRouter(EditUser)