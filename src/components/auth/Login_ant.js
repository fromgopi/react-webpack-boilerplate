import React, { Component } from "react";
import Logo from '../../img/logo.png';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

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
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="login-wrap">
				<div className="login">
					<div className="img-wrap">
						<img className="login-logo" src={Logo} />
					</div>
					<div className="login-form">
						<Form onSubmit={this.handleSubmit} className="login-form">
							<Form.Item>
							  {getFieldDecorator('username', {
								rules: [{ required: true, message: 'Please input your username!' }],
							  })(
								<Input
								  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								  placeholder="Username"
								/>,
							  )}
							</Form.Item>
							<Form.Item>
							  {getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }],
							  })(
								<Input
								  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								  type="password"
								  placeholder="Password"
								/>,
							  )}
							</Form.Item>
							<Form.Item>
							  {getFieldDecorator('remember', {
								valuePropName: 'checked',
								initialValue: true,
							  })(<Checkbox>Keep Signed In</Checkbox>)}
							  <Button type="primary" htmlType="submit" className="login-form-button">
								Log in
							  </Button>
							</Form.Item>
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

export default Form.create()(Login)