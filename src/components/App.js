import React, {Component} from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Register/>
                </div>
            </div>
        );
    }
}

export default App;