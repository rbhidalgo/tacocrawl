import React from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../styles/Input'

const EditUser = (props) =>  {

    const onSubmit = (e)=>{
        e.preventDefault();
        props.editUser();
    }

    return (
      <div>
        <br/>
        <h4>edit your profile</h4>
        <form onSubmit={onSubmit}>
          <label>
            username: < Input type="text" name="username" onChange={props.handleFormChange} value={props.userToEdit.username} placeholder='username'/><br />
            password: < Input type="password" name="password" onChange={props.handleFormChange} value={props.userToEdit.password} placeholder='password'/><br />
            email: < Input type="text" name="email" onChange={props.handleFormChange} value={props.userToEdit.email} placeholder='email'/><br />
          </label>
          < Input type='Submit'/>
        </form>
      </div>
  
      )
    }

export default withRouter(EditUser)