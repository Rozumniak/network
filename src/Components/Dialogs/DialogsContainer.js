import React from 'react';
import {messageTextActionCreator, sendMessageActionCreator} from "../../Redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        messageChange: (body) => {
            let action = messageTextActionCreator(body);
            dispatch(action);
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
withAuthRedirect
)(Dialogs);