import React from 'react';
import s from './Post.module.css';
import Preloader from "../../../Preloader";
import userPhoto from "../../../../img/1.png";
const Post = (props) => {
    let addLike = () => {

    }
    if (!props.profile){
        return null
    }
    return (
        <div className={s.item}>
            <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} className={s.userPhoto}/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
            <div><button onClick={addLike}>Like</button></div>
        </div>

    );
}

export default Post;