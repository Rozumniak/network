import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.item}>
            {props.messages}
        </div>
    );
}
export default Message;