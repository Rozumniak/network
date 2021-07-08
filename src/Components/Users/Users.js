import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator";
import 'antd/dist/antd.css';
import {Button} from 'antd';


const Users = (props) => {

    return <div>
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} onPageChange={props.onPageChange}
                       currentPage={props.currentPage}
                       portionSize={props.pageSize}/>
        </div>

        {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                            </div>
                        <div className={s.followButton}>
                            {u.followed ?
                                <Button type="primary" size="middle"
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.unfollow(u.id);
                                        }}> Unfollow </Button> :

                                <Button type="primary" size="middle"
                                        disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id);


                                }}>Follow</Button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
            </span>
        </div>)
        }
    </div>
}
export default Users;