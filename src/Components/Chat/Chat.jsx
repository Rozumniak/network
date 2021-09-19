import React, {useEffect, useState} from 'react';
import s from './Chat.module.css';
import st from '../Dialogs/Message/Message.module.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import cn from "classnames";



let ws;

const Chat = (props) => {

    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
    let newMessages;
    useEffect(() => {
        ws= new WebSocket(ENDPOINT)
        ws.addEventListener('message', (e) => {
             newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])

        })

    }, [])

    return <div className={s.outerContainer}>
        <div className={s.container}>
            <ScrollToBottom className={s.messages}>
                <Messages messages={messages} userID={props.userID}/>
            </ScrollToBottom>
            <InputMessageForm/>
        </div>
    </div>
}


const Messages = ({messages, userID}) => {

    let chatMessages = messages.map((m, index) =>
        <Message key={index} message={m} userID={userID} />);

    return <div>
            {chatMessages}
    </div>
}

const Message = (props) => {

    let isSentByCurrentUser = false;
let messageId = props.message.userId;
let authUserId = props.userID
    console.log(messageId, authUserId)
    if(props.userID){

    if (messageId  === authUserId){

        isSentByCurrentUser = true
    }}
    return (isSentByCurrentUser
        ? (
                <div className={cn (st.messageContainer, st.justifyEnd)}>
                    <div className={cn (st.messageBox, st.backgroundBlue)}>
                        {props.message.message}
                        <div className={st.avatar}><img src={props.message.photo}/></div>
                        <p className={cn(st.messageText, st.colorWhite)}>{props.message.userName}</p>


                    </div>
                </div>
        )
        : (
            <div className={cn(st.messageContainer, st.justifyStart)}>
                <div className={cn(st.messageBox, st.backgroundLight)}>
                    <p className={cn(st.messageText, st.colorDark)}>{props.message.message}</p>
                    <div className={st.avatar}><img src={props.message.photo}/></div>
                    <p className={cn(st.messageText, st.colorDark)}>{props.message.userName}</p>
                </div>
            </div>
        )

    )
}

const InputMessageForm = () => {

    const [message, setMessage] = useState('')
    const sendMessage = () => {
        ws.send(message)
        setMessage('')
    }
    return <form className={s.form}>
        <input className={s.input} placeholder={"Сообщение . . ."}
               value={message}
               onKeyPress={event => event.key === 'Enter'
               && message  ? sendMessage : null }
               onChange={(e) => setMessage(e.currentTarget.value)}/>

        <button className={s.sendButton}
                onClick={message ? sendMessage : null}>
            Send
        </button>
    </form>
}


export default Chat;