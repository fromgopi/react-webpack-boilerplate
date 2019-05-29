import React, { Component } from "react";
import Logo from '../../img/logo.png';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			keepSignedIn: false
		};
	}

	componentWillMount() {
		//All required Hidden fields will go into
	}


	handleChange = e => {
		var value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
		this.setState({[e.target.name]: value});
	};
	handleSubmit = e => {
		//Todo: Call backend server with userData and key in the header.
		e.preventDefault();
	};

	render() {
		return (
			<div className="login-wrap">
				<div className="login">
					<div className="img-wrap">
						<img className="login-logo" src={Logo} />
					</div>
					<div className="login-form">
						<Form>
							<Form.Field>
							  <input placeholder='Username' />
							</Form.Field>
							<Form.Field>
							  <input placeholder='Password' />
							</Form.Field>
							<Form.Field>
							  <Checkbox label='Keep Signed In' />
							</Form.Field>
							<Button type='submit'>Submit</Button>
						</Form>
						<div className="links-wrap">
							<div className="label-wrap">
								<label className="link-label" onClick={this.handleForgotPassword}>Forgot Password?</label>
							</div>
							<div className="label-wrap">
								<span className="link-label pre">Don't have an account? </span>
								<label className="link-label">Register</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default Login