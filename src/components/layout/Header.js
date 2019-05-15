import React, {Component} from 'react';
import LogoImage from '../../img/logo.png'
import Login from '../auth/Login'
import Popup from "reactjs-popup";

class Header extends Component {
    render() {
        return (
            <div className="fixed-header">
                <header>
                    <div className="header-container">
                        <div>
                            <img src={LogoImage} className="logo"/>
                        </div>
                        <nav className="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><Popup trigger={<a href="#">Login/SignUp</a>} position="center center" modal={true} className="login"><Login/></Popup></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section className="hero">
                </section>
            </div>
        );
    }
}

export default Header;