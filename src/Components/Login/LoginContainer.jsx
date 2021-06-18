import React from 'react'
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";


class LoginContainer extends React.Component {

    render() {
        return (
            <div><Login login={this.props.login} isAuth={this.props.isAuth}/></div>
        );
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})

export default compose(
    connect(mapStateToProps, {login}),
)(LoginContainer);