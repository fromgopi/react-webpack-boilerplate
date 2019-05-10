import React, {Component} from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../../styles/login/Login.scss";

export default class Login extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  selectedOption: "Sign In",
	  username: "",
	  email: "",
	  password: "",
	  keepSiginedIn: true,
	  userType: "consumer"
	};
  }

  handleChange = event => {
	  if(event.target.type === 'checkbox')
	  {
		this.setState({[event.target.id]: !this.state[event.target.id]});
	  }
	  else
	  {
		this.setState({[event.target.id]: event.target.value});
	  }
  }

  handleOptionChange = changeEvent => {
  	this.setState({
			selectedOption: changeEvent.target.value
  		}
  	);
  }

  handleTypeChange = changeEvent => {this.setState({userType: changeEvent.target.value});}
  
  handleSubmit = event => {
	event.preventDefault();
  }

  render() {
	return (
	<div className="login-wrap">
		<div className="login">
			<input id="tab-1" type="radio" name="tab" className="sign-in" value="Sign In" checked={this.state.selectedOption === "Sign In"} onChange={this.handleOptionChange}/><label htmlFor="tab-1" className="tab">Sign In</label>
			<input id="tab-2" type="radio" name="tab" className="sign-up" value="Sign Up" checked={this.state.selectedOption === "Sign Up"} onChange={this.handleOptionChange}/><label htmlFor="tab-2" className="tab">Sign Up</label>
			<div className="login-form">
				<div className="sign-in-form">
					<form role="form" onSubmit={this.handleSubmit}>
						<div className="sign-in-wrap">
							<FormGroup controlId="username">
								<FormControl required autoFocus type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
							</FormGroup>
							<FormGroup controlId="email" className="sign-up-fields">
								<FormControl required autoFocus type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
							</FormGroup>
							<FormGroup controlId="password">
								<FormControl required type="password" placeholder="Password" 
									pattern = "(?=^.{6,}$).*$" title = "Min 6 characters"
									value={this.state.password} onChange={this.handleChange}/>
							</FormGroup>
							<FormGroup controlId="keepSiginedIn" className="checkbox-wrap sign-in-fields">
								<FormControl autoFocus type="checkbox" checked={this.state.keepSiginedIn} onChange={this.handleChange}/>
								<label htmlFor="keepSiginedIn" className="checkbox-label"><span>Keep me Signed in</span></label>
							</FormGroup>
							<div className="checkbox-wrap sign-up-fields">
								<input id="consumer" type="radio" name="usertype" className="consumer" value="Consumer" checked={this.state.userType === "consumer"} onChange={this.handleTypeChange}/>
								<label htmlFor="consumer" className="checkbox-label">User</label>
								<input id="agent" type="radio" name="usertype" className="consumer" value="Agent" checked={this.state.userType === "Agent"} onChange={this.handleTypeChange}/>
								<label htmlFor="agent" className="checkbox-label">Admin</label>
							</div>
						</div>
						<Button id="submitbtn" type="submit" className="login-btn"><span className="">{this.state.selectedOption}</span></Button>
					</form>
				 </div>
			</div>
		</div>
	</div>
	);
  }
}