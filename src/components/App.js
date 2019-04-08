import React, {Component} from 'react';
import Header from "./layout/Header";
import Model from "./layout/Model";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Model/>
                </div>
            </div>
        );
    }
}

export default App;