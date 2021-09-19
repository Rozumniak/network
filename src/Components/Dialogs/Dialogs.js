import React, {useState} from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import ScrollToBottom from 'react-scroll-to-bottom';
import {Button} from "antd";


const Dialogs = (props) => {


    let [message, editMessage] = useState('');
    //   let [messages, sendMessage] = useState([{message1: ''}]);
    //   console.log(messages)

    let messages1 = props.messagesPage.messages.map
    ((el, i) => (<div key={i}><Message messages={el.message}/></div>));

    let dialogs = props.messagesPage.dialogs.map(dialog =>
        (<Dialog name={dialog.name} activeClassName={s.active} id={dialog.id}/>));
    const nullMessage = () => {
        editMessage(null)
    }
    return (

        <div className={s.outerContainer}>
            {/* <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogs}
                </div>
            </div>*/}
            <div className={s.container}>
                <ScrollToBottom  className={s.messages}>
                    {messages1}
                </ScrollToBottom >
                <form className={s.form}>
                    <input className={s.input} placeholder={"Сообщение . . ."}
                           value={message}
                           type={"text"}
                           onKeyPress={event => event.key === 'Enter'
                               && message  ? (event) => props.sendMessage(message)
                                   && editMessage("") : null }
                           onChange={(event) => editMessage(event.target.value)}/>

                        <button className={s.sendButton}
                                onClick={message  ? (event) => props.sendMessage(message)
                                    && editMessage("") : null }>
                            Send
                        </button>
                </form>
            </div>
        </div>

    );
}

export default Dialogs;