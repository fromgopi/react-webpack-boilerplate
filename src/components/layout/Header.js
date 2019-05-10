import React, {Component} from 'react';
import LogoImage from '../../img/medium.png'

const divStyle = {
    float: 'right'
};

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="pull-left logo">
                            <img src={LogoImage} className="logo"/>
                        </div>
                        <nav className="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Login/SignUp</a></li>
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