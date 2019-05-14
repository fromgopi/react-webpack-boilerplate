import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import Logo from '../../img/logo.png';

export default class Login extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  username: "",
	  email: "",
	  password: "",
	  keepSignedIn: false,
	  register: false,
	  userType: 0
	};
  }

  handleChange = event => {
	  if(event.target.type === 'checkbox')
		this.setState({[event.target.id]: !this.state[event.target.id]});
	  else
		this.setState({[event.target.id]: event.target.value});
  };
  handleOptionChange = changeEvent => {
	  this.setState({register: JSON.parse(changeEvent.target.value)});
  };
  handleTypeChange = changeEvent => {
	  this.setState({userType: JSON.parse(changeEvent.target.value)});
  };
  
  handleSubmit = event => {
  	console.log(event);
	  event.preventDefault();
  };
  handleForgotPassword = event => {
	  event.preventDefault();
  };

  render() {
	const hideClass = this.state.register ? "hide-sign-in" : "hide-sign-up";
	console.log(hideClass)
	const btnName = this.state.register ? "Register" : "Login";
	return (
	<div className="login-wrap">
		<div className="login">
			<div className="img-wrap">	
				<img className="logo" src={Logo} />
			</div>
			<div className="login-form">
				<form onSubmit={this.handleSubmit}>
					<div className="fields-wrap">
						<FormGroup>
							<input
								id="username"
								required autoFocus
								type="text"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup className={"sign-up-fields " + hideClass}>
							<input
								id="email"
								required autoFocus
								type="email"
								placeholder="Email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<input
								id="password"
								required
								type="password"
								placeholder="Password"
								pattern = "(?=^.{6,}$).*$"
								title = "Min 6 characters"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup className={"checkbox-wrap sign-in-fields " + hideClass}>
							<input id="keepSignedIn" autoFocus type="checkbox" defaultChecked={this.state.keepSignedIn} onChange={this.handleChange}/>
							<label htmlFor="keepSignedIn" className="checkbox-label">
								<span>Keep me signed in</span>
							</label>
						</FormGroup>
						<FormGroup className={"checkbox-wrap sign-up-fields " + hideClass}>
							<input id="consumer" type="radio" name="usertype" className="consumer" value="0" checked={this.state.userType === 0} onChange={this.handleTypeChange}/><label htmlFor="consumer" className="checkbox-label">User</label>
							<input id="agent" type="radio" name="usertype" className="consumer" value="1" checked={this.state.userType === 1} onChange={this.handleTypeChange}/><label htmlFor="agent" className="checkbox-label">Admin</label>
						</FormGroup>
						<Button id="submitbtn" type="submit" className="login-btn"><span className="">{btnName}</span></Button>
					</div>
					<div className="links-wrap">
						<div className="label-wrap">
							<label className={"link-label sign-in-fields " + hideClass} onClick={this.handleForgotPassword}>Forgot Password?</label>
						</div>
						<div className="label-wrap">
							<input id="login" type="radio" name="tab" className="loginlink" value="false" checked={!this.state.register} onClick={this.handleOptionChange}/>
							<span className={"checkbox-label sign-up-fields " + hideClass}>Already have an account?</span><label htmlFor="login" className={"link-label sign-up-fields " + hideClass}>Login</label>
						</div>
						<div className="label-wrap">
							<input id="register" type="radio" name="tab" className="registerlink" value="true" checked={this.state.register} onClick={this.handleOptionChange}/>
							<span className={"checkbox-label sign-in-fields " + hideClass}>Don't have an account?</span><label htmlFor="register" className={"link-label sign-in-fields " + hideClass}>Register</label>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	);
  }
}
