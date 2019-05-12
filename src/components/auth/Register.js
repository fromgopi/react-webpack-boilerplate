import React, {Component} from 'react';
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            is_active: 1,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">Create your Example account</p>
                        <form noValidate onSubmit={this.onSubmit}>

                            <TextFieldGroup
                                placeholder='First Name'
                                name='firstName'
                                type='name'
                                value={this.state.firstName}
                                onChange={this.onChange}
                            />

                            <TextFieldGroup
                                placeholder='Last Name'
                                name='lastName'
                                type='name'
                                value={this.state.lastName}
                                onChange={this.onChange}
                            />

                            <TextFieldGroup
                                placeholder='Username'
                                name='username'
                                type='name'
                                value={this.state.username}
                                onChange={this.onChange}
                            />

                            <TextFieldGroup
                                placeholder='Email Address'
                                name='email'
                                type='email'
                                value={this.state.email}
                                onChange={this.onChange}
                            />

                            <TextFieldGroup
                                placeholder='Password'
                                name='password'
                                type='password'
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <input type="submit" className="btn btn-info btn-block mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;