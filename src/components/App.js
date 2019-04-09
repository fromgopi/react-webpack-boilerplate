import React, {Component} from 'react';
import Header from "./layout/Header";
import Model from "./layout/Model";
import Form from "./common/Form";
import Example from "./Example";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Form/>
                </div>
            </div>
        );
    }
}

export default App;