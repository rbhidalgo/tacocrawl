import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from "../styles/Input";
import Button from "../styles/Button";

class Login extends Component {
	state = {
		username: "",
		password: "",
		logged: false
	};

	changeHandler = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = async e => {
		e.preventDefault();
		const loginResponse = await fetch("/users/login", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify(this.state),
			headers: {
				"Content-type": "application/json"
			}
		});

		const parsedResponse = await loginResponse.json();
		if (parsedResponse.success) {
			this.props.doSetCurrentUser(parsedResponse.user);
			this.setState({
				logged: true
			});
		}
	};

	render() {
		const { username, password } = this.state;
		return ( 
			
			this.state.logged ? (
			<Redirect to={`/users/${this.props.currentUser._id}`} />
		) : (
			<form
				onSubmit={this.onSubmit}
				style={{ marginTop: "10vh", textAlign: "center" }}>
				<label>username:</label>
				<Input
					type='text'
					name='username'
					value={username}
					onChange={this.changeHandler}
				/><br/>
				<label>password</label>
				<Input
					type='password'
					name='password'
					value={password}
					onChange={this.changeHandler}
				/>
				<br />
				<Button type='submit'>Submit</Button>
			</form>
		)
		);
	}
}

export default Login;
