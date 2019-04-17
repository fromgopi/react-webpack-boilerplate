import React, {Component} from 'react';
import Table from "./Table";

class Form extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            items: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let items = [...this.state.items];
        items.push({firstName: this.state.firstName, lastName: this.state.lastName});
        this.setState({
            items: items,
            firstName: '',
            lastName: ''
        })
        console.log(this.state);
    };

    handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };


    render() {
        return (
            <div>
                <h3>Add a new item to the table:</h3>
                <form onSubmit={this.handleFormSubmit}>
                    First Name:
                    <input
                        placeholder="Ross"
                        type="text"
                        name="firstName"
                        value={this.props.firstName}
                        onChange={this.handleInputChange}
                    />
                    Last Name:
                    <input
                        placeholder="Alex"
                        type="text"
                        name="lastName"
                        value={this.props.lastName}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit" value="Submit">Add Item</button>
                </form>
                <Table data={this.state.items}/>
            </div>
        );
    }
}

Form.propTypes = {};

export default Form;