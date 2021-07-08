import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    activateProfileEditMode, deactivateProfileEditMode,
    getProfileTh,
    getUserStatusTh,
    savePhoto, saveProfile,
    setUserProfile,
    updateStatusTh
} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.id;
        }
        this.props.getProfileTh(userID);
        this.props.getUserStatusTh(userID);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID != prevProps.match.params.userID) {
            this.refreshProfile();
        }
    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} id={this.props.id} status={this.props.status}
                         updateStatus={this.props.updateStatusTh} isOwner={!this.props.match.params.userID}
                         savePhoto={this.props.savePhoto} activateProfileEditMode={this.props.activateProfileEditMode}
                         deactivateProfileEditMode={this.props.deactivateProfileEditMode}
                         editMode={this.props.editMode} saveProfile={this.props.saveProfile}/>
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    id: state.authReducer.id,
    status: state.profilePage.status,
    editMode: state.profilePage.profileEditMode

});


export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getProfileTh,
        getUserStatusTh,
        updateStatusTh,
        savePhoto,
        activateProfileEditMode,
        deactivateProfileEditMode,
        saveProfile
    }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);