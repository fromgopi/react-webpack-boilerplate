import React, { Component } from "react";
import Logo from '../../img/logo.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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
								<FormControl required fullWidth>
									<InputLabel htmlFor="email">
										Email Address
									</InputLabel>
									<Input 
										id="email" 
										name="email"
										autoComplete="email" 
										autoFocus/>
								</FormControl>
								<FormControl margin="normal" required fullWidth>
									<InputLabel htmlFor="password">
										Password
									</InputLabel>
									<Input 
										name="password" 
										type="password" 
										id="password" 
										autoComplete="current-password"/>
								</FormControl>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Keep Signed In"/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary">
									Sign in
								</Button>
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