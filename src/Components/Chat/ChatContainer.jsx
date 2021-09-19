import React from 'react';
import Chat from "./Chat";
import {compose} from "redux";
import {connect} from "react-redux";

import {withRouter} from "react-router-dom";
import Profile from "../Profile/Profile";

class ChatContainer extends React.Component {
    render() {
        return (
            <div>
                <Chat userID={this.props.id}/>
            </div>
        );
    }

}
let mapStateToProps = (state) => ({

    id: state.authReducer.id


});
export default compose(
    connect(mapStateToProps, {    }),
    withRouter,
)(ChatContainer);