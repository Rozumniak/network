import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../Common/Preloader";
import {Button} from "react-bootstrap";

const Header = (props) => {

    return (
        <header className={s.header}>
        <img src='https://logoza.ru/img/rock.png' />
        <div className={s.loginBlock}>
            {props.isAuth? <div> {props.login} - <Button onClick={props.logout}>Log out</Button></div>
            :<NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    );
}

export default Header;