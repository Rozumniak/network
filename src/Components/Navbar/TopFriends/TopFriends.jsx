import React from 'react';
import s from './TopFriends.module.css'

const TopFriends = (props) => {
    return (
        <div className={s.best_friends}>
            <div className={s.friend_ava}>
                <img
                    src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"/>
                {props.friendName}
            </div>
        </div>
    )
}
export default TopFriends;