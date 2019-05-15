import React, {Component} from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./layout/Header";
import Model from "./layout/Model";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Model/>
            </div>
        );
    }
}

export default App;