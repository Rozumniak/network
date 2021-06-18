import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";

const maxLength50 = maxLengthCreator(50);
const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"message"} component={Textarea} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm({
    form: "message"
})(MessageForm);
const Dialogs = (props) => {


    let messages = props.messagesPage.messages.map
    (el => (<Message messages={el.message}/>));

    let dialogs = props.messagesPage.dialogs.map(dialog =>
        (<Dialog name={dialog.name} activeClassName={s.active} id={dialog.id}/>));


    let onSubmit = (formData) => {
        let text = formData.message
        props.sendMessage(text);
        formData.message = null;

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <MessageReduxForm onSubmit={onSubmit}/>
            </div>

        </div>
    );
}
export default Dialogs;