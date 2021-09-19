import React, {useState} from 'react';
import s from './Post.module.css';

import {Button,} from 'antd';
import {LikeOutlined} from '@ant-design/icons';
import userPhoto from "../../../../img/1.png";

const Post = (props) => {

    let [islike, addLike] = useState(false)

    if (!props.profile) {
        return null
    }
    return (
        <div className={s.item}>
            <img src={props.profile.photos.small || userPhoto} className={s.userPhoto}/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
            {islike === false ?  <div className={s.likeButton}><button onClick={()=> addLike(true)} >Like</button></div>
            : <div><button onClick={()=> addLike(false)} >like</button></div>}
            <div><Button onClick={props.deletePost}> X </Button></div>
        </div>

    );
}

export default Post;