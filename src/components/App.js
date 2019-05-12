import React, {Component} from 'react';
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./layout/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Register/>
            </div>
        );
    }
}

export default App;