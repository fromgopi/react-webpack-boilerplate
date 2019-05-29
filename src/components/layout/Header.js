import React, {Component} from 'react';
import LogoImage from '../../img/logo.png'
import Login from '../auth/Login'
import Loginmd from '../auth/Login_md'
import Loginbm from '../auth/Login_bulma'
import Loginsui from '../auth/Login_sui'
import Loginant from '../auth/Login_ant'
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
                                <li><Popup trigger={<a href="#">Login</a>} position="center center" modal={true} className="login"><Login/></Popup></li>
                                <li><Popup trigger={<a href="#">Login MD</a>} position="center center" modal={true} className="login"><Loginmd/></Popup></li>
                                <li><Popup trigger={<a href="#">Login BM</a>} position="center center" modal={true} className="login"><Loginbm/></Popup></li>
                                <li><Popup trigger={<a href="#">Login SUI</a>} position="center center" modal={true} className="login"><Loginsui/></Popup></li>
								<li><Popup trigger={<a href="#">Login ANT</a>} position="center center" modal={true} className="login"><Loginant/></Popup></li>
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