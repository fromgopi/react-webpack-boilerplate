import React, {Component} from 'react';
import LogoImage from '../../img/medium.png'

const divStyle = {
    float: 'right'
};

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm mb-4">
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <div className="container">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <img src={LogoImage} className="logo"/>
                            </li>
                        </ul>
                    </div>
                    <div style={divStyle}>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav gu-ul">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;