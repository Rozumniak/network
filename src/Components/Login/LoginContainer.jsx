import React from 'react'
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";


class LoginContainer extends React.Component {

    render() {
        return (
            <div><Login login={this.props.login} isAuth={this.props.isAuth} captchaUrl={this.props.captchaUrl}/></div>
        );
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    captchaUrl: state.authReducer.captchaUrl,
})

export default compose(
    connect(mapStateToProps, {login}),
)(LoginContainer);