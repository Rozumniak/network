import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMeTh, setAuthUserData, setAuthUserProfile} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeTh();
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth,
    authUserProfile: state.authReducer.authUserProfile,

});
export default connect(mapStateToProps, {setAuthUserData, setAuthUserProfile, authMeTh})(HeaderContainer);