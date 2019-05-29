import React, {Component, Fragment} from 'react';
import Header from "./layout/Header";
import NavBar from "./layout/NavBar";
import Body from "./layout/Body";

class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Body/>
            </Fragment>
        );
    }
}

export default App;