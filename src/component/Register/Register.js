import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from "../styles/Input";
import Button from "../styles/Button";

class Register extends Component {
	state = {
		username: "",
		password: "",
		email: "",
		logged: false
	};

	changeHandler = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = async e => {
		e.preventDefault();
		const registerResponse = await fetch("/users", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify(this.state),
			headers: {
				"Content-type": "application/json"
			}
		});

		const parsedResponse = await registerResponse.json();
		console.log(parsedResponse);
		if (parsedResponse.user) {
			this.props.doSetCurrentUser(parsedResponse.user);
			this.setState({
				logged: true
			});
		}
	};

	render() {
		const { username, password, email } = this.state;

		return (
			<div>
				{this.state.logged ? (
					<Redirect to={`/users/${this.props.currentUser._id}`} />
				) : (
					<RegisterForm
						changeHandler={this.changeHandler}
						onSubmit={this.onSubmit}
						username={username}
						password={password}
						email={email}
					/>
				)}
			</div>
		);
	}
}

const RegisterForm = ({
	changeHandler,
	onSubmit,
	username,
	password,
	email
}) => (
	<form onSubmit={e => onSubmit(e)} style={{ marginTop: "10vh", textAlign: "center" }}>
		<label htmlFor='username'>Username</label>
		<Input
			onChange={e => changeHandler(e)}
			type='text'
			name='username'
			value={username}
		/>
		<br />
		<label htmlFor='password'>Password</label>
		<Input
			onChange={e => changeHandler(e)}
			type='password'
			name='password'
			value={password}
		/>
		<br />
		<label htmlFor='password'>Email</label>
		<Input
			onChange={e => changeHandler(e)}
			type='text'
			name='email'
			value={email}
		/>
		<br />
		<Button type='submit'>SUBMIT</Button>
	</form>
);

export default Register;
