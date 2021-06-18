import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getProfileTh, getUserStatusTh, setUserProfile, updateStatusTh} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.id;
        }

        this.props.getProfileTh(userID);


        this.props.getUserStatusTh(userID);


    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} id={this.props.id} status={this.props.status}
                         updateStatus={this.props.updateStatusTh}/>
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.authReducer.id,
    status: state.profilePage.status,
});


export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileTh, getUserStatusTh, updateStatusTh}),
    withAuthRedirect,
    withRouter,

)(ProfileContainer);