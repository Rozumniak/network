import s from "./Users.module.css";
import userPhoto from "../../img/1.png";
import React from "react";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && s.selectedPage}
                               onClick={(e) => {
                                   props.onPageChange(p)
                               }}
                >{p}</button>
            })}

        </div>

        {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                            </div>
                        <div>
                            {u.followed ?
                                <Button size="sm" disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.unfollow(u.id);
                                        }}> Unfollow </Button> :

                                <Button size="sm" disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                   props.follow(u.id);


                                }}>Follow</Button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>"u.location.country"</div>
                                <div>{"u.location.city"}</div>
                                </span>
                                </span>
        </div>)
        }
    </div>
}
export default Users;