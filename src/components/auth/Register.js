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
        }
        this.onChange = this.onChange.bind();
        this.onSubmit = this.onSubmit.bind();
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
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Example account</p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder='First Name'
                                    name='first_name'
                                    type='name'
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;