import React from 'react';
import {messageTextActionCreator, sendMessageActionCreator} from "../../Redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import MyPosts from "../Profile/MyPosts/MyPosts";

class DialogsContainer extends React.Component {
    render() {
        return <div>
            <Dialogs messagesPage={this.props.messagesPage} sendMessage={this.props.sendMessageActionCreator}/>
        </div>
    }

}

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}




export default compose(
    connect(mapStateToProps, {sendMessageActionCreator}),

)(DialogsContainer);