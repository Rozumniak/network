import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {


    let messages = props.messagesPage.messages.map
    (el => (<Message messages={el.message}/>));

    let newMessage = React.createRef();

    let dialogs = props.messagesPage.dialogs.map(dialog =>
        (<Dialog name={dialog.name} activeClassName={s.active} id={dialog.id}/>));


    let onSendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.messageChange(text);
    }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogs}
                </div>
                <div className={s.messages}>
                    {messages}
                    <div>
                        <textarea onChange={onMessageChange} ref={newMessage} value={props.messagesPage.messageText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Отправить</button>
                    </div>
                </div>

            </div>
        );
    }
    export default Dialogs;