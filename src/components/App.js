import React, {Component} from 'react';
import Header from "./layout/Header";
import Model from "./layout/Model";
import Form from "./common/Form";
import Example from "./Example";
import Login from "./auth/Login";

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Login/>
                </div>
            </div>
        );
    }
}

export default App;