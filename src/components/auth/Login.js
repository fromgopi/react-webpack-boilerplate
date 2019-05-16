import React, { Component } from "react";
import Logo from '../../img/logo.png';
import TextField from '../common/TextField';
import BitField from '../common/BitField';

class Login extends Component {
	state = {
	  username: "",
	  password: "",
	  keepSignedIn: false,
	  userType: 0
  }

  handleChange = event => {
	  var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;	  
	  this.setState({[event.target.id]: value});
  };  
  handleSubmit = event => {
	  event.preventDefault();
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
						<TextField 
							required autoFocus 
							id="username" 
							type="text" 
							placeholder="Username" 
							value={this.state.username} 
							onChange={this.handleChange}
						/>
						<TextField 
							required 
							id="password" 
							type="password" 
							placeholder="Password" 
							pattern = "(?=^.{6,}$).*$" 
							title = "Min 6 characters" 
							value={this.state.password} 
							onChange={this.handleChange}
						/>
						<BitField 
							id="keepsignedin" 
							type="checkbox" 
							checked={this.state.keepSignedIn} 
							onChange={this.handleChange} 
							text="Keep Signed In"/>
						<button 
							id="submitbtn" 
							type="submit" 
							className="login-btn">
							<span className="">Login</span>
						</button>
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
