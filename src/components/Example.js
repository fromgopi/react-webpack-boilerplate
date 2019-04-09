import React, {Component} from 'react';

class Example extends Component {

    constructor() {
        super();
        this.state = {
            value: 0,
            message: 'Default Click State'
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.setState({
            message: `click-state ${this.state.value}`,
            value: this.state.value + 1
        });
    }

    render() {
        return (
            <div className="container">
                <div>render->state={this.state.value} - {this.state.message}
                </div>
                <button onClick={this.onClick}>Click-setState</button>
            </div>
        );
    }
}

export default Example;