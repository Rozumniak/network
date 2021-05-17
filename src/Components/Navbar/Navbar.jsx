import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import TopFriends from "./TopFriends/TopFriends";



const Navbar = (props) => {
    let friends = props.sidebar.friendName.map
    (el => (<TopFriends friendName={el.friendsName}/>));
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