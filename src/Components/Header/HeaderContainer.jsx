import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMeTh, logout, setAuthUserData, setAuthUserProfile} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth,
    authUserProfile: state.authReducer.authUserProfile,

});
export default connect(mapStateToProps, {logout})(HeaderContainer);