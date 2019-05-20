import React, { Component } from "react";
import Logo from '../../img/logo.png';
import TextField from '../common/TextField';
import BitField from '../common/BitField';

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
						<form onSubmit={this.handleSubmit}>
							<div className="form-wrap">
								<div className="field">
								  <div className="control has-icons-left">
									<input className="input" type="text" placeholder="Username"/>
									<span className="icon is-small is-left">
									  <i className="fas fa-user"></i>
									</span>
								  </div>
								 </div>
								<div className="field">
								  <div className="control has-icons-left">
									<input className="input" type="password" placeholder="Password"/>
									<span className="icon is-small is-left">
									  <i className="fas fa-lock"></i>
									</span>
								  </div>
								</div>
								<div className="field">
								  <div className="control">
									<label className="checkbox">
									  <input type="checkbox"/>
									  Keep Signed In
									</label>
								  </div>
								</div>
								<div className="control">
								  <button className="button is-link is-fullwidth">Submit</button>
								</div>
							</div>
							<div className="links-wrap">
								<div className="label-wrap">
									<label className="link-label" onClick={this.handleForgotPassword}>Forgot Password?</label>
								</div>
								<div className="label-wrap">
									<span className="link-label pre">Don't have an account? </span>
									<label className="link-label">Register</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}


export default Login