import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messages = props.messages.map
    (el => (<Message text={el.message}/>));
    let dialogs = props.dialogs.map(dialog =>
        (<Dialog name={dialog.name} activeClassName={s.active} id={dialog.id}/>));
    let sendMessage = React.createRef();
    let sendMessage1 = () => {
        let text = sendMessage.current.value;
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <textarea ref={sendMessage}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage1}>Отправить</button>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;