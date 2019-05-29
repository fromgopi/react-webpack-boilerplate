import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuIcon from '@material-ui/icons/Menu';
import LogoImage from '../../img/logo.png'
import {Button} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Login from '../auth/Login'
import Loginmd from "../auth/Login_md";
import Popup from "reactjs-popup";
import Loginbm from "../auth/Login_bulma";
import Loginsui from "../auth/Login_sui";
import Loginant from "../auth/Login_ant";

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 10
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(2),
    },
}));

const NavBar = () => {
    const classes = styles();
    return(
        <div className={classes.root}>
            <AppBar position="static" style={{ background: "#fff", height: "auto", width: "auto"}}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img src={LogoImage} className="logo"/>
                    </Typography>
                    <nav className="nav-menu-container">
                        <ul className="nav-menu">
                            <li><Popup trigger={<a href="#">Login</a>} position="center center" modal={true} className="login"><Login/></Popup></li>
                            <li><Popup trigger={<a href="#">Login MD</a>} position="center center" modal={true} className="login"><Loginmd/></Popup></li>
                            <li><Popup trigger={<a href="#">Login BM</a>} position="center center" modal={true} className="login"><Loginbm/></Popup></li>
                            <li><Popup trigger={<a href="#">Login SUI</a>} position="center center" modal={true} className="login"><Loginsui/></Popup></li>
                            <li><Popup trigger={<a href="#">Login ANT</a>} position="center center" modal={true} className="login"><Loginant/></Popup></li>
                        </ul>
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    )
};
export default NavBar;