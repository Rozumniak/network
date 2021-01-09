import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import TopFriends from "./TopFriends/TopFriends";
import Message from "../Dialogs/Message/Message";


const Navbar = (props) => {

    let friends = props.friends.map
    (el => (<TopFriends friendName={el.friendName}/>));
    return (
        <div className={s.navbar}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}> Новости</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Музыка</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}> Настройки</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}> Пользователи</NavLink>
                </div>
            </nav>
            <div className={s.bestFriend}>{friends}</div>
        </div>
    );
}

export default Navbar;