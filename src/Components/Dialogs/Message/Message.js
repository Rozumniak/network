import React from 'react';
import s from './Message.module.css';
import cn from "classnames";

const Message = (props) => {
    return (
        <div className={cn (s.messageContainer, s.justifyEnd)}>
            <div className={cn (s.messageBox, s.backgroundBlue)}>
                <p className={cn(s.messageText, s.colorWhite)}>{props.messages}</p>
            </div>
        </div>
    );
}
export default Message;